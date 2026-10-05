import React, { useState } from 'react';
import { Copy, Check, Heart, Wrench, Shield, Coffee, Cpu, Crown, QrCode } from 'lucide-react';
import { QRCodeModal } from './components/QRCodeModal';

interface Tier {
  id: string;
  name: string;
  amount: string;
  subtitle: string;
  description: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

const TIERS: Tier[] = [
  {
    id: 'r2',
    name: 'O Cafezinho',
    amount: 'R$ 2,00',
    subtitle: 'Apoio Básico',
    description: 'Ajuda nos insumos do dia a dia, como luvas de nitrilo e álcool isopropílico para limpeza.',
    url: 'https://nubank.com.br/cobrar/3a4h2/6ac3abb7-271e-43cb-8da3-c2c1ef1e42d7',
    icon: Coffee,
  },
  {
    id: 'r5',
    name: 'Doutor do PS5',
    amount: 'R$ 5,00',
    subtitle: 'Apoio Essencial',
    description: 'Ajuda na compra de seringas de metal líquido de alta qualidade e novas chaves de segurança.',
    url: 'https://nubank.com.br/cobrar/3a4h2/6ac3a284-c7d1-419a-8d8c-17364a2251c7',
    icon: Cpu,
  },
  {
    id: 'custom',
    name: 'Patrão da Bancada',
    amount: 'Qualquer Valor',
    subtitle: 'Apoio Livre',
    description: 'Você escolhe a quantia que quiser para fortalecer os equipamentos e testes do laboratório.',
    url: 'https://nubank.com.br/cobrar/3a4h2/6ac1eb8d-5603-425a-9724-34655040d351',
    icon: Crown,
  },
];

export default function App() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null);

  const handleCopy = (url: string, id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleOpenQR = (tier: Tier) => {
    setSelectedTier(tier);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col justify-between selection:bg-[#0070d1] selection:text-white relative overflow-hidden">
      
      {/* PlayStation Ambient Blue Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#0070d1]/20 via-[#00e5ff]/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 ps-symbols-bg opacity-30 pointer-events-none -z-10" />

      {/* Top Bar */}
      <header className="border-b border-slate-800/80 backdrop-blur-md bg-[#07090e]/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0070d1] shadow-[0_0_12px_#00e5ff] animate-pulse"></span>
            <span className="font-black text-lg text-white tracking-tight">Canal do Leigo</span>
            <span className="text-[11px] font-mono text-[#00e5ff] px-2 py-0.5 rounded bg-[#0070d1]/15 border border-[#0070d1]/30">
              PS5
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <Wrench className="w-3.5 h-3.5 text-[#0070d1]" />
            <span>Manutenção & Dicas</span>
          </div>
        </div>
      </header>

      {/* Main Landing Page Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14 flex-1 flex flex-col justify-center">
        
        {/* Main Hero Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-10">
          
          {/* Unboxed clean metadata */}
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00e5ff] uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]"></span>
            <span>Apoio ao Canal</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>PlayStation 5</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight text-balance">
            Apoie o Canal e Fortaleça Nossa Bancada
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
            Tutoriais diretos ao ponto sobre limpeza, cuidados, troca de metal líquido e manutenção de PS5 para você cuidar do seu console sem gastar fortuna em assistência.
          </p>

          {/* Slogan Banner with PS5 Aesthetic */}
          <div className="relative mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0d1629] to-slate-900 border border-[#0070d1]/50 shadow-[0_0_25px_rgba(0,112,209,0.15)] text-left">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-[#0070d1]/20 border border-[#0070d1]/40 flex items-center justify-center shrink-0 text-[#00e5ff] mt-0.5">
                <Heart className="w-4 h-4 fill-[#00e5ff]/20 text-[#00e5ff]" />
              </div>
              <div className="space-y-1">
                <p className="text-base sm:text-lg font-bold text-white italic tracking-tight">
                  “Não seja mão de vaca e apoie o criador de conteúdos, muito obrigado Leigo!”
                </p>
                <p className="text-xs text-slate-400">
                  🎮 <strong className="text-slate-300">Leigo</strong> é o apelido dos nossos inscritos que aprendem a cuidar do próprio videogame!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Donation Cards with heavy emphasis on the names */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto w-full">
          {TIERS.map((tier) => {
            const Icon = tier.icon;

            return (
              <div
                key={tier.id}
                className="relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 bg-slate-900/90 border border-slate-800 hover:border-[#0070d1]/60 shadow-[0_4px_20px_rgba(0,0,0,0.4)] group hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar with Icon and Subtitle */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0070d1]/15 border border-[#0070d1]/30 flex items-center justify-center text-[#00e5ff] group-hover:border-[#00e5ff]/60 group-hover:scale-105 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-400">
                      {tier.subtitle}
                    </span>
                  </div>

                  {/* Main EMPHASIS: Tier Name */}
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight group-hover:text-[#00e5ff] transition-colors">
                    {tier.name}
                  </h3>

                  {/* Amount Value */}
                  <div className="mt-2 inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800 font-mono text-base font-extrabold text-[#00e5ff] tabular-nums">
                    {tier.amount}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed min-h-[44px]">
                    {tier.description}
                  </p>
                </div>

                {/* Action Buttons: Clicks open QR Code modal directly without opening new page */}
                <div className="mt-6 space-y-2 pt-4 border-t border-slate-800/80">
                  <button
                    type="button"
                    onClick={() => handleOpenQR(tier)}
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2 transition-all bg-[#0070d1] hover:bg-[#005fb3] text-white shadow-[0_0_15px_rgba(0,112,209,0.3)] hover:shadow-[0_0_22px_rgba(0,229,255,0.5)] cursor-pointer"
                  >
                    <QrCode className="w-4 h-4 shrink-0" />
                    <span>Apoiar {tier.name}</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => handleCopy(tier.url, tier.id, e)}
                    className="w-full py-2 px-3 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 bg-slate-800/40 hover:bg-slate-800 border border-slate-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {copiedId === tier.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-mono">Link Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar link do Nubank</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security & Gratitude Note */}
        <div className="mt-10 text-center max-w-lg mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs text-slate-400">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>Ao clicar em apoiar, o QR Code de cobrança é gerado na tela.</span>
          </div>
          <p className="text-xs text-slate-400">
            Pague pelo Pix com qualquer banco ou pelo aplicativo do Nubank.
          </p>
        </div>

      </main>

      {/* Clean Minimal Footer */}
      <footer className="border-t border-slate-900 bg-[#06080c] py-6 text-center text-xs text-slate-400">
        <div className="max-w-5xl mx-auto px-4 space-y-1">
          <p className="text-slate-400 font-medium">
            Canal do Leigo · Manutenção e Cuidados com PlayStation 5
          </p>
          <p className="text-slate-400">
            Muito obrigado por apoiar e não ser mão de vaca! Tamo junto na bancada.
          </p>
        </div>
      </footer>

      {/* QR Code Modal: Displays directly on screen without leaving page */}
      <QRCodeModal
        isOpen={Boolean(selectedTier)}
        onClose={() => setSelectedTier(null)}
        tier={selectedTier}
      />

    </div>
  );
}
