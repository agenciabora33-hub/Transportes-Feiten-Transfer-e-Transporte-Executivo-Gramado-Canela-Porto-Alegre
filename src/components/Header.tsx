import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO } from '../data/transportesData';
import { Phone, MessageCircle, Menu, X, Shield, Star, Clock } from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Fotos', href: '#galeria' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Rotas & Mapa', href: '#cobertura' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Dúvidas (FAQ)', href: '#faq' },
    { label: 'Contato', href: '#contato' },
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            id="header-brand-logo-link"
            className="focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 rounded-lg"
            aria-label="Transportes Feiten Início"
          >
            <BrandLogo variant="horizontal" size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#FCF6BA] transition-colors duration-200 tracking-wide py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

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

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="https://wa.me/5554999406972?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20de%20transfer%20executivo."
              target="_blank"
              rel="noopener noreferrer"
              id="header-mobile-whatsapp-icon"
              className="p-2.5 rounded-lg bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366]"
              aria-label="WhatsApp Transportes Feiten"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="header-mobile-menu-toggle"
              className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              aria-label="Abrir Menu Principal"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-overlay"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md lg:hidden flex flex-col justify-between p-6 animate-in fade-in duration-200"
        >
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <BrandLogo variant="compact" size="sm" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              id="mobile-menu-close-btn"
              className="p-2 text-zinc-400 hover:text-white"
              aria-label="Fechar Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-2 my-auto py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-zinc-200 hover:text-[#FCF6BA] hover:bg-zinc-900/60 px-4 py-3 rounded-lg transition-colors border-l-2 border-transparent hover:border-[#D4AF37]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-4 border-t border-zinc-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              id="mobile-menu-quote-btn"
              className="w-full py-3 rounded-xl border border-[#D4AF37] text-[#FCF6BA] text-sm font-semibold tracking-wide bg-[#18181B] hover:bg-[#D4AF37]/10 text-center"
            >
              Simular Cotação de Transfer
            </button>

            <a
              href="https://wa.me/5554999406972?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20de%20transfer%20executivo."
              target="_blank"
              rel="noopener noreferrer"
              id="mobile-menu-whatsapp-btn"
              className="w-full py-3.5 rounded-xl bg-[#25D366] text-black font-bold text-center text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/30"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
              <span>Chamar no WhatsApp Direct</span>
            </a>

            <p className="text-center text-xs text-zinc-400 mt-2">
              Atendimento Executivo das 05h às 23h • (54) 99940-6972
            </p>
          </div>
        </div>
      )}
    </>
  );
};
