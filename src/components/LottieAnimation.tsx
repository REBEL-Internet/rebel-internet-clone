'use client';

import { useEffect, useRef } from 'react';

export function LottieAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let cancelled = false;
    let animation: { destroy: () => void } | undefined;

    async function loadAnimation() {
      const [lottie, response] = await Promise.all([
        import('lottie-web'),
        fetch('/animations/hero-animation.json'),
      ]);
      if (!response.ok) throw new Error(`Animation request failed: ${response.status}`);
      const animationData = await response.json();

      if (!cancelled && containerRef.current) {
        animation = lottie.default.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData,
        });
      }
    }

    void loadAnimation().catch((error: unknown) => {
      if (!cancelled) console.error('Could not load REBEL Internet animation:', error);
    });

    return () => {
      cancelled = true;
      animation?.destroy();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full"
      aria-label="REBEL Internet Animation"
    />
  );
}
