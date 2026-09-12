import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { KeyDifferentiators } from './components/KeyDifferentiators';
import { PhotoGallerySection } from './components/PhotoGallerySection';
import { ServicesSection } from './components/ServicesSection';
import { CoverageMapSection } from './components/CoverageMapSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { StickyBottomMobileBar } from './components/StickyBottomMobileBar';
import { QuoteModal } from './components/QuoteModal';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleOpenQuoteModal = () => {
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col selection:bg-[#BF953F]/30 selection:text-[#FCF6BA]">
      {/* Header */}
      <Header onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Section 2: Hero Section (Impact & Instant Conversion) */}
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Section 3: Key Differentiators (Cards with Scroll Reveal) */}
        <KeyDifferentiators />

        {/* Real Photo Gallery Session (Frota, Interior & Serras) */}
        <PhotoGallerySection />

        {/* Section 4: Services Offered (Grid Layout) */}
        <ServicesSection />

        {/* Section 5: Coverage Area & Map Focus (GEO Engine Target) */}
        <CoverageMapSection />

        {/* Section 6: Trust & Proof (Google Reviews Integration & E-E-A-T) */}
        <ReviewsSection />

        {/* Section 7: FAQ Section (Structured for Bing & Google Search Snippets) */}
        <FAQSection />
      </main>

      {/* Section 8: Footer & Technical NAP Block */}
      <Footer />

      {/* Floating Eye-Catching WhatsApp Contact Button */}
      <FloatingWhatsAppButton />

      {/* Sticky Bottom Bar on Mobile */}
      <StickyBottomMobileBar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Quick Interactive Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={handleCloseQuoteModal} />
    </div>
  );
}

