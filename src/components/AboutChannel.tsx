import React from 'react';
import { ShieldCheck, Coins, BookOpen, Eye, Award } from 'lucide-react';

export const AboutChannel: React.FC = () => {
  return (
    <section id="sobre" className="py-16 lg:py-24 bg-[#080c14] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00e5ff] uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]"></span>
            <span>A Missão do Canal</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>De Gamer Para Gamer</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Por Que Criamos Tutoriais Gratuitos?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Um PlayStation 5 custa caro e não dá para arriscar seu console na mão de qualquer curioso. 
            Nosso canal nasceu para ensinar qualquer pessoa a cuidar do seu próprio videogame com segurança.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0070d1]/20 border border-[#0070d1]/40 flex items-center justify-center text-[#00e5ff] mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Didática Descomplicada
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Sem enrolação técnica ou palavras difíceis. Mostramos o passo a passo com câmeras focadas no parafuso exato que você precisa soltar.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-500">
              01. Foco no aprendizado
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0070d1]/20 border border-[#0070d1]/40 flex items-center justify-center text-[#00e5ff] mb-4">
                <Coins className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Economia Real no Bolso
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Uma simples desobstrução de poeira custa R$ 250 a R$ 400 em lojas especializadas. Com uma chave de R$ 20 e nossos vídeos, você faz em casa.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-500">
              02. Mais dinheiro no seu bolso
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0070d1]/20 border border-[#0070d1]/40 flex items-center justify-center text-[#00e5ff] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Alerta Anti-Golpes
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Ensinamos a identificar quando uma assistência quer trocar uma peça inteira desnecessariamente ou cobra por serviços que nem foram executados.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-500">
              03. Proteção do consumidor
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0070d1]/20 border border-[#0070d1]/40 flex items-center justify-center text-[#00e5ff] mb-4">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Bancada Transparente
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Toda doação vai direto para comprar ferramentas de medição, insumos de limpeza e peças para que possamos testar na prática e mostrar o resultado.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-500">
              04. Compromisso com a verdade
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
