import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Sparkles, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/transportesData';

export const FloatingWhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Automatically pop up the greeting tooltip after 2.5 seconds to catch attention
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setShowTooltip(true);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [isDismissed]);

  const defaultWhatsAppUrl =
    'https://wa.me/5554999406972?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20de%20transfer%20executivo%20com%20a%20Transportes%20Feiten.';

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-24 sm:bottom-7 right-4 sm:right-7 z-50 flex flex-col items-end pointer-events-none"
    >
      {/* Speech Bubble / Floating Attention Card */}
      {showTooltip && (
        <div
          id="floating-whatsapp-bubble"
          className="pointer-events-auto mb-3 max-w-[280px] sm:max-w-xs bg-[#161619]/95 backdrop-blur-md rounded-2xl p-3.5 border border-[#D4AF37]/50 shadow-2xl relative animate-in fade-in slide-in-from-bottom-3 duration-300"
        >
          {/* Dismiss button */}
          <button
            onClick={() => {
              setShowTooltip(false);
              setIsDismissed(true);
            }}
            id="floating-bubble-close-btn"
            className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center text-xs"
            aria-label="Fechar mensagem"
          >
            <X className="w-3 h-3" />
          </button>

          {/* Online Agent Header */}
          <div className="flex items-center gap-2 mb-2 pr-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]" />
            </span>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-[#FCF6BA] uppercase tracking-wider flex items-center gap-1">
                <span>Atendimento VIP</span>
                <Sparkles className="w-2.5 h-2.5 text-[#D4AF37]" />
              </span>
              <span className="text-[9.5px] text-zinc-400">Resposta em até 5 minutos</span>
            </div>
          </div>

          {/* Message preview */}
          <p className="text-xs text-zinc-200 leading-snug mb-3 font-normal">
            Olá! Vai para Gramado ou Canela? Faça sua cotação de transfer privativo agora pelo WhatsApp!
          </p>

          {/* Quick CTA inside bubble */}
          <a
            href={defaultWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="floating-bubble-action-btn"
            className="w-full py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-[#25D366]/30 border border-[#25D366]"
          >
            <span>Iniciar Conversa</span>
            <Send className="w-3 h-3" />
          </a>

          {/* Triangle arrow pointing to button */}
          <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#D4AF37]/50" />
        </div>
      )}

      {/* Main Floating WhatsApp Action Button */}
      <div className="relative pointer-events-auto group">
        {/* Pulsing Outer Halo Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

        {/* Second Rotating/Glowing Gold Border Ring */}
        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#AA771C] opacity-70 blur-[2px] group-hover:opacity-100 transition-opacity" />

        <a
          href={defaultWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          aria-label="Falar com Transportes Feiten no WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#1EBE5D] via-[#25D366] to-[#40E27C] text-black border-2 border-[#FCF6BA] shadow-2xl transition-all duration-300 transform group-hover:scale-110 group-active:scale-95 animate-whatsapp-pulse"
        >
          {/* Animated WhatsApp Icon with Gentle Wiggle */}
          <div className="animate-gentle-wiggle">
            <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-black text-black drop-shadow" />
          </div>

          {/* Unread Alert Notification Badge */}
          <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-[20px] px-1 bg-red-600 text-white text-[10px] font-extrabold rounded-full border-2 border-zinc-900 shadow-md">
            1
          </span>
        </a>

        {/* Hover Pill Label on Desktop */}
        <div className="hidden lg:group-hover:flex absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-xl bg-zinc-950/90 backdrop-blur-md border border-[#D4AF37]/50 text-white text-xs font-semibold whitespace-nowrap shadow-xl items-center gap-1.5 pointer-events-none animate-in fade-in duration-200">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span className="text-[#FCF6BA] font-bold">WhatsApp Direct:</span>
          <span>(54) 99940-6972</span>
        </div>
      </div>
    </div>
  );
};
