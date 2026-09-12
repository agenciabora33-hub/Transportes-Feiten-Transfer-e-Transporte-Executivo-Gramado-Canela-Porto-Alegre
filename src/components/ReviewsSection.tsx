import React, { useState } from 'react';
import { COMPANY_INFO, GOOGLE_REVIEWS } from '../data/transportesData';
import {
  Star,
  ShieldCheck,
  CheckCircle,
  ExternalLink,
  Sparkles,
  Calendar,
  Quote,
  MessageSquare,
} from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'aeroporto' | 'vinhedos' | 'familia'>('all');

  const filteredReviews = GOOGLE_REVIEWS.filter((rev) => {
    if (filter === 'all') return true;
    if (filter === 'aeroporto') return rev.tripType.includes('POA') || rev.tripType.includes('Aeroporto') || rev.tripType.includes('Caxias');
    if (filter === 'vinhedos') return rev.tripType.includes('Vinhedos');
    if (filter === 'familia') return rev.tripType.includes('Família') || rev.text.includes('criança') || rev.text.includes('filha');
    return true;
  });

  return (
    <section
      id="avaliacoes"
      className="py-16 sm:py-24 bg-[#0D0D0D] relative border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with 5.0 Google Score Banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181B] border border-[#D4AF37]/30 text-xs text-[#FCF6BA] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-semibold tracking-wider uppercase text-[11px]">
                E-E-A-T & Avaliações Verificadas no Google
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              A Opinião de Quem Já Viajou com a <br />
              <span className="text-gold-gradient">Transportes Feiten</span>
            </h2>

            <p className="text-sm sm:text-base text-[#A1A1AA] mt-3 max-w-xl">
              Mais de 1.200 transfers executivos realizados com excelência, zero voos perdidos e nota máxima
              consecutiva no Google Reviews.
            </p>
          </div>

          {/* Big Score Google Badge Card */}
          <div className="luxury-card rounded-2xl p-5 sm:p-6 flex items-center gap-5 border-[#D4AF37]/40 bg-[#161618] self-start lg:self-auto shadow-2xl">
            {/* Google G Logo Style */}
            <div className="w-14 h-14 rounded-2xl bg-[#0D0D0D] border border-zinc-700 flex items-center justify-center shrink-0">
              <svg className="w-7 h-7" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
            </div>

            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="font-display text-3xl font-extrabold text-white">5.0</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <div className="text-xs font-semibold text-zinc-300">
                84 Avaliações Reais no Google
              </div>
              <div className="text-[11px] text-zinc-400 flex items-center gap-1 mt-0.5">
                <CheckCircle className="w-3 h-3 text-[#25D366]" />
                <span>100% de Clientes Satisfeitos</span>
              </div>
            </div>
          </div>
        </div>

        {/* E-E-A-T Track Record Callout Banner */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-[#141417] border border-zinc-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0 border border-[#D4AF37]/20">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-zinc-400">Histórico de Atendimento</div>
              <div className="text-sm font-bold text-white">
                Desde 07 de Junho de 2023
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#141417] border border-zinc-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-zinc-400">Seguro de Frota Ativo</div>
              <div className="text-sm font-bold text-white">
                Total Cobertura APP Passageiro
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#141417] border border-zinc-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0 border border-blue-500/20">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-zinc-400">Sede Própria & NAP Oficial</div>
              <div className="text-sm font-bold text-white">
                Canela - RS • Endereço Público
              </div>
            </div>
          </div>
        </div>

        {/* Review Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filter === 'all'
                ? 'bg-[#D4AF37] text-black font-bold'
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            Todas as Avaliações
          </button>
          <button
            onClick={() => setFilter('aeroporto')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filter === 'aeroporto'
                ? 'bg-[#D4AF37] text-black font-bold'
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            Transfers Aeroporto POA / CXJ
          </button>
          <button
            onClick={() => setFilter('familia')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filter === 'familia'
                ? 'bg-[#D4AF37] text-black font-bold'
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            Famílias & Crianças
          </button>
          <button
            onClick={() => setFilter('vinhedos')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filter === 'vinhedos'
                ? 'bg-[#D4AF37] text-black font-bold'
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            Tour Vale dos Vinhedos
          </button>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              id={`google-review-${rev.id}`}
              className="luxury-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative bg-[#141417]"
            >
              <div>
                {/* Header of review */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
                    <CheckCircle className="w-2.5 h-2.5" />
                    <span>Verificada no Google</span>
                  </span>
                </div>

                {/* Highlight Tagline */}
                <h4 className="font-semibold text-white text-sm mb-2 font-display">
                  "{rev.highlight}"
                </h4>

                {/* Review Text */}
                <p className="text-xs sm:text-[13px] text-[#A1A1AA] leading-relaxed mb-6 italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-zinc-200">{rev.author}</div>
                  <div className="text-[11px] text-zinc-400">{rev.location}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-[#D4AF37] font-medium bg-[#D4AF37]/10 px-2 py-0.5 rounded">
                    {rev.tripType}
                  </div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">{rev.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Google or WhatsApp */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/5554999406972?text=Ol%C3%A1!%20Vi%20as%20avalia%C3%A7%C3%B5es%20no%20Google%20e%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20de%20transfer."
            target="_blank"
            rel="noopener noreferrer"
            id="reviews-cta-whatsapp"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-sm shadow-xl shadow-[#25D366]/20 transition-all border border-[#25D366]"
          >
            <MessageSquare className="w-4 h-4 fill-black" />
            <span>Viajar com Atendimento 5 Estrelas</span>
          </a>
        </div>

      </div>
    </section>
  );
};
