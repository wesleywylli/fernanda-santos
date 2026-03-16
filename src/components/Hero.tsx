import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background slow zoom
      gsap.to(bgRef.current, {
        scale: 1.1,
        duration: 20,
        ease: 'none',
        repeat: -1,
        yoyo: true,
      });

      // Initial reveal animation
      const tl = gsap.timeline();
      
      tl.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: 'power4.out', delay: 0.5 }
      ).fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: 'power4.out' },
        '-=1'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[100dvh] w-full overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Mobile Background Video (Wistia) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none md:hidden opacity-50">
        <iframe 
          src="https://fast.wistia.net/embed/iframe/nrewqxeyhc?seo=false&videoFoam=false&autoPlay=true&endVideoBehavior=loop&controlsVisibleOnLoad=false&fullscreenButton=false&playbackRateControl=false&playbar=false&playButton=false&settingsControl=false&volumeControl=false&muted=true" 
          allow="autoplay; fullscreen" 
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ border: 'none' }}
        />
      </div>

      {/* Desktop Background Video (Wistia) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none hidden md:block opacity-50">
        <iframe 
          src="https://fast.wistia.net/embed/iframe/ntz9wiewnz?seo=false&videoFoam=false&autoPlay=true&endVideoBehavior=loop&controlsVisibleOnLoad=false&fullscreenButton=false&playbackRateControl=false&playbar=false&playButton=false&settingsControl=false&volumeControl=false&muted=true" 
          allow="autoplay; fullscreen" 
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ border: 'none' }}
        />
      </div>
      
      {/* 30% Black Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-black/30 to-ebony" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl mx-auto mt-20">
        <h2 
          className="font-serif italic text-gold text-xl md:text-3xl mb-6 tracking-widest uppercase"
        >
          Projeto EP 2026
        </h2>
        
        <h1
          ref={titleRef}
          className="font-sans font-bold text-6xl md:text-8xl lg:text-9xl text-parchment tracking-tighter leading-none mb-8"
        >
          Fernanda Santos
        </h1>
        
        <p
          ref={subtitleRef}
          className="font-serif italic text-2xl md:text-4xl text-parchment/80 max-w-2xl"
        >
          "Uma voz que atravessa fronteiras"
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-60">
        <span className="font-mono text-xs uppercase tracking-widest">Descubra</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
};
