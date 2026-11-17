import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentUpgrade: "security",
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'rebelinternet.eu',
          },
        ],
        destination: 'https://www.rebelinternet.eu/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
