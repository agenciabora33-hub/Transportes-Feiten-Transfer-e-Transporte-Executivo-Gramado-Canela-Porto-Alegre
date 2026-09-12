import React, { useState } from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'horizontal' | 'badge-only' | 'compact';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'horizontal',
  className = '',
  size = 'md',
  showText = true,
}) => {
  const [imgSrc, setImgSrc] = useState<string>('/logo.png');
  const [imgError, setImgError] = useState(false);

  // Height configurations per size to ensure strong visibility
  const sizeClasses = {
    sm: 'h-9 sm:h-10 w-auto',
    md: 'h-11 sm:h-14 md:h-14 w-auto',
    lg: 'h-16 sm:h-20 w-auto',
    xl: 'h-24 sm:h-32 w-auto',
  }[size];

  const handleImageError = () => {
    if (imgSrc === '/logo.png') {
      // Fallback to direct external ImgBB CDN
      setImgSrc('https://i.ibb.co/27j0jQfq/Generated-Image-September-08-2025-4-23-PM.png');
    } else {
      setImgError(true);
    }
  };

  // The official logo image from the user (https://ibb.co/QF676R19)
  const logoImage = (
    <div className="relative inline-flex items-center justify-center shrink-0">
      {!imgError ? (
        <img
          src={imgSrc}
          alt="Transportes Feiten - Transfer e Transporte Executivo"
          referrerPolicy="no-referrer"
          onError={handleImageError}
          className={`${sizeClasses} object-contain select-none transition-transform duration-300 hover:scale-105 filter drop-shadow-[0_2px_12px_rgba(212,175,55,0.35)]`}
          loading="eager"
        />
      ) : (
        /* Fallback luxury badge in case network fails */
        <div className="w-12 h-12 rounded-xl bg-[#18181B] border border-[#D4AF37] flex items-center justify-center text-[#FCF6BA] font-display font-bold text-xs shadow-lg">
          TF
        </div>
      )}
    </div>
  );

  if (variant === 'badge-only' || !showText) {
    return <div className={`inline-flex items-center justify-center ${className}`}>{logoImage}</div>;
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {logoImage}
        <div className="mt-3 flex flex-col items-center">
          <span className="font-display text-lg sm:text-2xl font-bold tracking-[0.16em] text-gold-gradient uppercase drop-shadow">
            Transportes Feiten
          </span>
          <div className="my-1.5 flex items-center justify-center w-44 sm:w-56">
            <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            <span className="mx-2 text-[#FCF6BA] text-xs">❖</span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          </div>
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] text-[#FCF6BA]/90 uppercase">
            Transfer & Transporte Executivo
          </span>
          <span className="text-[9px] sm:text-[10px] tracking-[0.15em] text-[#A1A1AA] uppercase mt-0.5">
            Gramado • Canela • Serra Gaúcha
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        {logoImage}
        <div className="flex flex-col">
          <span className="font-display text-sm font-bold tracking-[0.12em] text-gold-gradient uppercase leading-tight">
            Transportes Feiten
          </span>
          <span className="text-[9px] tracking-[0.14em] text-[#FCF6BA]/85 uppercase font-medium">
            Transfer Executivo
          </span>
        </div>
      </div>
    );
  }

  // Default 'horizontal' lockup for Navbar & Sticky Header
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {logoImage}
      <div className="flex flex-col justify-center">
        <span className="font-display text-base sm:text-lg md:text-xl font-bold tracking-[0.14em] text-gold-gradient uppercase leading-none drop-shadow">
          Transportes Feiten
        </span>
        <div className="my-1 flex items-center w-full max-w-[210px]">
          <span className="h-[1px] w-full bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-transparent" />
        </div>
        <span className="text-[9px] sm:text-[10.5px] font-semibold tracking-[0.22em] text-[#FCF6BA]/90 uppercase leading-none">
          Transfer & Transporte Executivo
        </span>
      </div>
    </div>
  );
};
