import React, { useState } from 'react';
import { Heart, ExternalLink, ShieldCheck, Wrench, Sparkles, Copy, Check } from 'lucide-react';
import { DONATION_TIERS } from '../data/donations';

export const Hero: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const copyToClipboard = (url: string, id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2500);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800/80">
      {/* PlayStation Ambient Glow & Grid Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#0070d1]/15 via-[#00e5ff]/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 ps-symbols-bg opacity-40 pointer-events-none -z-10" />

      {/* Top Lightbar Strip */}
      <div className="max-w-4xl mx-auto h-[2px] ps5-lightbar ps5-lightbar-glow mb-10 opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Copywriting & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Context kicker: clean unboxed metadata */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#00e5ff] tracking-wide uppercase">
              <span className="inline-block w-2 h-2 rounded-full bg-[#00e5ff]"></span>
              <span>Comunidade Oficial dos Leigos</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Manutenção & Cuidados com PS5</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] text-balance">
              Salve o seu PS5 do superaquecimento. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] via-[#0070d1] to-[#60a5fa]">
                Apoie quem ensina de verdade
              </span> sem segredo.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Vídeos práticos de desmontagem segura, aplicação de metal líquido, limpeza do cooler, 
              desobstrução dos dutos de ar e reparos preventivos para você não gastar rios de dinheiro 
              em assistência técnica duvidosa.
            </p>

            {/* Creator's Signature Quote Box - Styled like a PS5 Faceplate Accent */}
            <div className="relative p-4 sm:p-5 rounded-xl bg-gradient-to-r from-slate-900 via-[#0d1424] to-slate-900 border border-[#0070d1]/40 shadow-[0_4px_24px_rgba(0,112,209,0.15)]">
              <div className="absolute -top-3 left-6 px-3 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-[#0070d1] text-white">
                Recado Direto do Criador
              </div>
              <p className="text-base sm:text-lg font-medium text-slate-100 italic pt-1">
                “Não seja mão de vaca e apoie o criador de conteúdos, muito obrigado Leigo!”
              </p>
              <p className="text-xs text-slate-400 mt-2">
                🎮 <strong className="text-slate-200">Leigo</strong> é o apelido carinhoso dos inscritos que arregaçam as mangas, 
                aprendem a abrir o console e não deixam o PS5 morrer sufocado em pó!
              </p>
            </div>

            {/* Quick Donation CTAs (The 3 user links directly accessible upfront) */}
            <div className="pt-2 space-y-3">
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                Escolha sua forma de apoiar no Nubank:
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {DONATION_TIERS.map((tier) => (
                  <div
                    key={tier.id}
                    className={`relative rounded-xl p-3.5 flex flex-col justify-between transition-all duration-200 ${
                      tier.popular
                        ? 'bg-gradient-to-b from-[#0070d1]/20 to-[#0c162c] border-2 border-[#00e5ff] shadow-[0_0_20px_rgba(0,112,209,0.3)]'
                        : 'bg-slate-900/90 border border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {tier.popular && (
                      <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-[#00e5ff] text-slate-950 font-mono">
                        Mais Popular
                      </span>
                    )}

                    <div>
                      <div className="text-lg font-black text-white font-mono">
                        {tier.amountLabel}
                      </div>
                      <div className="text-xs font-semibold text-slate-300 mt-0.5 line-clamp-1">
                        {tier.title}
                      </div>
                    </div>

                    <div className="mt-3 flex items-center gap-1.5">
                      <a
                        href={tier.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 py-1.5 px-2.5 text-xs font-bold rounded-lg text-center transition-colors flex items-center justify-center gap-1 whitespace-nowrap ${
                          tier.popular
                            ? 'bg-[#0070d1] hover:bg-[#005fb3] text-white'
                            : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                        }`}
                      >
                        <span>Apoiar</span>
                        <ExternalLink className="w-3 h-3 shrink-0" />
                      </a>
                      
                      <button
                        type="button"
                        onClick={(e) => copyToClipboard(tier.url, tier.id, e)}
                        title="Copiar link Nubank"
                        className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors"
                        aria-label={`Copiar link ${tier.amountLabel}`}
                      >
                        {copiedLink === tier.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {copiedLink && (
                <p className="text-xs text-emerald-400 font-mono flex items-center gap-1.5 animate-fadeIn">
                  <Check className="w-3.5 h-3.5" /> Link do Nubank copiado para a área de transferência!
                </p>
              )}
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <div className="text-xl sm:text-2xl font-black text-white font-mono tabular-nums">
                  100%
                </div>
                <div className="text-xs text-slate-400">Gratuito no YouTube</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#00e5ff] font-mono tabular-nums">
                  R$ 350+
                </div>
                <div className="text-xs text-slate-400">Economia média por dica</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-white font-mono tabular-nums">
                  Sem Enrolação
                </div>
                <div className="text-xs text-slate-400">Focado na bancada</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset (PlayStation 5 Repair Workbench) */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer PS5 Sculpted Curved Edge Effect */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-b from-[#00e5ff]/30 via-[#0070d1]/20 to-slate-900/60 blur-xl opacity-75 group-hover:opacity-100 transition duration-500 pointer-events-none" />
              
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl">
                {/* Visual Image with Fallback */}
                <div className="aspect-[16/10] sm:aspect-[4/3] w-full relative overflow-hidden bg-slate-950">
                  <img
                    src="/src/assets/images/ps5_repair_workbench_1791208494499.jpg"
                    alt="Bancada profissional de manutenção e reparo de PlayStation 5 com ferramentas de precisão e metal líquido"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback in case of image load error
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                    }}
                  />
                  {/* Gradient scrim for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Tech Pill Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#0070d1]/20 border border-[#0070d1]/50 flex items-center justify-center text-[#00e5ff]">
                        <Wrench className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Laboratório de Testes</div>
                        <div className="text-[11px] text-slate-400">Metal Líquido · Limpeza · HDMI</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#00e5ff] px-2 py-0.5 rounded bg-[#0070d1]/20">
                      PS5 TECH
                    </span>
                  </div>
                </div>

                {/* Micro Details under image */}
                <div className="p-4 bg-slate-900/95 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                  <span>Insumos originais e equipamentos de precisão</span>
                  <span className="font-mono text-slate-500">© Canal do Leigo</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
