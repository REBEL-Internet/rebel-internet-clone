#!/usr/bin/env node

/**
 * DataForSEO Keyword Research Script
 * Researches keywords for REBEL Internet's 3 target niches
 */

const https = require('https');

// TODO: Add your DataForSEO credentials
const DATAFORSEO_LOGIN = process.env.DATAFORSEO_LOGIN || 'YOUR_LOGIN';
const DATAFORSEO_PASSWORD = process.env.DATAFORSEO_PASSWORD || 'YOUR_PASSWORD';

const auth = Buffer.from(`${DATAFORSEO_LOGIN}:${DATAFORSEO_PASSWORD}`).toString('base64');

// Target niches and seed keywords
const NICHES = {
  detective: {
    name: 'Detective Agencies',
    website: 'detectivewerk.nl',
    seeds: [
      'privédetective',
      'particulier detective',
      'observatie diensten',
      'ontrouw onderzoek',
      'bedrijfsfraude detective',
      'achtergrond onderzoek persoon',
      'detective bureau',
      'privé onderzoeker'
    ],
    cities: ['amsterdam', 'rotterdam', 'utrecht', 'den haag', 'eindhoven']
  },
  roofing: {
    name: 'Roofing & Contractors',
    website: '[NEW]',
    seeds: [
      'dakdekker',
      'dak reparatie',
      'daklekkage verhelpen',
      'aannemer',
      'bouwbedrijf',
      'noodservice dak',
      'dak renovatie',
      'pannendak reparatie',
      'plat dak lekkage'
    ],
    cities: ['amsterdam', 'rotterdam', 'utrecht', 'den haag', 'eindhoven']
  },
  toilets: {
    name: 'Mobile Toilet Services',
    website: 'mobieletoilettendenhaag.nl',
    seeds: [
      'mobiele toiletten huren',
      'dixie huren evenement',
      'bouwtoiletten verhuur',
      'festival toiletten',
      'noodtoiletten dienst',
      'chemische toiletten',
      'evenementen sanitair',
      'bouwplaats toilet'
    ],
    cities: ['den haag', 'amsterdam', 'rotterdam', 'utrecht']
  }
};

async function makeRequest(endpoint, data) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify([data]);
    
    const options = {
      hostname: 'api.dataforseo.com',
      path: endpoint,
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(body));
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function getKeywordIdeas(keyword, location = 2528) { // 2528 = Netherlands
  const endpoint = '/v3/dataforseo_labs/google/keyword_ideas/live';
  
  const data = {
    keywords: [keyword],
    location_code: location,
    language_code: 'nl',
    include_serp_info: true,
    include_seed_keyword: true,
    include_clickstream_data: true,
    limit: 100,
    filters: [
      ['keyword_info.search_volume', '>', 10],
      ['keyword_info.competition', '<', 80]
    ],
    order_by: ['keyword_info.search_volume,desc']
  };

  return await makeRequest(endpoint, data);
}

async function getKeywordMetrics(keywords, location = 2528) {
  const endpoint = '/v3/keywords_data/google_ads/search_volume/live';
  
  const data = {
    keywords: keywords,
    location_code: location,
    language_code: 'nl'
  };

  return await makeRequest(endpoint, data);
}

async function researchNiche(niche, nicheConfig) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Researching: ${nicheConfig.name}`);
  console.log(`Website: ${nicheConfig.website}`);
  console.log(`${'='.repeat(60)}\n`);

  const results = {
    niche: nicheConfig.name,
    website: nicheConfig.website,
    keywords: [],
    clusters: {}
  };

  // Research each seed keyword
  for (const seed of nicheConfig.seeds) {
    console.log(`Fetching ideas for: "${seed}"...`);
    
    try {
      const response = await getKeywordIdeas(seed);
      
      if (response.tasks && response.tasks[0] && response.tasks[0].result) {
        const items = response.tasks[0].result[0]?.items || [];
        
        console.log(`  Found ${items.length} keywords`);
        
        items.forEach(item => {
          if (item.keyword_info) {
            results.keywords.push({
              keyword: item.keyword_data.keyword,
              search_volume: item.keyword_info.search_volume,
              cpc: item.keyword_info.cpc,
              competition: item.keyword_info.competition,
              difficulty: item.keyword_properties?.keyword_difficulty || 'N/A'
            });
          }
        });
      }
      
      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } catch (error) {
      console.error(`  Error fetching "${seed}":`, error.message);
    }
  }

  // Add city-specific variants
  console.log(`\nFetching city-specific keywords...`);
  for (const city of nicheConfig.cities) {
    for (const seed of nicheConfig.seeds.slice(0, 3)) { // Top 3 seeds only for cities
      const cityKeyword = `${seed} ${city}`;
      console.log(`  Checking: "${cityKeyword}"...`);
      
      try {
        const response = await getKeywordMetrics([cityKeyword]);
        
        if (response.tasks && response.tasks[0] && response.tasks[0].result) {
          const item = response.tasks[0].result[0];
          
          if (item && item.search_volume > 5) {
            results.keywords.push({
              keyword: cityKeyword,
              search_volume: item.search_volume,
              cpc: item.cpc,
              competition: item.competition,
              city: city
            });
          }
        }
        
        await new Promise(resolve => setTimeout(resolve, 500));
        
      } catch (error) {
        console.error(`    Error:`, error.message);
      }
    }
  }

  return results;
}

function clusterKeywords(keywords) {
  const clusters = {
    'Transactional': [],
    'Local': [],
    'Emergency': [],
    'Informational': [],
    'Brand': []
  };

  keywords.forEach(kw => {
    const keyword = kw.keyword.toLowerCase();
    
    // City-specific = Local
    if (kw.city || /amsterdam|rotterdam|utrecht|den haag|eindhoven/.test(keyword)) {
      clusters['Local'].push(kw);
    }
    // Emergency keywords
    else if (/nood|spoed|direct|acuut|lek|storing/.test(keyword)) {
      clusters['Emergency'].push(kw);
    }
    // Transactional (hire, buy, get)
    else if (/huren|kopen|aanvragen|bestellen|inschakelen/.test(keyword)) {
      clusters['Transactional'].push(kw);
    }
    // Informational (what, how, cost)
    else if (/wat|hoe|kosten|prijs|waarom|wanneer/.test(keyword)) {
      clusters['Informational'].push(kw);
    }
    // Default to transactional
    else {
      clusters['Transactional'].push(kw);
    }
  });

  return clusters;
}

function generateReport(allResults) {
  console.log('\n\n' + '='.repeat(80));
  console.log('KEYWORD RESEARCH SUMMARY');
  console.log('='.repeat(80));

  allResults.forEach(result => {
    console.log(`\n### ${result.niche} (${result.website})`);
    console.log(`Total Keywords Found: ${result.keywords.length}`);
    
    // Sort by search volume
    const topKeywords = result.keywords
      .sort((a, b) => b.search_volume - a.search_volume)
      .slice(0, 10);
    
    console.log('\nTop 10 Keywords by Search Volume:');
    topKeywords.forEach((kw, i) => {
      console.log(`${i + 1}. ${kw.keyword}`);
      console.log(`   Volume: ${kw.search_volume} | CPC: €${kw.cpc || 'N/A'} | Competition: ${kw.competition || 'N/A'}`);
    });

    // Cluster analysis
    const clusters = clusterKeywords(result.keywords);
    console.log('\nKeyword Clusters:');
    Object.entries(clusters).forEach(([cluster, keywords]) => {
      if (keywords.length > 0) {
        const totalVolume = keywords.reduce((sum, kw) => sum + kw.search_volume, 0);
        console.log(`  ${cluster}: ${keywords.length} keywords (${totalVolume} total volume)`);
      }
    });
    
    result.clusters = clusters;
  });

  return allResults;
}

async function main() {
  console.log('REBEL Internet - Keyword Research Tool');
  console.log('Target: Netherlands (Dutch language)');
  console.log('Niches: Detective, Roofing, Mobile Toilets\n');

  if (DATAFORSEO_LOGIN === 'YOUR_LOGIN') {
    console.error('ERROR: Please set DATAFORSEO_LOGIN and DATAFORSEO_PASSWORD environment variables');
    console.error('\nUsage:');
    console.error('  export DATAFORSEO_LOGIN="your_login"');
    console.error('  export DATAFORSEO_PASSWORD="your_password"');
    console.error('  node scripts/keyword-research.js');
    process.exit(1);
  }

  const allResults = [];

  // Research each niche
  for (const [key, config] of Object.entries(NICHES)) {
    const result = await researchNiche(key, config);
    allResults.push(result);
  }

  // Generate summary report
  const finalResults = generateReport(allResults);

  // Save to JSON
  const fs = require('fs');
  const outputPath = './docs/keyword-research-results.json';
  fs.writeFileSync(outputPath, JSON.stringify(finalResults, null, 2));
  console.log(`\n\n✅ Results saved to: ${outputPath}`);
}

main().catch(console.error);
