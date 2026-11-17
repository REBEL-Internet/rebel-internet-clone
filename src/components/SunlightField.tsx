'use client';

export function SunlightField() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base peach layer */}
      <div className="absolute inset-0 bg-[#fbd3be]" />
      
      {/* Dusty rose overlay */}
      <div className="absolute inset-0 bg-[rgba(155,77,88,0.6)]" />
      
      {/* Sunlight patches - elongated diagonal beams */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="blur1" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="18" />
          </filter>
          <filter id="blur2" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="25" />
          </filter>
          <filter id="blur3" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="32" />
          </filter>
          <filter id="blur4" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
          </filter>
        </defs>
        
        {/* Large light beams from lower left to upper right */}
        <ellipse cx="20%" cy="80%" rx="140" ry="400" fill="rgba(255,172,122,0.7)" filter="url(#blur3)" transform="rotate(-45 20 80)" className="animate-sunlight" />
        <ellipse cx="35%" cy="70%" rx="100" ry="500" fill="rgba(255,172,122,0.65)" filter="url(#blur2)" transform="rotate(-42 35 70)" />
        <ellipse cx="50%" cy="60%" rx="160" ry="350" fill="rgba(255,172,122,0.7)" filter="url(#blur4)" transform="rotate(-48 50 60)" />
        <ellipse cx="65%" cy="50%" rx="120" ry="450" fill="rgba(255,172,122,0.6)" filter="url(#blur2)" transform="rotate(-45 65 50)" />
        <ellipse cx="80%" cy="40%" rx="90" ry="380" fill="rgba(255,172,122,0.65)" filter="url(#blur1)" transform="rotate(-43 80 40)" />
        
        {/* Smaller accent beams */}
        <ellipse cx="10%" cy="90%" rx="70" ry="250" fill="rgba(255,172,122,0.5)" filter="url(#blur1)" transform="rotate(-47 10 90)" />
        <ellipse cx="25%" cy="75%" rx="85" ry="280" fill="rgba(255,172,122,0.55)" filter="url(#blur2)" transform="rotate(-44 25 75)" />
        <ellipse cx="42%" cy="65%" rx="95" ry="320" fill="rgba(255,172,122,0.6)" filter="url(#blur3)" transform="rotate(-46 42 65)" />
        <ellipse cx="58%" cy="55%" rx="80" ry="300" fill="rgba(255,172,122,0.55)" filter="url(#blur2)" transform="rotate(-45 58 55)" />
        <ellipse cx="72%" cy="45%" rx="105" ry="340" fill="rgba(255,172,122,0.6)" filter="url(#blur3)" transform="rotate(-43 72 45)" />
        <ellipse cx="88%" cy="30%" rx="75" ry="270" fill="rgba(255,172,122,0.5)" filter="url(#blur1)" transform="rotate(-47 88 30)" />
        
        {/* Upper edge beams for coverage */}
        <ellipse cx="15%" cy="20%" rx="110" ry="420" fill="rgba(255,172,122,0.5)" filter="url(#blur4)" transform="rotate(-45 15 20)" />
        <ellipse cx="45%" cy="10%" rx="95" ry="360" fill="rgba(255,172,122,0.45)" filter="url(#blur3)" transform="rotate(-46 45 10)" />
        <ellipse cx="75%" cy="15%" rx="125" ry="400" fill="rgba(255,172,122,0.5)" filter="url(#blur4)" transform="rotate(-44 75 15)" />
      </svg>
      
      {/* Very subtle grain texture */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
          <feColorMatrix type="saturate" values="0" />
          <feBlend mode="multiply" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" opacity="0.15" />
      </svg>
    </div>
  );
}
