import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { X, Copy, Check, ExternalLink, ShieldCheck, QrCode } from 'lucide-react';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  tier: {
    name: string;
    amount: string;
    url: string;
    subtitle: string;
  } | null;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose, tier }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !tier) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(tier.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Modal Box */}
      <div 
        className="relative w-full max-w-md bg-[#0a0e18] border border-[#0070d1]/60 rounded-3xl p-6 sm:p-7 shadow-[0_0_50px_rgba(0,112,209,0.35)] text-center space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#0070d1]/20 border border-[#0070d1]/40 text-[#00e5ff] text-xs font-mono font-bold">
            <QrCode className="w-3.5 h-3.5" />
            <span>Pagar com Nubank / Pix</span>
          </div>

          <h3 id="modal-title" className="text-xl sm:text-2xl font-black text-white tracking-tight pt-1">
            {tier.name}
          </h3>

          <div className="font-mono text-lg font-extrabold text-[#00e5ff]">
            {tier.amount}
          </div>
        </div>

        {/* QR Code Container */}
        <div className="flex flex-col items-center justify-center py-2">
          <div className="p-4 bg-white rounded-2xl shadow-[0_0_25px_rgba(0,112,209,0.25)] border-2 border-[#0070d1]/30 flex items-center justify-center">
            <QRCodeSVG
              value={tier.url}
              size={200}
              level="M"
              includeMargin={false}
              className="w-48 h-48 sm:w-52 sm:h-52"
            />
          </div>

          <p className="text-xs text-slate-300 mt-3 max-w-xs leading-relaxed">
            Aponte a câmera do seu celular ou o leitor de QR Code do seu banco para abrir o link de cobrança seguro.
          </p>
        </div>

        {/* Action Buttons inside Modal */}
        <div className="space-y-2.5 pt-2 border-t border-slate-800">
          <button
            type="button"
            onClick={handleCopyLink}
            className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-[#0070d1] hover:bg-[#005fb3] text-white flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(0,112,209,0.3)]"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Link Copiado com Sucesso!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copiar Link do Nubank</span>
              </>
            )}
          </button>

          <a
            href={tier.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 bg-slate-900/60 hover:bg-slate-800 border border-slate-800 transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Abrir direto no navegador / app</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Security badge */}
        <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Cobrança oficial processada pelo Nubank</span>
        </div>

      </div>
    </div>
  );
};
