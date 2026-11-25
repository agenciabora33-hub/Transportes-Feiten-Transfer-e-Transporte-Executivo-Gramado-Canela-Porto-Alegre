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
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { CityDetailPage } from './pages/CityDetailPage';
import { useRouter } from './utils/router';
import { usePageSEO } from './utils/usePageSEO';

const HomeContent: React.FC<{ onOpenQuoteModal: () => void }> = ({ onOpenQuoteModal }) => {
  usePageSEO();

  return (
    <>
      {/* Section 2: Hero Section (Impact & Instant Conversion) */}
      <Hero onOpenQuoteModal={onOpenQuoteModal} />

      {/* Section 3: Key Differentiators (Cards with Scroll Reveal) */}
      <KeyDifferentiators />

      {/* Real Photo Gallery Session (Frota, Interior & Serras) */}
      <PhotoGallerySection />

      {/* Section 4: Services Offered (Grid Layout + Internal Links) */}
      <ServicesSection />

      {/* Section 5: Coverage Area & Map Focus (GEO Engine Target + City Pages) */}
      <CoverageMapSection />

      {/* Section 6: Trust & Proof (Google Reviews Integration & E-E-A-T) */}
      <ReviewsSection />

      {/* Section 7: FAQ Section (Structured for Bing & Google Search Snippets) */}
      <FAQSection />
    </>
  );
};

export default function App() {
  const { pathname } = useRouter();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quotePreset, setQuotePreset] = useState<
    { origin?: string; destination?: string; notes?: string } | undefined
  >(undefined);

  const handleOpenQuoteModal = (preset?: {
    origin?: string;
    destination?: string;
    notes?: string;
  }) => {
    setQuotePreset(preset);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const serviceSlug = pathname.startsWith('/servicos/')
    ? pathname.replace('/servicos/', '')
    : null;
  const citySlug = pathname.startsWith('/cidades/')
    ? pathname.replace('/cidades/', '')
    : null;

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col selection:bg-[#BF953F]/30 selection:text-[#FCF6BA]">
      {/* Header */}
      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Content */}
      <main className="flex-grow">
        {serviceSlug ? (
          <ServiceDetailPage slug={serviceSlug} onOpenQuoteModal={handleOpenQuoteModal} />
        ) : citySlug ? (
          <CityDetailPage slug={citySlug} onOpenQuoteModal={handleOpenQuoteModal} />
        ) : (
          <HomeContent onOpenQuoteModal={() => handleOpenQuoteModal()} />
        )}
      </main>

      {/* Section 8: Footer & Technical NAP Block */}
      <Footer />

      {/* Floating Eye-Catching WhatsApp Contact Button */}
      <FloatingWhatsAppButton />

      {/* Sticky Mobile Conversion Bar (Only visible on < sm screens) */}
      <StickyBottomMobileBar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Interactive Express Quote Simulator Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        preset={quotePreset}
      />
    </div>
  );
}
