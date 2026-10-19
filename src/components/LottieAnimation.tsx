'use client';

import { useEffect, useRef } from 'react';

export function LottieAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;
    
    import('lottie-web').then((lottie) => {
      fetch('/animations/hero-animation.json')
        .then(res => res.json())
        .then(animationData => {
          if (!containerRef.current) return;
          
          const animation = lottie.default.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData
          });

          return () => {
            animation.destroy();
          };
        });
    });
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full"
      aria-label="REBEL Internet Animation"
    />
  );
}
