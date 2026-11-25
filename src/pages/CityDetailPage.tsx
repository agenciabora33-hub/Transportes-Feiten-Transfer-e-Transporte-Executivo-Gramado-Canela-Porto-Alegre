import React, { useMemo, useState } from 'react';
import {
  COMPANY_INFO,
  COVERAGE_CITIES,
  SERVICES_OFFERED,
} from '../data/transportesData';
import { getCityPageBySlug } from '../data/cityPagesData';
import { AppLink } from '../utils/router';
import { usePageSEO } from '../utils/usePageSEO';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Calculator,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Compass,
  MapPin,
  MessageCircle,
  Milestone,
  Navigation,
  Plane,
  Sparkles,
  Star,
} from 'lucide-react';

interface CityDetailPageProps {
  slug: string;
  onOpenQuoteModal: (preset?: { origin?: string; destination?: string; notes?: string }) => void;
}

export const CityDetailPage: React.FC<CityDetailPageProps> = ({ slug, onOpenQuoteModal }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const citySummary = COVERAGE_CITIES.find((c) => c.slug === slug);
  const detail = getCityPageBySlug(slug);

  const jsonLd = useMemo(() => {
    if (!detail || !citySummary) return undefined;
    const pageUrl = `${COMPANY_INFO.siteUrl}/cidades/${detail.slug}`;
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Início',
              item: `${COMPANY_INFO.siteUrl}/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Cidades Atendidas',
              item: `${COMPANY_INFO.siteUrl}/#cobertura`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: citySummary.name,
              item: pageUrl,
            },
          ],
        },
        {
          '@type': 'TaxiService',
          '@id': `${pageUrl}#service`,
          name: `Transfer Executivo em ${citySummary.name} - Transportes Feiten`,
          description: detail.seoDescription,
          url: pageUrl,
          areaServed: {
            '@type': 'City',
            name: citySummary.name,
          },
          provider: {
            '@id': `${COMPANY_INFO.siteUrl}/#organization`,
          },
        },
        {
          '@type': 'FAQPage',
          mainEntity: detail.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        },
      ],
    };
  }, [detail, citySummary]);

  usePageSEO(
    detail
      ? {
          title: detail.seoTitle,
          description: detail.seoDescription,
          path: `/cidades/${detail.slug}`,
          jsonLd,
        }
      : undefined
  );

  if (!detail || !citySummary) {
    return (
      <section className="py-24 px-4 max-w-4xl mx-auto text-center">
        <h1 className="font-display text-3xl font-bold text-white mb-4">
          Cidade não encontrada
        </h1>
        <p className="text-zinc-400 mb-8">
          Veja todas as 11 cidades e aeroportos atendidos pela Transportes Feiten na Serra Gaúcha.
        </p>
        <AppLink
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D4AF37] text-black font-bold text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para a Página Inicial</span>
        </AppLink>
      </section>
    );
  }

  const recommendedServices = SERVICES_OFFERED.filter((s) =>
    detail.recommendedServiceSlugs.includes(s.slug)
  );
  const otherCities = COVERAGE_CITIES.filter((c) => c.slug !== detail.slug);
  const whatsappCityUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
    `Olá! Gostaria de solicitar uma cotação de transfer executivo para *${citySummary.name}* com a Transportes Feiten.`
  )}`;

  return (
    <article className="bg-[#0D0D0D] pb-20">
      {/* Hero Section */}
      <section className="relative pt-10 pb-14 lg:py-16 border-b border-zinc-900 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-[radial-gradient(ellipse_75%_50%_at_50%_-10%,rgba(191,149,63,0.18),transparent)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 mb-8">
            <AppLink to="/" className="hover:text-[#FCF6BA] transition-colors">
              Início
            </AppLink>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <AppLink to="/#cobertura" className="hover:text-[#FCF6BA] transition-colors">
              Cidades Atendidas
            </AppLink>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-[#FCF6BA] font-medium">{citySummary.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181B] border border-[#D4AF37]/35 text-xs text-[#FCF6BA] mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-semibold tracking-wider uppercase text-[11px]">
                  {detail.eyebrow}
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
                {detail.h1}
              </h1>

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-7 max-w-3xl">
                {detail.lead}
              </p>

              {/* Route Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                <div className="p-3.5 rounded-xl bg-[#141417] border border-zinc-800 flex items-center gap-3">
                  <Navigation className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <div className="text-[11px] text-zinc-400">Distância até Gramado</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {citySummary.distanceFromGramadoKm === 0
                        ? 'Destino Central (0 km)'
                        : `${citySummary.distanceFromGramadoKm} km`}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#141417] border border-zinc-800 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <div className="text-[11px] text-zinc-400">Tempo Médio de Viagem</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {citySummary.estimatedTimeMin > 0
                        ? `Aprox. ${citySummary.estimatedTimeMin} min`
                        : 'Deslocamento local'}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#141417] border border-zinc-800 flex items-center gap-3">
                  <Milestone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <div className="text-[11px] text-zinc-400">Rodovia Principal</div>
                    <div className="text-xs font-semibold text-white truncate max-w-[170px]">
                      {citySummary.highway}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={whatsappCityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-sm flex items-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>Cotar Transfer em {citySummary.name}</span>
                </a>

                <button
                  onClick={() =>
                    onOpenQuoteModal({
                      origin: detail.defaultOrigin,
                      destination: detail.defaultDestination,
                      notes: `Cotação para rota em ${citySummary.name}`,
                    })
                  }
                  className="px-6 py-3.5 rounded-xl bg-[#18181B] hover:bg-[#D4AF37]/15 text-[#FCF6BA] border border-[#D4AF37]/45 font-semibold text-sm flex items-center gap-2 transition-all"
                >
                  <Calculator className="w-4 h-4 text-[#D4AF37]" />
                  <span>Simular Valor Online</span>
                </button>
              </div>
            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-4 luxury-card rounded-2xl p-6 bg-[#141417] border-[#D4AF37]/35">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-4">
                <span className="font-display font-bold text-white text-base">
                  Cobertura {citySummary.name}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/30">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  5.0
                </span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                {citySummary.description}
              </p>

              <div className="p-3.5 rounded-xl bg-[#0D0D0D] border border-zinc-800 mb-4">
                <div className="text-[11px] uppercase font-bold text-[#D4AF37] mb-1">
                  Principais Atrativos Atendidos
                </div>
                <div className="text-xs text-zinc-300 leading-relaxed">
                  {citySummary.popularFor}
                </div>
              </div>

              <div className="text-xs text-zinc-400 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>Embarque na porta de hotéis, pousadas, aeroportos e eventos.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-14">
        {/* Search-Intent Direct Answers */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              Respostas Diretas para sua Pesquisa
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
              Tudo o que Você Precisa Saber sobre Transfer em {citySummary.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detail.searchIntentAnswers.map((item, idx) => (
              <div
                key={idx}
                className="luxury-card rounded-2xl p-6 bg-[#141417] flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#D4AF37]/15 text-[#FCF6BA] border border-[#D4AF37]/30 mb-3">
                    {item.badge}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white mb-3 leading-snug">
                    {item.intentQuestion}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Boarding Points & Attractions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="luxury-card rounded-2xl p-6 sm:p-7 bg-[#141417]">
            <h2 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Plane className="w-5 h-5 text-[#D4AF37]" />
              <span>Pontos de Embarque & Desembarque em {citySummary.name}</span>
            </h2>
            <ul className="space-y-3">
              {detail.boardingPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="luxury-card rounded-2xl p-6 sm:p-7 bg-[#141417]">
            <h2 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#D4AF37]" />
              <span>Destaques Turísticos e Roteiros Conectados</span>
            </h2>
            <ul className="space-y-3">
              {detail.attractionsAndTips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recommended Services (Internal Links to /servicos/*) */}
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
            Serviços Mais Contratados para {citySummary.name}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mb-6">
            Selecione o formato ideal para sua viagem e confira todos os detalhes:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {recommendedServices.map((srv) => (
              <AppLink
                key={srv.id}
                to={`/servicos/${srv.slug}`}
                className="luxury-card rounded-2xl p-5 bg-[#141417] flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37]">
                    {srv.badge || 'Transfer Privativo'}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-[#FCF6BA] mt-1 mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                    {srv.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs font-semibold text-[#FCF6BA]">
                  <span>Ver página do serviço</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </AppLink>
            ))}
          </div>
        </div>

        {/* City-Specific FAQs */}
        <div className="max-w-4xl">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">
            Perguntas Frequentes sobre Transporte em {citySummary.name}
          </h2>
          <div className="space-y-3">
            {detail.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-xl border transition-all ${
                    isOpen
                      ? 'bg-[#18181B] border-[#D4AF37]/45'
                      : 'bg-[#121215] border-zinc-800/80'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left gap-4"
                  >
                    <span className="font-semibold text-sm sm:text-base text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#D4AF37] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Internal Links to All Other Cities */}
        <div className="pt-8 border-t border-zinc-900">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
            Outras Cidades e Aeroportos Atendidos na Serra Gaúcha
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mb-6">
            Navegue pelas páginas de todos os destinos cobertos pela Transportes Feiten:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {otherCities.map((c) => (
              <AppLink
                key={c.id}
                to={`/cidades/${c.slug}`}
                className="luxury-card rounded-xl p-3.5 bg-[#121215] flex items-center justify-between gap-2 group"
              >
                <div className="min-w-0">
                  <div className="text-xs font-bold text-white group-hover:text-[#FCF6BA] truncate">
                    {c.name}
                  </div>
                  <div className="text-[11px] text-zinc-400 truncate">{c.highlight}</div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </AppLink>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};
