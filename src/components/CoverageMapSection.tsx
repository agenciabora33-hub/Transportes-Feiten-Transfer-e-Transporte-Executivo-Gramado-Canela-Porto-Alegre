import React, { useState } from 'react';
import { COVERAGE_CITIES } from '../data/transportesData';
import { CoverageCity } from '../types';
import {
  MapPin,
  Clock,
  Milestone,
  Navigation,
  Sparkles,
  ArrowUpRight,
  Plane,
  Building2,
  MountainSnow,
  MessageCircle,
} from 'lucide-react';

export const CoverageMapSection: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<CoverageCity>(COVERAGE_CITIES[0]); // Canela default

  const getCityIcon = (type: CoverageCity['type']) => {
    switch (type) {
      case 'base':
        return <Building2 className="w-4 h-4 text-[#FCF6BA]" />;
      case 'airport':
        return <Plane className="w-4 h-4 text-[#FCF6BA]" />;
      case 'destination':
      default:
        return <MountainSnow className="w-4 h-4 text-[#FCF6BA]" />;
    }
  };

  const getWhatsAppRouteUrl = (city: CoverageCity) => {
    const text = `Olá! Gostaria de uma cotação de transfer executivo para a rota envolvendo *${city.name}* com a Transportes Feiten.`;
    return `https://wa.me/5554999406972?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="cobertura"
      className="py-16 sm:py-24 bg-[#0A0A0D] relative border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181B] border border-[#D4AF37]/30 text-xs text-[#FCF6BA] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-semibold tracking-wider uppercase text-[11px]">
              Área de Atendimento Regional • GEO Serra Gaúcha
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Rotas & Destinos Atendidos na{' '}
            <span className="text-gold-gradient">Serra Gaúcha</span>
          </h2>

          <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
            Com base estratégica em Canela e Gramado, cobrimos com rapidez e pontualidade os aeroportos de
            Porto Alegre (POA) e Caxias do Sul (CXJ), além de todas as principais cidades turísticas e vinícolas.
          </p>
        </div>

        {/* Interactive City Selector Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {COVERAGE_CITIES.map((city) => (
            <button
              key={city.id}
              onClick={() => setSelectedCity(city)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                selectedCity.id === city.id
                  ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/25 font-bold scale-105'
                  : 'bg-[#18181B] text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {getCityIcon(city.type)}
              <span>{city.name}</span>
              {city.type === 'base' && (
                <span className="text-[9px] bg-black/20 px-1.5 py-0.5 rounded uppercase font-bold">
                  Base
                </span>
              )}
              {city.type === 'airport' && (
                <span className="text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded uppercase font-bold">
                  Aeroporto
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Map & Detail Split Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Visual Regional Route Schematic / Map Visualizer */}
          <div className="lg:col-span-7 luxury-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden bg-[#121215]">
            
            {/* Top Bar inside Card */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Navigation className="w-5 h-5 text-[#D4AF37]" />
                <span className="font-display font-bold text-sm sm:text-base text-white">
                  Mapa Esquemático de Conexões Rodoviárias
                </span>
              </div>
              <span className="text-[11px] text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded-lg border border-zinc-800">
                11 Cidades Mapeadas
              </span>
            </div>

            {/* Stylized Vector Route Canvas / Diagram */}
            <div className="relative w-full h-80 sm:h-96 rounded-xl bg-[#09090B] border border-zinc-800/80 p-4 flex items-center justify-center overflow-hidden">
              
              {/* Background Topography contours */}
              <svg
                className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern id="gridMap" width="30" height="30" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="#D4AF37" fillOpacity="0.4" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#gridMap)" />

                {/* Highway Connection Curves */}
                {/* POA to Gramado / Canela */}
                <path
                  d="M 120 340 Q 180 260 270 200"
                  stroke="#D4AF37"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                  fill="none"
                />
                {/* Caxias CXJ to Gramado / Canela */}
                <path
                  d="M 160 120 Q 220 150 270 200"
                  stroke="#D4AF37"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                  fill="none"
                />
                {/* Bento / Garibaldi to Gramado */}
                <path
                  d="M 90 170 Q 180 180 270 200"
                  stroke="#BF953F"
                  strokeWidth="2"
                  strokeOpacity="0.6"
                  fill="none"
                />
                {/* Gramado to Cambara */}
                <path
                  d="M 270 200 Q 360 130 420 80"
                  stroke="#BF953F"
                  strokeWidth="2"
                  strokeOpacity="0.6"
                  fill="none"
                />
              </svg>

              {/* Central Hub: Gramado & Canela (Base) */}
              <div
                onClick={() => setSelectedCity(COVERAGE_CITIES[0])}
                className="absolute top-[48%] left-[58%] -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
              >
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-12 h-12 rounded-full bg-[#D4AF37]/20 animate-ping" />
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#BF953F] to-[#AA771C] border-2 border-[#FCF6BA] flex items-center justify-center shadow-lg shadow-[#D4AF37]/50">
                    <Building2 className="w-5 h-5 text-black" />
                  </div>
                </div>
                <div className="mt-1 bg-black/90 border border-[#D4AF37] px-2 py-0.5 rounded text-[10px] font-bold text-[#FCF6BA] whitespace-nowrap shadow-md">
                  Canela & Gramado (Base)
                </div>
              </div>

              {/* Airport Node: Porto Alegre (POA) */}
              <div
                onClick={() => setSelectedCity(COVERAGE_CITIES[2])}
                className="absolute bottom-6 left-16 cursor-pointer group z-20 text-center"
              >
                <div className="w-8 h-8 rounded-full bg-zinc-900 border-2 border-emerald-400 flex items-center justify-center mx-auto hover:scale-110 transition-transform">
                  <Plane className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="mt-1 bg-black/80 px-2 py-0.5 rounded text-[10px] text-zinc-300 border border-zinc-700">
                  Porto Alegre (POA)
                </div>
              </div>

              {/* Airport Node: Caxias do Sul (CXJ) */}
              <div
                onClick={() => setSelectedCity(COVERAGE_CITIES[3])}
                className="absolute top-10 left-28 cursor-pointer group z-20 text-center"
              >
                <div className="w-8 h-8 rounded-full bg-zinc-900 border-2 border-emerald-400 flex items-center justify-center mx-auto hover:scale-110 transition-transform">
                  <Plane className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="mt-1 bg-black/80 px-2 py-0.5 rounded text-[10px] text-zinc-300 border border-zinc-700">
                  Caxias do Sul (CXJ)
                </div>
              </div>

              {/* Wine Node: Bento Gonçalves & Garibaldi */}
              <div
                onClick={() => setSelectedCity(COVERAGE_CITIES[4])}
                className="absolute top-36 left-8 cursor-pointer group z-20 text-center"
              >
                <div className="w-7 h-7 rounded-full bg-zinc-900 border border-[#D4AF37] flex items-center justify-center mx-auto hover:scale-110 transition-transform">
                  <MapPin className="w-3.5 h-3.5 text-[#FCF6BA]" />
                </div>
                <div className="mt-1 bg-black/80 px-1.5 py-0.5 rounded text-[9.5px] text-zinc-300 border border-zinc-800">
                  Bento & Garibaldi
                </div>
              </div>

              {/* Canyon Node: Cambará do Sul */}
              <div
                onClick={() => setSelectedCity(COVERAGE_CITIES[7])}
                className="absolute top-8 right-10 cursor-pointer group z-20 text-center"
              >
                <div className="w-7 h-7 rounded-full bg-zinc-900 border border-[#D4AF37] flex items-center justify-center mx-auto hover:scale-110 transition-transform">
                  <MountainSnow className="w-3.5 h-3.5 text-[#FCF6BA]" />
                </div>
                <div className="mt-1 bg-black/80 px-1.5 py-0.5 rounded text-[9.5px] text-zinc-300 border border-zinc-800">
                  Cambará do Sul (Cânions)
                </div>
              </div>

              {/* Nova Petrópolis Node */}
              <div
                onClick={() => setSelectedCity(COVERAGE_CITIES[6])}
                className="absolute bottom-24 left-44 cursor-pointer group z-20 text-center"
              >
                <div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-600 flex items-center justify-center mx-auto hover:scale-110 transition-transform">
                  <MapPin className="w-3 h-3 text-zinc-400" />
                </div>
                <div className="mt-0.5 bg-black/80 px-1 py-0.5 rounded text-[9px] text-zinc-400 border border-zinc-800">
                  Nova Petrópolis
                </div>
              </div>

              <div className="absolute bottom-2 right-3 text-[10px] text-zinc-400">
                Toque nos pontos para inspecionar rotas
              </div>
            </div>

            {/* Bottom info banner */}
            <div className="mt-4 pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                <span>Rotas principais pavimentadas e seguras</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Aeroportos atendidos 24h sob agendamento</span>
              </span>
            </div>
          </div>

          {/* Right: Selected City Dedicated Profile & Fast Booking */}
          <div className="lg:col-span-5 luxury-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between border-[#D4AF37]/35 bg-[#161619]">
            
            <div>
              {/* Type Badge & Distance */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/25">
                  {selectedCity.highlight}
                </span>

                <div className="text-right">
                  <div className="text-xs text-zinc-400">Distância de Gramado</div>
                  <div className="text-sm font-bold text-white">
                    {selectedCity.distanceFromGramadoKm} km
                  </div>
                </div>
              </div>

              {/* City Name */}
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2 flex items-center gap-2">
                <span>{selectedCity.name}</span>
                <span className="text-[#D4AF37] text-lg">✦</span>
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                {selectedCity.description}
              </p>

              {/* Route Metrics Cards */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#0D0D0D] border border-zinc-800">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Tempo Médio</span>
                  </div>
                  <div className="text-sm font-bold text-white">
                    {selectedCity.estimatedTimeMin > 0
                      ? `${selectedCity.estimatedTimeMin} minutos`
                      : 'Local (5 a 15 min)'}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#0D0D0D] border border-zinc-800">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
                    <Milestone className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Rodovia Principal</span>
                  </div>
                  <div className="text-xs font-semibold text-zinc-200 truncate">
                    {selectedCity.highway}
                  </div>
                </div>
              </div>

              {/* Key Attractions / Highlights */}
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 mb-6">
                <div className="text-[11px] uppercase font-bold text-zinc-400 mb-1 tracking-wider">
                  Destaques e Atrativos Frequentes:
                </div>
                <div className="text-xs text-[#FCF6BA] font-medium leading-snug">
                  {selectedCity.popularFor}
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Route CTA */}
            <div className="pt-4 border-t border-zinc-800">
              <a
                href={getWhatsAppRouteUrl(selectedCity)}
                target="_blank"
                rel="noopener noreferrer"
                id="coverage-city-whatsapp-cta"
                className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all border border-[#25D366]"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Cotar Rota para {selectedCity.name}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <p className="text-[11px] text-center text-zinc-400 mt-2">
                Carros privativos com capacidade para toda a família e malas
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
