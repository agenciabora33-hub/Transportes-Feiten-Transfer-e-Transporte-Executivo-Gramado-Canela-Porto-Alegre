import React from 'react';
import { KEY_DIFFERENTIATORS } from '../data/transportesData';
import { Plane, Compass, Baby, ShieldCheck, Check, Sparkles } from 'lucide-react';

export const KeyDifferentiators: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'PlaneTakeoff':
        return <Plane className="w-6 h-6 text-[#FCF6BA]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#FCF6BA]" />;
      case 'Baby':
        return <Baby className="w-6 h-6 text-[#FCF6BA]" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-6 h-6 text-[#FCF6BA]" />;
    }
  };

  return (
    <section
      id="diferenciais"
      className="py-16 sm:py-24 bg-[#0A0A0C] relative border-t border-zinc-900 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(212,175,55,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181B] border border-[#D4AF37]/30 text-xs text-[#FCF6BA] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-semibold tracking-wider uppercase text-[11px]">
              Padrão Executivo de Excelência
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Por Que Escolher a{' '}
            <span className="text-gold-gradient">Transportes Feiten</span>?
          </h2>

          <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
            Mais que um simples deslocamento: oferecemos uma recepção calorosa, acolhedora e
            completamente segura na Serra Gaúcha para você e sua família.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {KEY_DIFFERENTIATORS.map((diff, index) => (
            <div
              key={diff.id}
              id={`diff-card-${diff.id}`}
              className="luxury-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top indicator */}
              <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent group-hover:via-[#FCF6BA] transition-all" />

              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#0D0D0D] border border-[#D4AF37]/35 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:scale-105 transition-all shadow-md">
                    {getIcon(diff.iconName)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-full border border-[#D4AF37]/25">
                    0{index + 1} • {diff.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-[#FCF6BA] transition-colors leading-snug">
                  {diff.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-5">
                  {diff.description}
                </p>
              </div>

              {/* Bullet points */}
              <div className="pt-4 border-t border-zinc-800/80 space-y-2 text-xs text-zinc-300">
                {diff.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span className="text-[11.5px] text-zinc-300">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick reassuring strip */}
        <div className="mt-12 p-4 sm:p-6 rounded-2xl bg-[#141417] border border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                Tranquilidade desde o primeiro contato
              </div>
              <div className="text-xs text-zinc-400">
                Sem surpresas na chegada: veículos revisados, higienizados e motoristas com ampla experiência.
              </div>
            </div>
          </div>
          <a
            href="https://wa.me/5554999406972?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20o%20atendimento%20da%20Transportes%20Feiten."
            target="_blank"
            rel="noopener noreferrer"
            id="diff-quick-contact-btn"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-[#D4AF37]/20 text-[#FCF6BA] border border-[#D4AF37]/40 text-xs font-semibold transition-all"
          >
            Falar com a Equipe
          </a>
        </div>
      </div>
    </section>
  );
};
