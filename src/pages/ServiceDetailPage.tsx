import React, { useMemo, useState } from 'react';
import {
  COMPANY_INFO,
  COVERAGE_CITIES,
  GALLERY_PHOTOS,
  SERVICES_OFFERED,
} from '../data/transportesData';
import { getServicePageBySlug, SERVICE_PAGES } from '../data/servicePagesData';
import { AppLink } from '../utils/router';
import { usePageSEO } from '../utils/usePageSEO';
import {
  ArrowLeft,
  ArrowRight,
  Baby,
  Calculator,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  MapPin,
  MessageCircle,
  Plane,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
  onOpenQuoteModal: (preset?: { origin?: string; destination?: string; notes?: string }) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  slug,
  onOpenQuoteModal,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const serviceSummary = SERVICES_OFFERED.find((s) => s.slug === slug);
  const detail = getServicePageBySlug(slug);

  const jsonLd = useMemo(() => {
    if (!detail || !serviceSummary) return undefined;
    const pageUrl = `${COMPANY_INFO.siteUrl}/servicos/${detail.slug}`;
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
              name: 'Serviços',
              item: `${COMPANY_INFO.siteUrl}/#servicos`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: serviceSummary.title,
              item: pageUrl,
            },
          ],
        },
        {
          '@type': 'Service',
          '@id': `${pageUrl}#service`,
          name: serviceSummary.title,
          serviceType: serviceSummary.subtitle,
          description: detail.seoDescription,
          url: pageUrl,
          provider: {
            '@id': `${COMPANY_INFO.siteUrl}/#organization`,
          },
          areaServed: detail.relatedCitySlugs.map((citySlug) => {
            const c = COVERAGE_CITIES.find((item) => item.slug === citySlug);
            return c ? c.name : citySlug;
          }),
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
  }, [detail, serviceSummary]);

  usePageSEO(
    detail
      ? {
          title: detail.seoTitle,
          description: detail.seoDescription,
          path: `/servicos/${detail.slug}`,
          jsonLd,
        }
      : undefined
  );

  if (!detail || !serviceSummary) {
    return (
      <section className="py-24 px-4 max-w-4xl mx-auto text-center">
        <h1 className="font-display text-3xl font-bold text-white mb-4">
          Serviço não encontrado
        </h1>
        <p className="text-zinc-400 mb-8">
          Confira todos os nossos serviços de transfer executivo e passeios privativos na Serra Gaúcha.
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

  const relatedCities = COVERAGE_CITIES.filter((c) => detail.relatedCitySlugs.includes(c.slug));
  const otherServices = SERVICES_OFFERED.filter((s) => s.slug !== detail.slug);
  const whatsappServiceUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
    `Olá! Estava vendo a página do serviço *${serviceSummary.title}* no site e gostaria de solicitar uma cotação.`
  )}`;

  const previewPhotos = GALLERY_PHOTOS.slice(0, 3);

  return (
    <article className="bg-[#0D0D0D] pb-20">
      {/* Hero Banner */}
      <section className="relative pt-10 pb-14 lg:py-16 border-b border-zinc-900 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-[radial-gradient(ellipse_75%_50%_at_50%_-10%,rgba(191,149,63,0.18),transparent)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 mb-8">
            <AppLink to="/" className="hover:text-[#FCF6BA] transition-colors">
              Início
            </AppLink>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <AppLink to="/#servicos" className="hover:text-[#FCF6BA] transition-colors">
              Serviços
            </AppLink>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-[#FCF6BA] font-medium">{serviceSummary.title}</span>
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

              {/* Key Attributes Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                <div className="p-3.5 rounded-xl bg-[#141417] border border-zinc-800 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <div className="text-[11px] text-zinc-400">Duração Estimada</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {serviceSummary.duration}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#141417] border border-zinc-800 flex items-center gap-3">
                  <Users className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <div className="text-[11px] text-zinc-400">Capacidade Privativa</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {serviceSummary.capacity}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#141417] border border-zinc-800 flex items-center gap-3">
                  <Baby className="w-5 h-5 text-[#25D366] shrink-0" />
                  <div>
                    <div className="text-[11px] text-zinc-400">Segurança Infantil</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      Cadeirinhas Gratuitas
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={whatsappServiceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-sm flex items-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>Cotar {serviceSummary.title} no WhatsApp</span>
                </a>

                <button
                  onClick={() =>
                    onOpenQuoteModal({
                      origin: detail.defaultOrigin,
                      destination: detail.defaultDestination,
                      notes: `Interesse no serviço: ${serviceSummary.title}`,
                    })
                  }
                  className="px-6 py-3.5 rounded-xl bg-[#18181B] hover:bg-[#D4AF37]/15 text-[#FCF6BA] border border-[#D4AF37]/45 font-semibold text-sm flex items-center gap-2 transition-all"
                >
                  <Calculator className="w-4 h-4 text-[#D4AF37]" />
                  <span>Simular Cotação Detalhada</span>
                </button>
              </div>
            </div>

            {/* Right Column Trust Summary Card */}
            <div className="lg:col-span-4 luxury-card rounded-2xl p-6 bg-[#141417] border-[#D4AF37]/35">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-4">
                <span className="font-display font-bold text-white text-base">
                  Padrão Transportes Feiten
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/30">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  5.0 Google
                </span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-zinc-300 mb-6">
                {detail.includedFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="p-3.5 rounded-xl bg-[#0D0D0D] border border-zinc-800 text-xs text-zinc-400 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  Atendimento diário das <strong>05:00 às 23:00</strong> (e madrugada sob agendamento). Pagamento via PIX, transferência ou cartão.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-14">
        {/* Overview & Ideal For */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Como Funciona Este Serviço na Prática
            </h2>
            {detail.overviewParagraphs.map((paragraph, i) => (
              <p key={i} className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Search Intents Covered */}
            <div className="pt-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-3">
                Soluções que entregamos neste atendimento:
              </h3>
              <div className="flex flex-wrap gap-2">
                {detail.searchIntents.map((intent, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-[#18181B] border border-zinc-800 text-xs text-zinc-300"
                  >
                    {intent}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="luxury-card rounded-2xl p-6 bg-[#141417]">
              <h3 className="font-display text-xl font-bold text-white mb-4">
                Indicado Especialmente Para
              </h3>
              <ul className="space-y-3 mb-6">
                {detail.idealFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <Plane className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-zinc-800">
                {previewPhotos.map((photo) => (
                  <img
                    key={photo.id}
                    src={photo.src}
                    onError={(e) => {
                      e.currentTarget.src = photo.fallbackSrc;
                    }}
                    alt={photo.title}
                    className="w-full h-20 object-cover rounded-lg border border-zinc-800"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-Step Timeline */}
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">
            Passo a Passo do Atendimento
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {detail.howItWorks.map((item) => (
              <div
                key={item.step}
                className="luxury-card rounded-2xl p-5 bg-[#141417] flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block font-display text-2xl font-extrabold text-gold-gradient mb-2">
                    {item.step}
                  </span>
                  <h3 className="font-display text-base font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service FAQs */}
        <div className="max-w-4xl">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">
            Dúvidas Frequentes sobre {serviceSummary.title}
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

        {/* Internal Links: Related Cities */}
        <div className="pt-8 border-t border-zinc-900">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
            Principais Cidades Conectadas a Este Serviço
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mb-6">
            Explore as páginas detalhadas de cada destino e veja rotas, tempos de viagem e pontos de embarque:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedCities.map((city) => (
              <AppLink
                key={city.id}
                to={`/cidades/${city.slug}`}
                className="luxury-card rounded-xl p-4 bg-[#141417] flex items-center justify-between gap-3 group"
              >
                <div>
                  <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-[#FCF6BA] transition-colors">
                    <MapPin className="w-4 h-4 text-[#D4AF37]" />
                    <span>{city.name}</span>
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">{city.highlight}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] shrink-0 group-hover:translate-x-1 transition-transform" />
              </AppLink>
            ))}
          </div>
        </div>

        {/* Internal Links: Other Services */}
        <div className="pt-8 border-t border-zinc-900">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-6">
            Conheça Outros Serviços Privativos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.map((srv) => {
              const p = SERVICE_PAGES.find((x) => x.slug === srv.slug);
              return (
                <AppLink
                  key={srv.id}
                  to={`/servicos/${srv.slug}`}
                  className="luxury-card rounded-xl p-4 bg-[#121215] flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#D4AF37]">
                      {srv.badge || 'Serviço Exclusivo'}
                    </span>
                    <h3 className="font-display text-sm font-bold text-white group-hover:text-[#FCF6BA] mt-1 mb-2">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-2">
                      {p?.lead || srv.description}
                    </p>
                  </div>
                  <div className="mt-4 text-xs font-semibold text-[#FCF6BA] flex items-center gap-1">
                    <span>Ver detalhes</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </AppLink>
              );
            })}
          </div>
        </div>
      </section>
    </article>
  );
};
