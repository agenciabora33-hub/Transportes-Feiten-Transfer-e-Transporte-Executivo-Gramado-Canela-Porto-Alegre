export interface TransferQuoteState {
  origin: string;
  destination: string;
  date: string;
  time: string;
  passengers: number;
  luggage: number;
  childSeat: boolean;
  childSeatType: 'none' | 'baby' | 'toddler' | 'booster';
  roundTrip: boolean;
  returnDate: string;
  returnTime: string;
  notes: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  duration: string;
  capacity: string;
  category: 'transfer' | 'tour' | 'event';
  badge?: string;
  popular?: boolean;
}

export interface DifferentiatorItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
  details: string[];
}

export interface CoverageCity {
  id: string;
  slug: string;
  name: string;
  type: 'base' | 'airport' | 'destination';
  distanceFromGramadoKm: number;
  estimatedTimeMin: number;
  highlight: string;
  highway: string;
  description: string;
  popularFor: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  tripType: string;
  verified: boolean;
  highlight: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'aeroporto' | 'criancas' | 'horarios' | 'pagamento' | 'geral';
}

export interface PhotoItem {
  id: string;
  src: string;
  fallbackSrc: string;
  title: string;
  category: 'frota' | 'interior' | 'serra';
  caption: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
}

export interface ServicePageDetail {
  id: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  eyebrow: string;
  lead: string;
  searchIntents: string[];
  overviewParagraphs: string[];
  howItWorks: { step: string; title: string; detail: string }[];
  includedFeatures: string[];
  idealFor: string[];
  relatedCitySlugs: string[];
  faqs: { question: string; answer: string }[];
  defaultOrigin: string;
  defaultDestination: string;
}

export interface CityPageDetail {
  id: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  eyebrow: string;
  lead: string;
  searchIntentAnswers: {
    intentQuestion: string;
    badge: string;
    answer: string;
  }[];
  boardingPoints: string[];
  attractionsAndTips: string[];
  recommendedServiceSlugs: string[];
  faqs: { question: string; answer: string }[];
  defaultOrigin: string;
  defaultDestination: string;
}
