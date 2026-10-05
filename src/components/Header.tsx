import React, { useState } from 'react';
import { Menu, X, Heart, Wrench } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#07090e]/90 border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single text element wordmark in display face) */}
        <a 
          href="#" 
          className="text-lg sm:text-xl font-black tracking-tight text-white flex items-center gap-2 group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#0070d1] shadow-[0_0_12px_#00e5ff] inline-block animate-pulse"></span>
          <span>Canal do Leigo</span>
          <span className="text-xs font-mono font-normal text-[#00e5ff] bg-[#0070d1]/10 px-2 py-0.5 rounded border border-[#0070d1]/30 hidden sm:inline-block">
            PS5 Lab
          </span>
        </a>

        {/* Zone 2: 4-6 Nav Links, single line */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#sobre" className="hover:text-white transition-colors">
            Por Que Apoiar
          </a>
          <a href="#ferramentas" className="hover:text-white transition-colors">
            Ferramentas
          </a>
          <a href="#doacoes" className="hover:text-[#00e5ff] transition-colors">
            Valores de Apoio
          </a>
          <a href="#diagnostico" className="hover:text-white transition-colors">
            Diagnóstico do PS5
          </a>
          <a href="#comunidade" className="hover:text-white transition-colors">
            Mural dos Leigos
          </a>
        </nav>

        {/* Zone 3: 1-2 Primary Actions */}
        <div className="flex items-center gap-3">
          <a
            href="#doacoes"
            className="hidden sm:inline-flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#0070d1] hover:bg-[#005fb3] rounded-lg transition-all shadow-[0_0_18px_rgba(0,112,209,0.4)] hover:shadow-[0_0_24px_rgba(0,229,255,0.6)] whitespace-nowrap"
          >
            <Heart className="w-3.5 h-3.5 fill-white text-white" />
            <span>Fazer Doação</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#090d16] px-4 pt-3 pb-5 space-y-3">
          <a
            href="#sobre"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-white py-1.5"
          >
            Por Que Apoiar
          </a>
          <a
            href="#ferramentas"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-white py-1.5"
          >
            Ferramentas da Bancada
          </a>
          <a
            href="#doacoes"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#00e5ff] hover:text-white py-1.5 font-semibold"
          >
            Opções de Apoio (Nubank / Pix)
          </a>
          <a
            href="#diagnostico"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-white py-1.5"
          >
            Diagnóstico do seu PS5
          </a>
          <a
            href="#comunidade"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-white py-1.5"
          >
            Mural dos Leigos
          </a>
          <div className="pt-2">
            <a
              href="#doacoes"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#0070d1] rounded-lg"
            >
              <Heart className="w-4 h-4 fill-white" />
              Apoiar o Canal Agora
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
