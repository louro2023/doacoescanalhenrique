import React from 'react';
import { Wrench, AlertTriangle, ShieldCheck, Flame, Cpu, Sparkles } from 'lucide-react';
import { CHANNEL_TOOLS } from '../data/donations';

export const ToolsCostBreakdown: React.FC = () => {
  return (
    <section id="ferramentas" className="py-16 lg:py-24 bg-[#07090e] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00e5ff] uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]"></span>
            <span>Transparência na Bancada</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>O Que Seu Apoio Financia</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Ferramentas Reais Para Ensinar Sem Enrolação
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Manutenção no PS5 não é igual a computador comum: exige ferramentas com especificações exatas. 
            Veja os insumos e instrumentos que mantêm nossos vídeos precisos e seguros.
          </p>
        </div>

        {/* Visual Bento Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          
          {/* Card 1: Liquid Metal Maintenance */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex flex-col justify-between group">
            <div className="aspect-[16/10] relative overflow-hidden bg-slate-950">
              <img
                src="/src/assets/images/ps5_liquid_metal_service_1791208510593.jpg"
                alt="Manutenção e aplicação criteriosa de metal líquido na APU do PlayStation 5"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] font-mono font-bold text-[#00e5ff] px-2 py-0.5 rounded bg-slate-900/90 border border-[#0070d1]/40">
                  ARREFECIMENTO CRÍTICO
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  O Perigo do Metal Líquido
                </h3>
              </div>
            </div>
            
            <div className="p-6 space-y-3">
              <p className="text-sm text-slate-300 leading-relaxed">
                Ao contrário de consoles anteriores que usavam pasta térmica comum, o PS5 usa composto de gálio e índio líquido. 
                Se escorrer para fora da esponja de vedação, fecha curto na placa e condena o videogame. Nosso canal ensina a barreira protetora que nenhuma assistência conta!
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>Custo médio do insumo: R$ 110 por tubo de 1g</span>
              </div>
            </div>
          </div>

          {/* Card 2: Precision Toolkit */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex flex-col justify-between group">
            <div className="aspect-[16/10] relative overflow-hidden bg-slate-950">
              <img
                src="/src/assets/images/ps5_maintenance_tools_1791208523596.jpg"
                alt="Kit de chaves Torx T8 de precisão, álcool isopropílico e pinças antiestáticas"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] font-mono font-bold text-[#00e5ff] px-2 py-0.5 rounded bg-slate-900/90 border border-[#0070d1]/40">
                  DESMONTAGEM SEGURA
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  Chaves Torx T8 com Furo de Segurança
                </h3>
              </div>
            </div>
            
            <div className="p-6 space-y-3">
              <p className="text-sm text-slate-300 leading-relaxed">
                A Sony colocou parafusos Security Torx com pino central nos coolers e no chassi interno. 
                Tentativas de forçar com chave de fenda comum detonam a cabeça do parafuso e deixam o dono do console em pânico. Nós mostramos o kit certo para fazer em casa.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
                <ShieldCheck className="w-4 h-4 text-[#00e5ff]" />
                <span>Evita perda da garantia do gabinete e preserva o hardware</span>
              </div>
            </div>
          </div>

        </div>

        {/* Detailed List of Tools Funded by Donations */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-white">
                Inventário da Bancada do Leigo
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Custos recorrentes que mantêm as dicas e demonstrações práticas gratuitas
              </p>
            </div>
            <a
              href="#doacoes"
              className="text-xs font-bold font-mono text-[#00e5ff] hover:underline hidden sm:inline-block"
            >
              Apoiar agora →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CHANNEL_TOOLS.map((tool, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex flex-col justify-between space-y-3 hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-400 font-mono mb-1.5">
                    <span>{tool.category}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                        tool.importance === 'Crítico'
                          ? 'bg-rose-950/60 text-rose-300 border border-rose-800/50'
                          : tool.importance === 'Essencial'
                          ? 'bg-blue-950/60 text-[#00e5ff] border border-blue-800/50'
                          : 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/50'
                      }`}
                    >
                      {tool.importance}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white leading-snug">
                    {tool.name}
                  </h4>

                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {tool.purpose}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-mono">Custo Médio:</span>
                  <span className="font-mono font-bold text-slate-200 tabular-nums">
                    {tool.estimatedCost}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Slogan Reminder Banner */}
          <div className="mt-8 p-4 rounded-xl bg-[#0070d1]/10 border border-[#0070d1]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-9 h-9 rounded-lg bg-[#0070d1]/20 flex items-center justify-center shrink-0 text-[#00e5ff]">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-white">
                  Economizou R$ 300 numa limpeza de assistência?
                </p>
                <p className="text-xs text-slate-400">
                  Um Pix de R$ 2 ou R$ 5 já paga o álcool ou o metal líquido do próximo vídeo.
                </p>
              </div>
            </div>

            <a
              href="#doacoes"
              className="px-4 py-2 text-xs font-bold text-white bg-[#0070d1] hover:bg-[#005fb3] rounded-lg transition-colors whitespace-nowrap shadow-sm"
            >
              Fazer Minha Contribuição
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
