import React, { useState } from 'react';
import { SERVICES_OFFERED } from '../data/transportesData';
import { ServiceItem } from '../types';
import {
  Plane,
  Wine,
  Camera,
  Mountain,
  Award,
  Clock,
  Users,
  CheckCircle,
  MessageCircle,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'transfer' | 'tour' | 'event'>('all');

  const getServiceIcon = (category: string, id: string) => {
    if (id === 'transfer-aeroporto') return <Plane className="w-5 h-5 text-[#FCF6BA]" />;
    if (id === 'tour-vinhedos') return <Wine className="w-5 h-5 text-[#FCF6BA]" />;
    if (id === 'city-tour') return <Camera className="w-5 h-5 text-[#FCF6BA]" />;
    if (id === 'tour-canions') return <Mountain className="w-5 h-5 text-[#FCF6BA]" />;
    return <Award className="w-5 h-5 text-[#FCF6BA]" />;
  };

  const filteredServices = SERVICES_OFFERED.filter((s) => {
    if (activeFilter === 'all') return true;
    return s.category === activeFilter;
  });

  const getWhatsAppServiceLink = (serviceTitle: string) => {
    const text = `Olá! Gostaria de informações e valores sobre o serviço: *${serviceTitle}* com a Transportes Feiten.`;
    return `https://wa.me/5554999406972?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="servicos" className="py-16 sm:py-24 bg-[#0D0D0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181B] border border-[#D4AF37]/30 text-xs text-[#FCF6BA] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-semibold tracking-wider uppercase text-[11px]">
                Portfólio de Serviços Exclusivos
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Experiências & Transfers <br />
              <span className="text-gold-gradient">Sob Medida para Você</span>
            </h2>

            <p className="text-sm sm:text-base text-[#A1A1AA] mt-3">
              Todos os nossos serviços são 100% privativos, com veículos executivos dedicados
              exclusivamente à sua família ou grupo.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-[#18181B] border border-zinc-800 self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#D4AF37]/25 text-[#FCF6BA] border border-[#D4AF37]/50 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Todos (5)
            </button>
            <button
              onClick={() => setActiveFilter('transfer')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeFilter === 'transfer'
                  ? 'bg-[#D4AF37]/25 text-[#FCF6BA] border border-[#D4AF37]/50 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Transfers Aeroporto
            </button>
            <button
              onClick={() => setActiveFilter('tour')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeFilter === 'tour'
                  ? 'bg-[#D4AF37]/25 text-[#FCF6BA] border border-[#D4AF37]/50 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Tours & Passeios
            </button>
            <button
              onClick={() => setActiveFilter('event')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeFilter === 'event'
                  ? 'bg-[#D4AF37]/25 text-[#FCF6BA] border border-[#D4AF37]/50 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Eventos & VIP
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className={`luxury-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative group ${
                service.popular ? 'border-[#D4AF37]/50 shadow-xl' : ''
              }`}
            >
              {/* Badge if exists */}
              {service.badge && (
                <div className="absolute -top-3 right-6">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border shadow-md ${
                      service.popular
                        ? 'bg-[#D4AF37] text-black border-[#FCF6BA] font-extrabold'
                        : 'bg-[#18181B] text-[#FCF6BA] border-[#D4AF37]/40'
                    }`}
                  >
                    {service.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Header of Card */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0D0D0D] border border-[#D4AF37]/30 flex items-center justify-center shrink-0 group-hover:border-[#D4AF37] transition-colors">
                    {getServiceIcon(service.category, service.id)}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-[#FCF6BA] transition-colors leading-snug">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Subtitle */}
                <div className="text-xs font-medium text-[#D4AF37] mb-3">
                  {service.subtitle}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6 pt-4 border-t border-zinc-800">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Meta information & CTA */}
              <div className="pt-4 border-t border-zinc-800/80">
                <div className="grid grid-cols-2 gap-2 text-[11px] text-zinc-400 mb-4 bg-[#0D0D0D]/60 p-2.5 rounded-xl border border-zinc-800/60">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span className="truncate">{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span className="truncate">{service.capacity}</span>
                  </div>
                </div>

                <a
                  href={getWhatsAppServiceLink(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`service-cta-${service.id}`}
                  className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                    service.popular
                      ? 'bg-[#25D366] hover:bg-[#20bd5a] text-black shadow-lg shadow-[#25D366]/20 font-bold border border-[#25D366]'
                      : 'bg-[#18181B] hover:bg-[#D4AF37]/15 text-[#FCF6BA] border border-[#D4AF37]/40 hover:border-[#D4AF37]'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Reservar Este Serviço</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom request banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#18181B] via-[#141417] to-[#18181B] border border-[#D4AF37]/25 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-display text-lg font-bold text-white">
              Precisa de um roteiro personalizado ou translado para outra cidade?
            </h4>
            <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1">
              Montamos itinerários exclusivos para qualquer destino no Rio Grande do Sul e Santa Catarina.
            </p>
          </div>
          <a
            href="https://wa.me/5554999406972?text=Ol%C3%A1!%20Gostaria%20de%20um%20roteiro%20personalizado%20com%20a%20Transportes%20Feiten."
            target="_blank"
            rel="noopener noreferrer"
            id="custom-route-whatsapp-btn"
            className="shrink-0 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-[#25D366]/20"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>Solicitar Roteiro Sob Medida</span>
          </a>
        </div>
      </div>
    </section>
  );
};
