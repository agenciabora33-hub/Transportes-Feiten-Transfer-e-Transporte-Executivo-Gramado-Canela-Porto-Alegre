import React from 'react';
import { MessageCircle, Phone, CalendarCheck } from 'lucide-react';

interface StickyBottomMobileBarProps {
  onOpenQuoteModal: () => void;
}

export const StickyBottomMobileBar: React.FC<StickyBottomMobileBarProps> = ({
  onOpenQuoteModal,
}) => {
  return (
    <div
      id="sticky-mobile-cta-bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#0D0D0D]/95 backdrop-blur-lg border-t border-[#D4AF37]/30 p-2.5 sm:hidden shadow-2xl transition-all"
    >
      <div className="flex items-center gap-2">
        {/* Quick Simulator trigger button */}
        <button
          onClick={onOpenQuoteModal}
          id="sticky-mobile-simulate-btn"
          className="flex-1 min-h-[48px] px-3 py-2 rounded-xl bg-zinc-900 border border-[#D4AF37]/40 text-[#FCF6BA] text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
        >
          <CalendarCheck className="w-4 h-4 text-[#D4AF37]" />
          <span>Simular Cotação</span>
        </button>

        {/* WhatsApp primary instant reservation button */}
        <a
          href="https://wa.me/5554999406972?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20de%20transfer."
          target="_blank"
          rel="noopener noreferrer"
          id="sticky-mobile-whatsapp-btn"
          className="flex-[1.4] min-h-[48px] px-3 py-2 rounded-xl bg-[#25D366] active:bg-[#20bd5a] text-black font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/30 border border-[#25D366] active:scale-95 transition-transform"
        >
          <MessageCircle className="w-5 h-5 fill-black shrink-0" />
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[11px] font-extrabold uppercase">Reservar Transfer</span>
            <span className="text-[9px] font-medium text-black/80">via WhatsApp 24h</span>
          </div>
        </a>
      </div>
    </div>
  );
};
