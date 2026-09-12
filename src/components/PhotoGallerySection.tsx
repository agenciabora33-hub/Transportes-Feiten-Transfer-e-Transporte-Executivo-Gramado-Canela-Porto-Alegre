import React, { useState, useEffect } from 'react';
import { GALLERY_PHOTOS } from '../data/transportesData';
import { PhotoItem } from '../types';
import {
  Camera,
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

export const PhotoGallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frota' | 'interior' | 'serra'>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredPhotos = GALLERY_PHOTOS.filter((photo) => {
    if (activeCategory === 'all') return true;
    return photo.category === activeCategory;
  });

  const handleOpenLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) =>
      prev === null || prev === 0 ? filteredPhotos.length - 1 : prev - 1
    );
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) =>
      prev === null || prev === filteredPhotos.length - 1 ? 0 : prev + 1
    );
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, filteredPhotos.length]);

  const activePhoto = selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  return (
    <section
      id="galeria"
      className="py-16 sm:py-24 bg-[#0A0A0C] relative border-t border-zinc-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181B] border border-[#D4AF37]/30 text-xs text-[#FCF6BA] mb-3">
              <Camera className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-semibold tracking-wider uppercase text-[11px]">
                Sessão de Fotos • Frota & Experiência Real
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Galeria Exclusiva: Conforto e <br />
              <span className="text-gold-gradient">Segurança em Cada Detalhe</span>
            </h2>

            <p className="text-sm sm:text-base text-[#A1A1AA] mt-3 leading-relaxed">
              Fotos reais dos nossos veículos executivos, espaço interno higienizado, atendimento aeroporto
              e as rotas mais encantadoras de Gramado, Canela e Serra Gaúcha.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-[#18181B] border border-zinc-800 self-start md:self-auto">
            <button
              onClick={() => {
                setActiveCategory('all');
                setSelectedPhotoIndex(null);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#D4AF37] text-black font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Todas as Fotos (8)
            </button>
            <button
              onClick={() => {
                setActiveCategory('frota');
                setSelectedPhotoIndex(null);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === 'frota'
                  ? 'bg-[#D4AF37] text-black font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Frota Executiva
            </button>
            <button
              onClick={() => {
                setActiveCategory('interior');
                setSelectedPhotoIndex(null);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === 'interior'
                  ? 'bg-[#D4AF37] text-black font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Interior & Conforto
            </button>
            <button
              onClick={() => {
                setActiveCategory('serra');
                setSelectedPhotoIndex(null);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === 'serra'
                  ? 'bg-[#D4AF37] text-black font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Rotas & Serras
            </button>
          </div>
        </div>

        {/* Dynamic Bento & Masonry Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredPhotos.map((photo, index) => {
            const isFeatured = index === 0 || index === 5;
            return (
              <div
                key={photo.id}
                id={`gallery-item-${photo.id}`}
                onClick={() => handleOpenLightbox(index)}
                className={`group relative overflow-hidden rounded-2xl bg-[#141417] border border-zinc-800/80 hover:border-[#D4AF37]/60 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#D4AF37]/10 ${
                  isFeatured ? 'sm:col-span-2 sm:row-span-1 lg:col-span-2' : ''
                }`}
              >
                {/* Image Container with Aspect Ratio */}
                <div
                  className={`w-full overflow-hidden relative bg-zinc-950 ${
                    isFeatured ? 'h-64 sm:h-72 lg:h-80' : 'h-64 sm:h-72 lg:h-80'
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback to Google CDN URL if local path fails
                      (e.currentTarget as HTMLImageElement).src = photo.fallbackSrc;
                    }}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[#FCF6BA] border border-[#D4AF37]/35 shadow">
                      {photo.category === 'frota' && 'Frota Executiva'}
                      {photo.category === 'interior' && 'Interior VIP'}
                      {photo.category === 'serra' && 'Serra Gaúcha'}
                    </span>

                    {/* Expand icon button */}
                    <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 shadow-lg">
                      <Maximize2 className="w-4 h-4 text-[#FCF6BA]" />
                    </div>
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10">
                    <h3 className="font-display text-sm sm:text-base font-bold text-white group-hover:text-[#FCF6BA] transition-colors leading-snug mb-1">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed opacity-90">
                      {photo.caption}
                    </p>
                    <div className="mt-2.5 flex items-center gap-1.5 text-[11px] font-semibold text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Clique para ampliar foto</span>
                      <Sparkles className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Guarantee Banner under Gallery */}
        <div className="mt-10 p-5 rounded-2xl bg-[#141417] border border-[#D4AF37]/25 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#FCF6BA] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                Veículos Higienizados & Revisados Antes de Cada Viagem
              </div>
              <div className="text-xs text-zinc-400">
                Ar-condicionado digital, água mineral cortesia e cadeirinhas infantis inclusas.
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/5554999406972?text=Ol%C3%A1!%20Gostaria%20de%20reservar%20meu%20transfer%20executivo%20com%20a%20Transportes%20Feiten."
            target="_blank"
            rel="noopener noreferrer"
            id="gallery-whatsapp-cta"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-[#25D366]/20 transition-all border border-[#25D366]"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>Viajar Neste Padrão</span>
          </a>
        </div>

      </div>

      {/* Full-Screen Interactive Lightbox Modal */}
      {activePhoto && selectedPhotoIndex !== null && (
        <div
          id="photo-lightbox-modal"
          onClick={handleCloseLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
        >
          {/* Close button */}
          <button
            onClick={handleCloseLightbox}
            id="lightbox-close-btn"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 rounded-full bg-zinc-900/80 border border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all"
            aria-label="Fechar galeria"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            id="lightbox-prev-btn"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-zinc-900/80 border border-zinc-700 text-white hover:bg-zinc-800 hover:border-[#D4AF37] transition-all shadow-xl"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            id="lightbox-next-btn"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-zinc-900/80 border border-zinc-700 text-white hover:bg-zinc-800 hover:border-[#D4AF37] transition-all shadow-xl"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Center Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center"
          >
            {/* Main Image */}
            <div className="relative w-full max-h-[72vh] flex items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 shadow-2xl bg-black">
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = activePhoto.fallbackSrc;
                }}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-2xl"
              />
            </div>

            {/* Bottom Details Bar */}
            <div className="w-full mt-4 p-4 rounded-2xl bg-[#161619]/90 backdrop-blur-md border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider">
                    Foto {selectedPhotoIndex + 1} de {filteredPhotos.length}
                  </span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-xs text-zinc-400 font-display font-semibold text-white">
                    {activePhoto.title}
                  </span>
                </div>
                <p className="text-xs text-zinc-300 max-w-xl">{activePhoto.caption}</p>
              </div>

              {/* Quick WhatsApp button for this photo */}
              <a
                href={`https://wa.me/5554999406972?text=${encodeURIComponent(
                  `Olá! Vi a foto *${activePhoto.title}* no site da Transportes Feiten e gostaria de cotar um transfer com este padrão de atendimento.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs flex items-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all border border-[#25D366]"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Cotar pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
