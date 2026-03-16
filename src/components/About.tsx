import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray('.reveal-text');
      
      elements.forEach((el: any) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-parchment text-ebony rounded-[2.5rem] my-12 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-bl-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ebony/5 rounded-tr-full blur-3xl" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10 items-center">
        {/* Section 1: Sobre o Ministério */}
        <div className="space-y-8">
          <div className="reveal-text">
            <span className="font-mono text-gold text-sm tracking-widest uppercase mb-4 block">01 / Origem</span>
            <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Sobre o Ministério
            </h2>
          </div>
          
          <div className="reveal-text space-y-6 font-serif text-lg md:text-xl leading-relaxed text-ebony/80">
            <p>
              Fernanda foi chamada para o ministério com cinco anos de idade e desde muito cedo demonstrou um forte chamado para servir a Deus através da música. Ainda jovem começou a ministrar em igrejas e eventos, destacando-se por sua voz marcante e pela forma como conduz as pessoas à adoração.
            </p>
            <p>
              Ao longo de sua trajetória passou a viajar por diversos estados do Brasil participando de grandes eventos cristãos, além de ministrar também em países como Alemanha, Inglaterra, Espanha e Estados Unidos.
            </p>
            <p>
              Em 2021 assinou contrato com a gravadora Graça Music e desde então lançou diversos singles, videoclipes e projetos nas plataformas digitais. Sua carreira já soma dois CDs gravados, diversos lançamentos e milhares de pessoas alcançadas através de sua música e ministério.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="reveal-text relative h-[500px] lg:h-[700px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
          <img 
            src="https://storage.googleapis.com/aistudio-janus-prod-us-east1-user-files/111812891392601729440/1742055694247504/image_2.jpeg" 
            alt="Fernanda Santos Ministrando" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div className="mt-24 lg:mt-32 max-w-4xl mx-auto text-center relative z-10">
        {/* Section 2: Missão e Propósito */}
        <div className="space-y-8">
          <div className="reveal-text">
            <span className="font-mono text-gold text-sm tracking-widest uppercase mb-4 block">02 / Chamado</span>
            <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Missão e Propósito
            </h2>
          </div>
          
          <div className="reveal-text space-y-6 font-serif text-lg md:text-xl leading-relaxed text-ebony/80">
            <p>
              A missão do ministério de Fernanda Santos é levar o Evangelho de Jesus Cristo através da música, tocando corações por meio da adoração e da mensagem da graça de Deus.
            </p>
            <p className="italic font-medium text-ebony border-l-2 md:border-l-0 md:border-t-2 md:border-b-2 border-gold pl-6 md:pl-0 py-6 my-12 text-2xl md:text-3xl">
              "Por meio de suas canções, pessoas têm sido restauradas, curadas e profundamente tocadas pelo Espírito Santo."
            </p>
            <p>
              O ministério de Fernanda tem sido instrumento nas mãos de Deus para que vidas sejam alcançadas, conheçam o nome de Jesus e sejam salvas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
