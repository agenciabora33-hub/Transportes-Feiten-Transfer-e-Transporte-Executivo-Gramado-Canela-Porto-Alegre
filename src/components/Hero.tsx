import React, { useState } from 'react';
import { COMPANY_INFO, buildWhatsAppQuoteUrl } from '../data/transportesData';
import { TransferQuoteState } from '../types';
import {
  MessageCircle,
  Star,
  ShieldCheck,
  Baby,
  Calendar,
  Clock,
  Users,
  Luggage,
  MapPin,
  ArrowRight,
  PlaneTakeoff,
  Sparkles,
  Car,
  CheckCircle2,
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeroProps {
  onOpenQuoteModal?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  // Transfer quote form state
  const [quoteState, setQuoteState] = useState<TransferQuoteState>({
    origin: 'Aeroporto de Porto Alegre (POA)',
    destination: 'Gramado (Hotel / Pousada)',
    date: '',
    time: '',
    passengers: 2,
    luggage: 2,
    childSeat: false,
    childSeatType: 'none',
    roundTrip: true,
    returnDate: '',
    returnTime: '',
    notes: '',
  });

  const popularOrigins = [
    'Aeroporto de Porto Alegre (POA)',
    'Aeroporto de Caxias do Sul (CXJ)',
    'Gramado',
    'Canela',
    'Bento Gonçalves',
  ];

  const popularDestinations = [
    'Gramado (Hotel / Pousada)',
    'Canela (Hotel / Pousada)',
    'Aeroporto de Porto Alegre (POA)',
    'Aeroporto de Caxias do Sul (CXJ)',
    'Vale dos Vinhedos (Bento Gonçalves)',
  ];

  const handleOriginChange = (val: string) => {
    setQuoteState((prev) => {
      let dest = prev.destination;
      if (val.includes('POA') || val.includes('CXJ')) {
        dest = 'Gramado (Hotel / Pousada)';
      } else if (val.includes('Gramado') || val.includes('Canela')) {
        dest = 'Aeroporto de Porto Alegre (POA)';
      }
      return { ...prev, origin: val, destination: dest };
    });
  };

  const dynamicWhatsAppUrl = buildWhatsAppQuoteUrl(quoteState);

  return (
    <section
      id="hero-section"
      className="relative min-h-[90vh] pt-6 pb-16 lg:py-20 overflow-hidden bg-[#0D0D0D]"
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(191,149,63,0.18),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[radial-gradient(circle,rgba(37,211,102,0.04)_0%,transparent_70%)] pointer-events-none" />

      {/* Subtle geometric luxury grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(to right, #D4AF37 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: PRD Core Headlines, Trust Badges, Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Superbadge / Verification */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#18181B] border border-[#D4AF37]/35 text-xs text-[#FCF6BA] mb-6 shadow-sm">
              <img
                src="/logo.png"
                alt="Logo Transportes Feiten"
                className="w-5 h-5 object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="font-semibold tracking-wider uppercase text-[11px]">
                Transportes Feiten • Canela & Gramado
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            </div>

            {/* H1 Headline (Exact PRD requirement) */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.15] mb-5">
              Transfer Privativo & <br className="hidden sm:inline" />
              <span className="text-gold-gradient drop-shadow">
                Transporte Executivo
              </span>{' '}
              na Serra Gaúcha
            </h1>

            {/* Subheadline (Exact PRD requirement) */}
            <p className="text-base sm:text-lg md:text-xl text-[#A1A1AA] max-w-2xl leading-relaxed mb-7 font-light">
              Pontualidade, conforto VIP e segurança absoluta do desembarque ao seu hotel em{' '}
              <strong className="text-zinc-100 font-medium">Gramado e Canela</strong>. Recepção
              exclusiva nos aeroportos de Porto Alegre (POA) e Caxias do Sul (CXJ).
            </p>

            {/* Trust Badges Trio (Exact PRD Badges) */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-8">
              {/* Badge 1: 5.0 Google Reviews */}
              <a
                href="#avaliacoes"
                id="hero-badge-google"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-[#18181B]/90 border border-zinc-800 hover:border-[#D4AF37]/50 transition-all text-xs"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white text-xs">Nota 5.0 no Google</span>
                  <span className="text-[10px] text-zinc-400">84+ Avaliações Reais</span>
                </div>
              </a>

              {/* Badge 2: Seguro Passageiro Total */}
              <div
                id="hero-badge-insurance"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-[#18181B]/90 border border-zinc-800 text-xs"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white text-xs">Seguro Total APP</span>
                  <span className="text-[10px] text-zinc-400">Proteção aos Passageiros</span>
                </div>
              </div>

              {/* Badge 3: Cadeirinha Infantil Inclusa */}
              <div
                id="hero-badge-childseat"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-[#18181B]/90 border border-zinc-800 text-xs"
              >
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center shrink-0 border border-[#D4AF37]/25">
                  <Baby className="w-4 h-4 text-[#FCF6BA]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white text-xs">Cadeirinha Inclusa</span>
                  <span className="text-[10px] text-zinc-400">Bebê & Criança (Grátis)</span>
                </div>
              </div>
            </div>

            {/* CTAs & Direct Contact */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <a
                href={dynamicWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-main-cta-whatsapp"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-base shadow-xl shadow-[#25D366]/25 transition-all duration-200 hover:scale-[1.02] border border-[#25D366]"
              >
                <MessageCircle className="w-5 h-5 fill-black shrink-0" />
                <span>Solicitar Cotação no WhatsApp</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>

              <a
                href="#servicos"
                id="hero-secondary-services-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 text-sm font-semibold transition-all hover:border-[#D4AF37]/50"
              >
                <Car className="w-4 h-4 text-[#D4AF37]" />
                <span>Ver Todos os Serviços</span>
              </a>
            </div>

            {/* Track Record E-E-A-T Guarantee */}
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-400 font-normal">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Pontualidade com acompanhamento de voo</span>
              </span>
              <span className="text-zinc-600 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Atendimento das 05:00 às 23:00</span>
              </span>
              <span className="text-zinc-600 hidden sm:inline">•</span>
              <span className="text-zinc-400">Atuando desde 07/06/2023</span>
            </div>
          </div>

          {/* Right Column: High-Converting Transfer Quote Simulator Card */}
          <div className="lg:col-span-5 w-full">
            <div
              id="hero-quote-card"
              className="luxury-card rounded-2xl p-5 sm:p-7 shadow-2xl relative border border-[#D4AF37]/30 bg-[#141416]/95 backdrop-blur-xl"
            >
              {/* Gold Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-t-2xl" />

              {/* Form Title */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-gold-gradient uppercase block">
                    Simulador Exclusivo
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white mt-0.5">
                    Cotar Transfer Privativo
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#0D0D0D] border border-[#D4AF37]/30 flex items-center justify-center">
                  <PlaneTakeoff className="w-5 h-5 text-[#FCF6BA]" />
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Trip Type Tabs */}
                <div className="grid grid-cols-2 gap-2 p-1 bg-[#0D0D0D] rounded-xl border border-zinc-800">
                  <button
                    type="button"
                    onClick={() => setQuoteState((p) => ({ ...p, roundTrip: true }))}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                      quoteState.roundTrip
                        ? 'bg-[#18181B] text-[#FCF6BA] border border-[#D4AF37]/40 shadow-sm'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Ida e Volta (Mais Econômico)
                  </button>
                  <button
                    type="button"
                    onClick={() => setQuoteState((p) => ({ ...p, roundTrip: false }))}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                      !quoteState.roundTrip
                        ? 'bg-[#18181B] text-[#FCF6BA] border border-[#D4AF37]/40 shadow-sm'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Somente Ida
                  </button>
                </div>

                {/* Origin */}
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Local de Embarque (Origem)</span>
                  </label>
                  <select
                    id="quote-origin-select"
                    value={quoteState.origin}
                    onChange={(e) => handleOriginChange(e.target.value)}
                    className="w-full bg-[#0D0D0D] border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                  >
                    {popularOrigins.map((city) => (
                      <option key={city} value={city} className="bg-zinc-900 text-white">
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Destino Final na Serra Gaúcha</span>
                  </label>
                  <select
                    id="quote-destination-select"
                    value={quoteState.destination}
                    onChange={(e) =>
                      setQuoteState((p) => ({ ...p, destination: e.target.value }))
                    }
                    className="w-full bg-[#0D0D0D] border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                  >
                    {popularDestinations.map((city) => (
                      <option key={city} value={city} className="bg-zinc-900 text-white">
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Dates & Times */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-zinc-300 mb-1 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#D4AF37]" />
                      <span>Data de Chegada</span>
                    </label>
                    <input
                      type="date"
                      id="quote-date-input"
                      value={quoteState.date}
                      onChange={(e) =>
                        setQuoteState((p) => ({ ...p, date: e.target.value }))
                      }
                      className="w-full bg-[#0D0D0D] border border-zinc-700/80 rounded-xl px-2.5 py-2 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-zinc-300 mb-1 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#D4AF37]" />
                      <span>Horário Previsto</span>
                    </label>
                    <input
                      type="time"
                      id="quote-time-input"
                      value={quoteState.time}
                      onChange={(e) =>
                        setQuoteState((p) => ({ ...p, time: e.target.value }))
                      }
                      className="w-full bg-[#0D0D0D] border border-zinc-700/80 rounded-xl px-2.5 py-2 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                {/* Return Date if RoundTrip */}
                {quoteState.roundTrip && (
                  <div className="grid grid-cols-2 gap-3 p-2.5 bg-zinc-900/50 rounded-xl border border-zinc-800/80">
                    <div>
                      <label className="block text-[11px] font-medium text-zinc-300 mb-1 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#FCF6BA]" />
                        <span>Data do Retorno</span>
                      </label>
                      <input
                        type="date"
                        id="quote-return-date-input"
                        value={quoteState.returnDate}
                        onChange={(e) =>
                          setQuoteState((p) => ({ ...p, returnDate: e.target.value }))
                        }
                        className="w-full bg-[#0D0D0D] border border-zinc-700/80 rounded-xl px-2.5 py-2 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-zinc-300 mb-1 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#FCF6BA]" />
                        <span>Horário Voo Retorno</span>
                      </label>
                      <input
                        type="time"
                        id="quote-return-time-input"
                        value={quoteState.returnTime}
                        onChange={(e) =>
                          setQuoteState((p) => ({ ...p, returnTime: e.target.value }))
                        }
                        className="w-full bg-[#0D0D0D] border border-zinc-700/80 rounded-xl px-2.5 py-2 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>
                )}

                {/* Passengers & Luggage Counters */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-2.5 rounded-xl bg-[#0D0D0D] border border-zinc-800 flex items-center justify-between">
                    <span className="text-xs text-zinc-300 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Passageiros</span>
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setQuoteState((p) => ({
                            ...p,
                            passengers: Math.max(1, p.passengers - 1),
                          }))
                        }
                        className="w-6 h-6 rounded bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center text-xs font-bold"
                      >
                        -
                      </button>
                      <span className="font-semibold text-white w-4 text-center">
                        {quoteState.passengers}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setQuoteState((p) => ({
                            ...p,
                            passengers: Math.min(7, p.passengers + 1),
                          }))
                        }
                        className="w-6 h-6 rounded bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center text-xs font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#0D0D0D] border border-zinc-800 flex items-center justify-between">
                    <span className="text-xs text-zinc-300 flex items-center gap-1.5">
                      <Luggage className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Malas Grandes</span>
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setQuoteState((p) => ({
                            ...p,
                            luggage: Math.max(1, p.luggage - 1),
                          }))
                        }
                        className="w-6 h-6 rounded bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center text-xs font-bold"
                      >
                        -
                      </button>
                      <span className="font-semibold text-white w-4 text-center">
                        {quoteState.luggage}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setQuoteState((p) => ({
                            ...p,
                            luggage: Math.min(8, p.luggage + 1),
                          }))
                        }
                        className="w-6 h-6 rounded bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center text-xs font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Child Safety Seat (Free perk highlight) */}
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="childSeatCheck"
                      className="cursor-pointer text-xs text-zinc-200 flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="childSeatCheck"
                        checked={quoteState.childSeat}
                        onChange={(e) =>
                          setQuoteState((p) => ({
                            ...p,
                            childSeat: e.target.checked,
                            childSeatType: e.target.checked ? 'toddler' : 'none',
                          }))
                        }
                        className="w-4 h-4 rounded text-[#D4AF37] focus:ring-[#D4AF37] bg-zinc-800 border-zinc-700"
                      />
                      <span className="font-medium">Precisa de Cadeirinha Infantil?</span>
                    </label>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      Inclusa (Grátis)
                    </span>
                  </div>

                  {quoteState.childSeat && (
                    <div className="mt-2.5 pt-2 border-t border-zinc-800 grid grid-cols-3 gap-1.5">
                      {[
                        { id: 'baby', label: 'Bebê Conforto', age: '0-1 ano' },
                        { id: 'toddler', label: 'Cadeirinha', age: '1-4 anos' },
                        { id: 'booster', label: 'Assento Booster', age: '4-10 anos' },
                      ].map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() =>
                            setQuoteState((p) => ({
                              ...p,
                              childSeatType: type.id as any,
                            }))
                          }
                          className={`p-1.5 rounded-lg text-center transition-all ${
                            quoteState.childSeatType === type.id
                              ? 'bg-[#D4AF37]/20 border border-[#D4AF37] text-[#FCF6BA]'
                              : 'bg-zinc-800/60 border border-zinc-700/50 text-zinc-400'
                          }`}
                        >
                          <div className="text-[11px] font-semibold">{type.label}</div>
                          <div className="text-[9px] text-zinc-400">{type.age}</div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Direct Action Button */}
                <a
                  href={dynamicWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-simulator-submit-btn"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/25 transition-all duration-200 hover:scale-[1.01] border border-[#25D366] mt-2"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>Enviar Cotação Prévia no WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <p className="text-[11px] text-center text-zinc-400 pt-1">
                  Resposta rápida em poucos minutos • Atendimento humano das 05h às 23h
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
