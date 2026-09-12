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

