import React, { useState } from 'react';
import { ExternalLink, Copy, Check, Heart, Sparkles, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import { DONATION_TIERS, DonationTier } from '../data/donations';

export const DonationTiers: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedSimValue, setSelectedSimValue] = useState<number>(5);

  const handleCopy = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // Dynamic simulation impact helper
  const getSimulationImpact = (value: number) => {
    if (value <= 2) {
      return {
        item: 'Kit de Hastes Antiestáticas + Luvas Nitrílicas',
        desc: 'Garante que os componentes sensíveis da placa mãe do PS5 não sofram descarga eletrostática (ESD) durante a gravação de 1 episódio completo.',
        level: 'Insumo Essencial'
      };
    } else if (value <= 5) {
      return {
        item: 'Dose Fracionada de Metal Líquido de Alta Performance',
        desc: 'Permite renovar a barreira de vedação e aplicar a quantidade exata de metal líquido no die da APU, impedindo o escorrimento e oxidação do chip.',
        level: 'Arrefecimento Máximo'
      };
    } else if (value <= 10) {
      return {
        item: '1 Litro de Álcool Isopropílico 99,8% Grau Eletrônico',
        desc: 'Suficiente para desoxidar completamente 4 consoles PS5 com resíduos de poeira úmida, maresia ou insetos que entram pela fonte de alimentação.',
        level: 'Higienização Profunda'
      };
    } else if (value <= 25) {
      return {
        item: 'Chave Torx T8 de Segurança em Aço Cromo-Vanádio Magnética',
        desc: 'A ferramenta mais importante do canal! Com a ponta vazada precisa, evita espanar os parafusos do gabinete do PS5, que travam o console se forem danificados.',
        level: 'Ferramenta de Precisão'
      };
    } else if (value <= 50) {
      return {
        item: 'Cartela de Thermal Pads de Alta Condutividade (12.8 W/mK)',
        desc: 'Substituição das borrachas térmicas velhas dos chips de memória GDDR6 e dos reguladores de tensão VRM da placa mãe.',
        level: 'Upgrade Térmico'
      };
    } else {
      return {
        item: 'Fundo para Equipamentos Avançados e Peças de Demonstração',
        desc: 'Ajuda a comprar placas de sucata para demonstrar medições de curto em vídeo, bicos de solda fina e lentes de microscópio para filmar reparos em macro 4K.',
        level: 'Equipamento de Bancada'
      };
    }
  };

  const simImpact = getSimulationImpact(selectedSimValue);

  return (
    <section id="doacoes" className="py-16 lg:py-24 bg-[#0a0e18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00e5ff] uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]"></span>
            <span>Apoie a Bancada</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Link Seguro Nubank</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Escolha Como Fortalecer o Canal
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Os links abaixo abrem diretamente a cobrança do Nubank no seu aplicativo ou navegador. 
            Você pode pagar por Pix com total segurança e praticidade.
          </p>
        </div>

        {/* 3 Main Donation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {DONATION_TIERS.map((tier) => {
            const isHighlighted = tier.popular;

            return (
              <div
                key={tier.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  isHighlighted
                    ? 'bg-gradient-to-b from-[#0f1d3a] to-[#0a1224] border-2 border-[#00e5ff] shadow-[0_0_30px_rgba(0,112,209,0.35)] md:-translate-y-2'
                    : 'bg-slate-900/90 border border-slate-800 hover:border-slate-700'
                } p-6 sm:p-7`}
              >
                {/* Popular Callout */}
                {isHighlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-[#00e5ff] to-[#0070d1] text-slate-950 font-mono shadow-md">
                    ★ Escolha da Galera (R$ 5)
                  </div>
                )}

                <div>
                  {/* Price and Title */}
                  <div className="flex items-baseline justify-between border-b border-slate-800/80 pb-4">
                    <div>
                      <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                        {tier.amountLabel}
                      </div>
                      <div className="text-sm font-semibold text-[#00e5ff] mt-0.5">
                        {tier.title}
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300">
                      <Heart className={`w-5 h-5 ${isHighlighted ? 'text-[#00e5ff] fill-[#00e5ff]/20' : 'text-slate-400'}`} />
                    </div>
                  </div>

                  {/* Subtitle / Description */}
                  <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                    {tier.subtitle}
                  </p>

                  {/* Direct Impact */}
                  <div className="mt-4 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 space-y-1">
                    <span className="font-semibold text-slate-200 block">Onde esse valor ajuda:</span>
                    <p className="text-slate-400 leading-normal">{tier.impact}</p>
                  </div>

                  {/* Checklist of supported items */}
                  <ul className="mt-5 space-y-2.5 text-xs text-slate-300">
                    {tier.toolsBought.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00e5ff] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 space-y-2.5 pt-4 border-t border-slate-800/80">
                  <a
                    href={tier.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 transition-all ${
                      isHighlighted
                        ? 'bg-[#0070d1] hover:bg-[#005fb3] text-white shadow-[0_0_20px_rgba(0,112,209,0.5)]'
                        : 'bg-white hover:bg-slate-100 text-slate-900'
                    }`}
                  >
                    <span>Doar {tier.amountLabel} no Nubank</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={() => handleCopy(tier.url, tier.id)}
                    className="w-full py-2 px-3 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 bg-slate-800/40 hover:bg-slate-800 border border-slate-800 transition-colors flex items-center justify-center gap-1.5"
                  >
                    {copiedId === tier.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Link de Cobrança Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar link do Pix / Cobrança</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Interactive Impact Simulator */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0c1527] to-slate-900 border border-slate-800">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-black text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#00e5ff]" />
                  Simulador de Impacto do Leigo
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Veja exatamente o que cada quantia viabiliza para a qualidade dos vídeos e para a bancada:
                </p>
              </div>

              {/* Quick selector buttons */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950/80 border border-slate-800 overflow-x-auto">
                {[2, 5, 10, 25, 50, 100].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setSelectedSimValue(val)}
                    className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg transition-colors whitespace-nowrap ${
                      selectedSimValue === val
                        ? 'bg-[#0070d1] text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    R$ {val}
                  </button>
                ))}
              </div>
            </div>

            {/* Visual feedback of the chosen value */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-950/80 border border-[#0070d1]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#00e5ff] px-2 py-0.5 rounded bg-[#0070d1]/20">
                    {simImpact.level}
                  </span>
                  <span className="text-sm font-bold text-white">
                    {simImpact.item}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  {simImpact.desc}
                </p>
              </div>

              <a
                href={
                  selectedSimValue === 2
                    ? 'https://nubank.com.br/cobrar/3a4h2/6ac3abb7-271e-43cb-8da3-c2c1ef1e42d7'
                    : selectedSimValue === 5
                    ? 'https://nubank.com.br/cobrar/3a4h2/6ac3a284-c7d1-419a-8d8c-17364a2251c7'
                    : 'https://nubank.com.br/cobrar/3a4h2/6ac1eb8d-5603-425a-9724-34655040d351'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold rounded-lg bg-[#0070d1] hover:bg-[#005fb3] text-white flex items-center justify-center gap-2 whitespace-nowrap shadow-sm"
              >
                <span>Apoiar R$ {selectedSimValue},00</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
