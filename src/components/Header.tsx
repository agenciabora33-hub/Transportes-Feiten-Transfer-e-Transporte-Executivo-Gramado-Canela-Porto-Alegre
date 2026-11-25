import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO, COVERAGE_CITIES, SERVICES_OFFERED } from '../data/transportesData';
import { AppLink } from '../utils/router';
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  Shield,
  Star,
  Clock,
  MapPin,
  Sparkles,
  ChevronRight,
} from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const navLinks = [
    { label: 'Diferenciais', href: '/#diferenciais' },
    { label: 'Fotos', href: '/#galeria' },
    { label: 'Serviços', href: '/#servicos' },
    { label: 'Rotas & Mapa', href: '/#cobertura' },
    { label: 'Avaliações', href: '/#avaliacoes' },
    { label: 'Dúvidas (FAQ)', href: '/#faq' },
    { label: 'Contato', href: '/#contato' },
  ];

  return (
    <>
      {/* Top micro-bar: operating hours and direct NAP phone */}
      <div className="bg-[#08080A] border-b border-[#27272A]/70 text-[11px] sm:text-xs text-[#A1A1AA] py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Atendimento Diário: <strong>05:00 às 23:00</strong></span>
            </span>
            <span className="hidden md:inline-block text-zinc-600">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-zinc-300">
              <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Frota Executiva com Seguro Total</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-amber-300">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-semibold">5.0</span>
              <span className="text-zinc-400">(84 Avaliações no Google)</span>
            </span>
            <span className="text-zinc-600">|</span>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              id="header-phone-call"
              className="hover:text-[#FCF6BA] transition-colors flex items-center gap-1 text-zinc-200"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span>(54) 99940-6972</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        id="main-navigation"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#D4AF37]/25 shadow-2xl py-2.5'
            : 'bg-[#0D0D0D]/80 backdrop-blur-sm border-b border-white/5 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <AppLink
            to="/"
            id="header-brand-logo-link"
            className="focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 rounded-lg"
            aria-label="Transportes Feiten Início"
          >
            <BrandLogo variant="horizontal" size="md" />
          </AppLink>

          {/* Actions & Collapsed Menu Toggle (Mobile + Desktop) */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Desktop Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenQuoteModal}
                id="header-quote-button"
                className="px-4 py-2 rounded-lg text-xs md:text-sm font-semibold border border-[#D4AF37]/50 text-[#FCF6BA] hover:bg-[#D4AF37]/15 transition-all duration-200"
              >
                Simular Cotação
              </button>

              <a
                href="https://wa.me/5554999406972?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20de%20transfer%20executivo."
                target="_blank"
                rel="noopener noreferrer"
                id="header-whatsapp-cta"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold px-4 py-2 rounded-lg text-xs md:text-sm shadow-lg shadow-[#25D366]/20 transition-all duration-200 hover:scale-[1.02] border border-[#25D366]"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>WhatsApp Direct</span>
              </a>
            </div>

            {/* Mobile WhatsApp icon */}
            <a
              href="https://wa.me/5554999406972?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20de%20transfer%20executivo."
              target="_blank"
              rel="noopener noreferrer"
              id="header-mobile-whatsapp-icon"
              className="sm:hidden p-2.5 rounded-lg bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366]"
              aria-label="WhatsApp Transportes Feiten"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>

            {/* Collapsed Menu Button (Desktop & Mobile) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              id="header-menu-toggle"
              className="flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 hover:border-[#D4AF37]/60 text-zinc-200 hover:text-[#FCF6BA] transition-all focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              aria-label="Abrir Menu de Navegação"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              <span className="hidden sm:inline text-xs md:text-sm font-semibold">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Collapsible Navigation Drawer (Desktop & Mobile) */}
      {menuOpen && (
        <div
          id="navigation-drawer-overlay"
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end animate-in fade-in duration-200"
        >
          <aside
            onClick={(e) => e.stopPropagation()}
            className="w-full sm:max-w-md h-full bg-[#0D0D0D] border-l border-[#D4AF37]/25 shadow-2xl flex flex-col justify-between p-6 overflow-y-auto"
            aria-label="Menu Principal"
          >
            <div>
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <AppLink to="/" onClick={() => setMenuOpen(false)}>
                  <BrandLogo variant="compact" size="sm" />
                </AppLink>
                <button
                  onClick={() => setMenuOpen(false)}
                  id="menu-drawer-close-btn"
                  className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
                  aria-label="Fechar Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-6 py-5">
                {/* Main Sections */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                    Navegação
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {navLinks.map((link) => (
                      <AppLink
                        key={link.href}
                        to={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center justify-between text-xs sm:text-sm font-medium text-zinc-200 hover:text-[#FCF6BA] px-3 py-2 rounded-lg bg-zinc-900/50 hover:bg-zinc-900 transition-colors"
                      >
                        <span>{link.label}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                      </AppLink>
                    ))}
                  </div>
                </div>

                {/* Services Links */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Serviços Privativos</span>
                  </div>
                  <div className="space-y-1.5">
                    {SERVICES_OFFERED.map((srv) => (
                      <AppLink
                        key={srv.id}
                        to={`/servicos/${srv.slug}`}
                        onClick={() => setMenuOpen(false)}
                        className="block text-xs sm:text-sm font-medium text-zinc-200 hover:text-[#FCF6BA] px-3 py-2 rounded-lg bg-zinc-900/50 hover:bg-zinc-900 transition-colors"
                      >
                        {srv.title}
                      </AppLink>
                    ))}
                  </div>
                </div>

                {/* Cities Links */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Cidades Atendidas</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {COVERAGE_CITIES.map((city) => (
                      <AppLink
                        key={city.id}
                        to={`/cidades/${city.slug}`}
                        onClick={() => setMenuOpen(false)}
                        className="text-xs font-medium text-zinc-300 hover:text-[#FCF6BA] px-2.5 py-2 rounded-lg bg-zinc-900/50 hover:bg-zinc-900 truncate transition-colors"
                      >
                        {city.name}
                      </AppLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t border-zinc-800">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenQuoteModal();
                }}
                id="drawer-menu-quote-btn"
                className="w-full py-3 rounded-xl border border-[#D4AF37] text-[#FCF6BA] text-sm font-semibold tracking-wide bg-[#18181B] hover:bg-[#D4AF37]/10 text-center"
              >
                Simular Cotação de Transfer
              </button>

              <a
                href="https://wa.me/5554999406972?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20de%20transfer%20executivo."
                target="_blank"
                rel="noopener noreferrer"
                id="drawer-menu-whatsapp-btn"
                className="w-full py-3.5 rounded-xl bg-[#25D366] text-black font-bold text-center text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/30"
              >
                <MessageCircle className="w-5 h-5 fill-black" />
                <span>Chamar no WhatsApp Direct</span>
              </a>

              <p className="text-center text-xs text-zinc-400 mt-1">
                Atendimento Executivo das 05h às 23h • (54) 99940-6972
              </p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};
