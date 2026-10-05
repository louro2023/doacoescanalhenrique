import React from 'react';
import { Youtube, Wrench, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-[#06080d] py-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Wordmark */}
          <div className="space-y-2 text-center md:text-left">
            <a href="#" className="text-base font-black text-white tracking-tight flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0070d1] inline-block"></span>
              <span>Canal do Leigo · Manutenção de PS5</span>
            </a>
            <p className="text-slate-400 max-w-md">
              Conteúdo independente feito com dedicação para ajudar a comunidade gamer a cuidar, 
              limpar e preservar o PlayStation 5.
            </p>
          </div>

          {/* Navigation Links Mirror */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-medium text-slate-300">
            <a href="#sobre" className="hover:text-white transition-colors">
              Por Que Apoiar
            </a>
            <a href="#ferramentas" className="hover:text-white transition-colors">
              Ferramentas
            </a>
            <a href="#doacoes" className="hover:text-[#00e5ff] transition-colors">
              Doações Nubank
            </a>
            <a href="#diagnostico" className="hover:text-white transition-colors">
              Diagnóstico
            </a>
            <a href="#comunidade" className="hover:text-white transition-colors">
              Mural dos Leigos
            </a>
          </div>
        </div>

        {/* Humorous Banner Bottom & Legal Note */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-slate-500">
            “Não seja mão de vaca e apoie o criador de conteúdos, muito obrigado Leigo!”
          </p>

          <p className="text-slate-500">
            Página independente criada pela comunidade de inscritos. PlayStation e PS5 são marcas registradas da Sony Interactive Entertainment Inc.
          </p>
        </div>

      </div>
    </footer>
  );
};
