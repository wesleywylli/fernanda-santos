import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Project: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray('.reveal-project');
      
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
    <section ref={containerRef} className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto text-parchment relative">
      {/* Section 3: O Projeto Musical */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
        <div className="lg:col-span-5 reveal-project">
          <span className="font-mono text-gold text-sm tracking-widest uppercase mb-4 block">03 / Produção</span>
          <h2 className="font-sans text-5xl md:text-6xl font-bold tracking-tight mb-8">
            O Projeto Musical
          </h2>
          <div className="w-12 h-[2px] bg-gold mb-8" />
        </div>
        
        <div className="lg:col-span-7 reveal-project space-y-6 font-serif text-xl leading-relaxed text-parchment/80">
          <p>
            O projeto consiste na produção e gravação de um EP com cinco canções. A proposta é lançar as músicas nas plataformas digitais e utilizá-las também em igrejas, eventos e ministrações, ampliando o alcance do ministério.
          </p>
          <p>
            Para isso será necessária uma estrutura completa envolvendo produção musical, músicos, ensaios, gravação de áudio e vídeo, além de equipe técnica e equipamentos profissionais.
          </p>
        </div>
      </div>

      {/* Section 4: Contribuição */}
      <div className="bg-ebony border border-gold/20 rounded-[2.5rem] p-8 md:p-16 lg:p-24 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-ebony to-ebony opacity-50 pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-project space-y-8">
            <span className="font-mono text-gold text-sm tracking-widest uppercase mb-4 block">04 / Investimento</span>
            <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Contribuição para Realização
            </h2>
            
            <div className="font-mono text-5xl md:text-6xl text-gold font-light tracking-tighter my-8">
              R$ 25.000,00
            </div>
            
            <div className="space-y-6 font-serif text-lg leading-relaxed text-parchment/70">
              <p>
                Este valor representa a contribuição necessária para viabilizar toda a produção e gravação do EP. Dentro desse investimento estão incluídos os custos de produção musical, direção artística, preparação dos arranjos e ensaios das músicas, além da participação dos músicos que farão parte da gravação.
              </p>
              <p>
                O projeto também envolve a estrutura necessária para a gravação, incluindo iluminação profissional, preparação do ambiente, cenário e elementos de decoração que ajudarão a compor o espaço da gravação.
              </p>
              <p>
                Também está prevista a locação do espaço onde a gravação será realizada, além de toda a montagem da estrutura técnica necessária para que o trabalho aconteça com qualidade. Outros custos contemplados incluem gravação de vídeo, equipe de filmagem, fotografias do projeto, produção visual, logística da equipe, deslocamentos, viagens quando necessário e materiais de divulgação para o lançamento das músicas nas plataformas digitais.
              </p>
            </div>
          </div>

          <div className="reveal-project flex flex-col items-center justify-center space-y-6 lg:pl-16 w-full">            
            <button className="w-full max-w-md py-6 text-lg bg-gold text-ebony font-medium tracking-widest uppercase rounded-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(212,175,55,0.6)]">
              Contribuir com o Projeto
            </button>
            <a 
              href="#" 
              download="Projeto_EP_Fernanda_Santos_2026.pdf"
              className="w-full max-w-md py-4 text-sm flex items-center justify-center gap-3 border border-gold/30 text-gold font-medium tracking-widest uppercase rounded-full transition-all duration-300 hover:bg-gold/10 hover:-translate-y-1"
            >
              <Download className="w-4 h-4" />
              Baixar Apresentação (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
