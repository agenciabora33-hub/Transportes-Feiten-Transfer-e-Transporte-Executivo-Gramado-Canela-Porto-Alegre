import React, { useState } from 'react';
import { FAQS } from '../data/transportesData';
import { ChevronDown, HelpCircle, MessageCircle, Sparkles } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First item open by default

  const toggleItem = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#0A0A0C] relative border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181B] border border-[#D4AF37]/30 text-xs text-[#FCF6BA] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-semibold tracking-wider uppercase text-[11px]">
              Dúvidas Frequentes • FAQ Estruturado
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Perguntas Frequentes Sobre o{' '}
            <span className="text-gold-gradient">Transfer Executivo</span>
          </h2>

          <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
            Respostas claras e transparentes para planejar sua viagem para Gramado e Canela sem
            nenhuma preocupação.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={index}
                id={`faq-item-${index}`}
                className={`luxury-card rounded-2xl transition-all overflow-hidden border ${
                  isOpen
                    ? 'border-[#D4AF37]/50 bg-[#161619] shadow-lg'
                    : 'border-zinc-800/80 bg-[#121215] hover:border-zinc-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-sm sm:text-base font-semibold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#D4AF37] text-black rotate-180 font-bold'
                        : 'bg-zinc-800 text-zinc-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-zinc-800/70 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? WhatsApp Box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#141416] border border-[#D4AF37]/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#FCF6BA] shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Ficou com alguma dúvida específica?</div>
              <div className="text-xs text-zinc-400">
                Fale agora mesmo com nossa equipe de atendimento pelo WhatsApp.
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/5554999406972?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20transfer%20da%20Transportes%20Feiten."
            target="_blank"
            rel="noopener noreferrer"
            id="faq-whatsapp-cta"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-[#25D366]/20 transition-all border border-[#25D366]"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
