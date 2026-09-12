import {
  CoverageCity,
  DifferentiatorItem,
  FAQItem,
  ReviewItem,
  ServiceItem,
  TransferQuoteState,
} from '../types';

export const COMPANY_INFO = {
  name: 'Transportes Feiten',
  legalName: 'Transportes Feiten - Transfer & Transporte Executivo',
  tagline: 'Transfer & Transporte Executivo | Gramado, Canela e Serra Gaúcha',
  phone: '(54) 99940-6972',
  phoneRaw: '5554999406972',
  whatsappUrl: 'https://wa.me/5554999406972',
  address: 'Rua Cezare Vaccari, 28 - Santa Terezinha',
  city: 'Canela',
  state: 'RS',
  zip: '95686-252',
  fullAddress: 'Rua Cezare Vaccari, 28 - Santa Terezinha, Canela - RS, 95686-252',
  operatingHours: 'Segunda a Domingo, das 05:00 às 23:00',
  operatingHoursShort: '05:00 - 23:00 Diariamente',
  openingDate: '07 de Junho de 2023',
  googleRating: 5.0,
  googleReviewCount: 84,
  instagramHandle: '@transportefeiten',
  instagramUrl: 'https://www.instagram.com/transportefeiten/',
  mapsUrl: 'https://maps.google.com/?q=Rua+Cezare+Vaccari+28+Canela+RS',
};

export const KEY_DIFFERENTIATORS: DifferentiatorItem[] = [
  {
    id: 'aeroporto-vip',
    title: 'Atendimento Aeroporto VIP (POA / CXJ)',
    description:
      'Recepção pontual e personalizada no saguão de desembarque dos aeroportos de Porto Alegre (Salgado Filho) e Caxias do Sul (Hugo Cantergiani).',
    iconName: 'PlaneTakeoff',
    badge: 'Rastreamento de Voo',
    details: [
      'Monitoramento de voo em tempo real contra atrasos',
      'Recepção com placa identificadora nominal',
      'Auxílio imediato com toda a bagagem da família',
      'Sem custo adicional por espera em caso de voo atrasado',
    ],
  },
  {
    id: 'motoristas-guias',
    title: 'Motoristas Guias Locais',
    description:
      'Condutores profissionais, discretos e com amplo conhecimento geográfico da Serra Gaúcha, história regional e rotas gastronômicas exclusivas.',
    iconName: 'Compass',
    badge: 'Guia Regional',
    details: [
      'Condução suave e segura em curvas serranas e neblina',
      'Dicas valiosas de vinícolas, restaurantes e atrações',
      'Atendimento cordial, respeitoso e totalmente focado no passageiro',
      'Veículos rastreados com seguro total de passageiros',
    ],
  },
  {
    id: 'logistica-familiar',
    title: 'Logística Familiar Completa',
    description:
      'Viaje com crianças com total tranquilidade. Disponibilizamos equipamentos de segurança infantil higienizados e homologados sem nenhum custo extra.',
    iconName: 'Baby',
    badge: 'Segurança Infantil Inclusa',
    details: [
      'Bebê conforto (0 a 1 ano) higienizado a vapor',
      'Cadeirinha para primeira infância (1 a 4 anos / 9-18kg)',
      'Assento de elevação booster (4 a 10 anos)',
      'Espaço confortável para carrinhos e malas volumosas',
    ],
  },
  {
    id: 'frota-moderna',
    title: 'Frota Moderna & Higienizada',
    description:
      'Veículos executivos de alto padrão, climatizados, revisados periodicamente e rigorosamente higienizados antes de cada embarque.',
    iconName: 'ShieldCheck',
    badge: 'Conforto & Higiene',
    details: [
      'Ar-condicionado dual zone e bancos anatômicos',
      'Carregadores rápidos USB e porta-malas generoso',
      'Água mineral e comodidades para o trajeto da serra',
      'Seguro total APP (Acidentes Pessoais a Passageiros)',
    ],
  },
];

export const SERVICES_OFFERED: ServiceItem[] = [
  {
    id: 'transfer-aeroporto',
    title: 'Transfer Aeroporto (Chegada e Partida)',
    subtitle: 'Porto Alegre (POA) & Caxias do Sul (CXJ) ↔ Gramado & Canela',
    description:
      'O serviço privativo mais pontual e seguro da Serra Gaúcha. Recepção exclusiva no portão de desembarque e transporte direto ao seu hotel ou pousada com máximo conforto.',
    highlights: [
      'Acompanhamento do voo online',
      'Cadeirinha infantil gratuita',
      'Paradas panorâmicas se desejado',
      'Sem filas ou compartilhamento com estranhos',
    ],
    duration: 'Aprox. 1h45 a 2h15',
    capacity: '1 a 6 passageiros + malas',
    category: 'transfer',
    badge: 'Mais Solicitado',
    popular: true,
  },
  {
    id: 'tour-vinhedos',
    title: 'Tour Vale dos Vinhedos Privativo',
    subtitle: 'Bento Gonçalves, Garibaldi & Monte Belo do Sul',
    description:
      'Desfrute das melhores vinícolas do Brasil sem se preocupar com volante. Roteiro personalizado com visitas a cantinas boutique, vinícolas renomadas e gastronomia típica italiana.',
    highlights: [
      'Liberdade total para degustar vinhos e espumantes',
      'Roteiro sob medida ao seu gosto',
      'Sugestões de restaurantes premiados',
      'Horário flexível de partida e retorno',
    ],
    duration: 'Dia inteiro (7h a 9h de tour)',
    capacity: 'Até 6 pessoas',
    category: 'tour',
    badge: 'Experiência VIP',
  },
  {
    id: 'city-tour',
    title: 'City Tour Gramado & Canela Exclusivo',
    subtitle: 'Roteiro privativo sem a correria dos ônibus coletivos',
    description:
      'Visite o Lago Negro, Mini Mundo, Cascata do Caracol, Bondinhos Aéreos, Catedral de Pedra e muito mais no seu próprio ritmo, com guia motorista local à disposição.',
    highlights: [
      'Você escolhe quais atrações visitar',
      'Sem espera por grupos grandes',
      'Paradas estratégicas para fotos perfeitas',
      'Embarque e desembarque no hotel',
    ],
    duration: 'Meio período ou dia completo',
    capacity: 'Até 6 pessoas',
    category: 'tour',
    badge: 'Família & Casais',
  },
  {
    id: 'tour-canions',
    title: 'Tour Cânions em Cambará do Sul',
    subtitle: 'Itaimbezinho & Fortaleza com condutor experiente',
    description:
      'Viagem segura pelas estradas de acesso aos parques nacionais dos Cânions da Serra Geral. Aprecie as maiores fendas rochosas da América Latina com tranquilidade e pontualidade.',
    highlights: [
      'Condução técnica em trechos de acesso',
      'Acompanhamento de condições climáticas',
      'Dicas para as melhores trilhas e mirantes',
      'Retorno no final da tarde com conforto',
    ],
    duration: 'Aprox. 9h a 10h',
    capacity: 'Até 6 pessoas',
    category: 'tour',
    badge: 'Ecoturismo Premium',
  },
  {
    id: 'transporte-eventos',
    title: 'Transporte para Eventos & Casamentos',
    subtitle: 'Atendimento corporativo, congressos e casamentos de luxo',
    description:
      'Logística impecável para noivos, padrinhos, convidados VIP ou executivos em conferências na Serra Gaúcha (Gramado Expogramado, Serra Park e hotéis resort).',
    highlights: [
      'Pontualidade rigorosa e discrição executiva',
      'Traje formal e recepção de alto padrão',
      'Coordenação de horários e múltiplos traslados',
      'Emissão de nota fiscal para empresas',
    ],
    duration: 'Por trecho ou diária disponível',
    capacity: 'Individual ou grupos',
    category: 'event',
    badge: 'Corporativo & Social',
  },
];

export const COVERAGE_CITIES: CoverageCity[] = [
  {
    id: 'canela',
    name: 'Canela',
    type: 'base',
    distanceFromGramadoKm: 7,
    estimatedTimeMin: 12,
    highlight: 'Base Operacional & Sede',
    highway: 'Avenida das Hortênsias / RS-235',
    description:
      'Nossa sede própria em Canela proporciona atendimento rápido e disponibilidade imediata em toda a microrregião das hortênsias.',
    popularFor: 'Cascata do Caracol, Catedral de Pedra, Terra Mágica Florybal, Alpen Park',
  },
  {
    id: 'gramado',
    name: 'Gramado',
    type: 'base',
    distanceFromGramadoKm: 0,
    estimatedTimeMin: 0,
    highlight: 'Coração da Serra Gaúcha',
    highway: 'ERS-115 / RS-235',
    description:
      'Principal destino turístico de inverno do Brasil. Atendemos todos os hotéis, pousadas, resorts e condomínios de Gramado com exclusividade.',
    popularFor: 'Rua Coberta, Natal Luz, Festival de Cinema, Lago Negro, Snowland',
  },
  {
    id: 'porto-alegre',
    name: 'Porto Alegre (POA)',
    type: 'airport',
    distanceFromGramadoKm: 118,
    estimatedTimeMin: 110,
    highlight: 'Aeroporto Internacional Salgado Filho',
    highway: 'BR-116 / ERS-239 / ERS-115 / ERS-020 (Rota Romântica)',
    description:
      'Porta de entrada dos voos nacionais e internacionais. Recebemos você no desembarque para uma subida da serra confortável e segura.',
    popularFor: 'Desembarque aéreo, voos executivos e conexões',
  },
  {
    id: 'caxias-do-sul',
    name: 'Caxias do Sul (CXJ)',
    type: 'airport',
    distanceFromGramadoKm: 68,
    estimatedTimeMin: 65,
    highlight: 'Aeroporto Regional Hugo Cantergiani',
    highway: 'RS-453 (Rota do Sol) / RS-235',
    description:
      'Alternativa ágil e próxima de voos comerciais diretos com destino rápido a Gramado e Canela.',
    popularFor: 'Voos diretos SP/RJ, Festa da Uva, polo metalmecânico',
  },
  {
    id: 'bento-goncalves',
    name: 'Bento Gonçalves',
    type: 'destination',
    distanceFromGramadoKm: 115,
    estimatedTimeMin: 105,
    highlight: 'Capital Brasileira do Vinho',
    highway: 'RS-235 / RS-453 / RS-470',
    description:
      'Centro do Vale dos Vinhedos e Caminhos de Pedra. Conduzimos você com total liberdade para degustar os melhores rótulos.',
    popularFor: 'Vale dos Vinhedos, Maria Fumaça, Vinícola Miolo, Casa Valduga',
  },
  {
    id: 'garibaldi',
    name: 'Garibaldi',
    type: 'destination',
    distanceFromGramadoKm: 102,
    estimatedTimeMin: 95,
    highlight: 'Capital Nacional do Espumante',
    highway: 'RS-235 / RS-453',
    description:
      'Charmosa cidade histórica vizinha a Bento Gonçalves, famosa pela produção dos mais premiados espumantes método tradicional.',
    popularFor: 'Rota dos Espumantes, Peterlongo, Chandon, Garibaldi Vintage',
  },
  {
    id: 'nova-petropolis',
    name: 'Nova Petrópolis',
    type: 'destination',
    distanceFromGramadoKm: 34,
    estimatedTimeMin: 35,
    highlight: 'Jardim da Serra Gaúcha',
    highway: 'RS-235',
    description:
      'Colonização alemã autêntica, praças floridas e malharias. Parada adorada entre Gramado e Porto Alegre ou Caxias.',
    popularFor: 'Labirinto Verde, Praça das Flores, Parque Aldeia do Imigrante',
  },
  {
    id: 'cambara-do-sul',
    name: 'Cambará do Sul',
    type: 'destination',
    distanceFromGramadoKm: 112,
    estimatedTimeMin: 120,
    highlight: 'Terra dos Cânions Deslumbrantes',
    highway: 'RS-235 / RS-020',
    description:
      'Passeio imperdível para amantes de natureza. Conduzimos com maestria pelos acessos aos parques nacionais.',
    popularFor: 'Cânion Itaimbezinho, Cânion Fortaleza, trilhas ecológicas',
  },
  {
    id: 'farroupilha',
    name: 'Farroupilha',
    type: 'destination',
    distanceFromGramadoKm: 85,
    estimatedTimeMin: 80,
    highlight: 'Santuário de Caravaggio & Malhas',
    highway: 'RS-453',
    description:
      'Polo de compras têxteis, calçados e fé no tradicional Santuário de Nossa Senhora de Caravaggio.',
    popularFor: 'Turismo de compras, Santuário de Caravaggio, vinícolas de moscatel',
  },
  {
    id: 'carlos-barbosa',
    name: 'Carlos Barbosa',
    type: 'destination',
    distanceFromGramadoKm: 95,
    estimatedTimeMin: 90,
    highlight: 'Tradição Italiana & Queijos',
    highway: 'RS-235 / RS-453',
    description:
      'Conhecida pela gastronomia típica, cutelaria e a tradicional estação terminal da Maria Fumaça.',
    popularFor: 'Festiqueijo, Tramontina Showroom, Estação Ferroviária',
  },
  {
    id: 'antonio-prado',
    name: 'Antônio Prado',
    type: 'destination',
    distanceFromGramadoKm: 110,
    estimatedTimeMin: 115,
    highlight: 'Maior Acervo da Colonização Italiana',
    highway: 'RS-122',
    description:
      'Mais de 48 casarões de madeira tombados pelo IPHAN, culinária colonial farta e cultura viva da serra.',
    popularFor: 'Casario tombado, Noite Italiana, moinhos coloniais',
  },
];

export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Eduardo M. Siqueira',
    location: 'São Paulo - SP',
    rating: 5,
    date: 'Fevereiro de 2024',
    tripType: 'Transfer POA ↔ Gramado (Família)',
    verified: true,
    highlight: 'Pontualidade britânica e cadeirinha perfeita!',
    text: 'Contratamos o transfer ida e volta do Aeroporto Salgado Filho para nosso hotel em Gramado. O motorista já estava nos esperando no portão com plaquinha com meu nome. Nosso voo atrasou quase 1 hora e não houve nenhuma cobrança extra. A cadeirinha da minha filha de 2 anos estava impecável e o carro cheirava a novo. Recomendo de olhos fechados!',
  },
  {
    id: 'rev-2',
    author: 'Camila Fernandes & Roberto',
    location: 'Rio de Janeiro - RJ',
    rating: 5,
    date: 'Novembro de 2023',
    tripType: 'Tour Vale dos Vinhedos',
    verified: true,
    highlight: 'Melhor tour de vinícolas que já fizemos',
    text: 'Fazer o Vale dos Vinhedos com a Transportes Feiten foi a melhor decisão da nossa viagem. Pudemos degustar os vinhos com total tranquilidade enquanto o motorista nos explicava a história de cada cantina e ainda nos indicou um restaurante colonial maravilhoso que não estava nos guias comuns. Carro impecável e condução super segura.',
  },
  {
    id: 'rev-3',
    author: 'Dra. Mariana Costa',
    location: 'Belo Horizonte - MG',
    rating: 5,
    date: 'Julho de 2024',
    tripType: 'Transfer Caxias do Sul ↔ Canela',
    verified: true,
    highlight: 'Segurança absoluta nas curvas da serra',
    text: 'Tenho muito receio de subir a serra com motoristas que correm. O condutor da Feiten dirigiu com uma suavidade exemplar na neblina, respeitando todas as curvas. Carro extremamente confortável, ar condicionado perfeito, água mineral gelada. Nota 10 em profissionalismo.',
  },
  {
    id: 'rev-4',
    author: 'Marcelo P. Albuquerque',
    location: 'Curitiba - PR',
    rating: 5,
    date: 'Dezembro de 2023',
    tripType: 'Transfer Natal Luz Gramado',
    verified: true,
    highlight: 'Atendimento ágil pelo WhatsApp',
    text: 'Desde o primeiro contato pelo WhatsApp a resposta foi rápida, transparente e tirou todas as dúvidas. Chegamos com 4 malas grandes e tudo coube com folga. Pontualidade na ida e no retorno às 5 da manhã sem nenhum atraso. Serviço de primeiro mundo.',
  },
  {
    id: 'rev-5',
    author: 'Patrícia & Família Goulart',
    location: 'Brasília - DF',
    rating: 5,
    date: 'Maio de 2024',
    tripType: 'City Tour Gramado & Canela',
    verified: true,
    highlight: 'Paciência e atenção com crianças',
    text: 'Estávamos com duas crianças pequenas e um bebê. O motorista foi super atencioso, nos deixou bem na entrada de cada atração para não precisarmos andar no frio e nos buscou na hora combinada. A Transportes Feiten é diferenciada!',
  },
  {
    id: 'rev-6',
    author: 'Ricardo V. Silveira',
    location: 'Campinas - SP',
    rating: 5,
    date: 'Janeiro de 2024',
    tripType: 'Transfer Executivo Aeroporto POA',
    verified: true,
    highlight: 'Profissionalismo de padrão executivo',
    text: 'Uso transporte executivo com frequência por motivos corporativos e posso afirmar que o atendimento do Feiten é do mais alto nível. Discrição, veículo impecavelmente limpo e motorista muito bem trajado. Sem dúvida minha escolha fixa no Rio Grande do Sul.',
  },
];

export const FAQS: FAQItem[] = [
  {
    category: 'aeroporto',
    question: 'Como funciona a recepção no aeroporto de Porto Alegre ou Caxias do Sul?',
    answer:
      'Monitoramos o código do seu voo em tempo real desde a decolagem até o pouso. Assim que o avião toca a pista, nosso motorista executivo se posiciona no saguão de desembarque com uma placa nominal elegante com seu nome. Você recebe o contato do motorista via WhatsApp antes do embarque para tranquilidade imediata.',
  },
  {
    category: 'criancas',
    question: 'Vocês fornecem cadeirinha de bebê e assento de elevação?',
    answer:
      'Sim, com muito orgulho! Fornecemos bebê-conforto (0 a 1 ano), cadeirinhas de retenção para primeira infância (1 a 4 anos) e assentos de elevação (booster) totalmente higienizados a vapor, homologados pelo INMETRO, sem NENHUM custo adicional. Basta solicitar na cotação para já deixarmos instalado no veículo.',
  },
  {
    category: 'horarios',
    question: 'Quais são os horários de atendimento da Transportes Feiten?',
    answer:
      'Nosso atendimento e operações ocorrem estrategicamente das 05:00 às 23:00, todos os dias da semana, incluindo sábados, domingos e feriados. Para voos com horários especiais de madrugada, agendamos com antecedência garantida.',
  },
  {
    category: 'pagamento',
    question: 'Como é feito o pagamento do transfer?',
    answer:
      'Facilitamos o pagamento para seu conforto: aceitamos PIX (com confirmação instantânea), transferências bancárias e cartões de crédito/débito. O pagamento pode ser ajustado com um sinal na reserva e o saldo concluído na prestação do serviço.',
  },
  {
    category: 'aeroporto',
    question: 'O que acontece se o meu voo atrasar ou for adiantado?',
    answer:
      'Não se preocupe! Como rastreamos o voo online pelo aplicativo da companhia aérea, sabemos exatamente o novo horário de pouso. O motorista se adequará ao seu desembarque sem qualquer cobrança de taxa de espera.',
  },
  {
    category: 'geral',
    question: 'Quanto tempo dura a viagem do Aeroporto de Porto Alegre até Gramado ou Canela?',
    answer:
      'O trajeto leva em média de 1h45 a 2h15, dependendo do tráfego e das condições climáticas da serra. Realizamos o percurso pelas melhores vias (ERS-115, Rota Romântica ou ERS-020), sempre priorizando a segurança e o conforto da sua família.',
  },
  {
    category: 'geral',
    question: 'Os veículos comportam muitas malas e bagagem pesada?',
    answer:
      'Sim! Nossa frota é dimensionada especificamente para turismo executivo e familiar. Temos amplo porta-malas para acomodar malas grandes, malas de bordo e até carrinhos de bebê com conforto e sem aperto na cabine.',
  },
  {
    category: 'geral',
    question: 'O serviço é compartilhado com outros passageiros desconhecidos?',
    answer:
      'NÃO. Trabalhamos exclusivamente no modelo de TRANSFER PRIVATIVO EXECUTIVO. O veículo estará 100% dedicado a você e seus acompanhantes, com partida imediata após a recepção das bagagens, sem paradas em outros hotéis de estranhos.',
  },
];

/**
 * Builds an official WhatsApp deep link pre-filled with trip quote parameters
 */
export function buildWhatsAppQuoteUrl(data?: Partial<TransferQuoteState>): string {
  const base = 'https://wa.me/5554999406972';
  if (!data || !data.origin) {
    const defaultMsg =
      'Olá! Gostaria de solicitar uma cotação de transfer executivo com a Transportes Feiten.';
    return `${base}?text=${encodeURIComponent(defaultMsg)}`;
  }

  const lines: string[] = [
    '✨ *SOLICITAÇÃO DE COTAÇÃO - TRANSPORTES FEITEN*',
    '----------------------------------------',
    `📍 *Origem:* ${data.origin}`,
    `🎯 *Destino:* ${data.destination || 'Gramado / Canela'}`,
    `📅 *Data de Ida:* ${data.date || 'A definir'}`,
    `⏰ *Horário Aprox.:* ${data.time || 'A combinar'}`,
    `👥 *Passageiros:* ${data.passengers || 2}`,
    `🧳 *Malas Estimadas:* ${data.luggage || 2}`,
  ];

  if (data.childSeat) {
    const seatNames: Record<string, string> = {
      baby: 'Bebê Conforto (0 a 1 ano)',
      toddler: 'Cadeirinha Infantil (1 a 4 anos)',
      booster: 'Assento de Elevação (4 a 10 anos)',
      none: 'Sim (Informar idade)',
    };
    lines.push(`👶 *Segurança Infantil:* ${seatNames[data.childSeatType || 'none'] || 'Sim'}`);
  }

  if (data.roundTrip) {
    lines.push('🔁 *Viagem de Ida e Volta:* Sim');
    if (data.returnDate) lines.push(`📅 *Data de Retorno:* ${data.returnDate}`);
    if (data.returnTime) lines.push(`⏰ *Horário Retorno:* ${data.returnTime}`);
  }

  if (data.notes && data.notes.trim()) {
    lines.push(`📝 *Observações/Nº Voo:* ${data.notes.trim()}`);
  }

  lines.push('----------------------------------------');
  lines.push('Gostaria de verificar disponibilidade e valores.');

  return `${base}?text=${encodeURIComponent(lines.join('\n'))}`;
}

export const GALLERY_PHOTOS = [
  {
    id: 'foto-1',
    src: '/gallery/foto-1.jpg',
    fallbackSrc:
      'https://lh3.googleusercontent.com/hlmlNN5OeY4Nbp0sl0uJgJF-zIXYdX2LZT6BBHzzD1KeDXwWcKKpF5xtBOQOr7NIyrssALXZ3eAseai2_A=w2026',
    title: 'Frota Executiva Transportes Feiten',
    category: 'frota' as const,
    caption:
      'Veículo executivo moderno, revisado e impecavelmente higienizado para sua viagem pela Serra Gaúcha.',
    aspectRatio: 'landscape' as const,
  },
  {
    id: 'foto-2',
    src: '/gallery/foto-2.jpg',
    fallbackSrc:
      'https://lh3.googleusercontent.com/aRwAcNHfyRddkuRMhIXlNl4jHszmkZR_qrEzHDGbM7i6Ob3KiwEMxDSjyIW3F-HJh8zA0ov0UsiZmcaVxg=w2026',
    title: 'Acolhimento & Detalhes no Embarque',
    category: 'interior' as const,
    caption:
      'Espaço amplo com acabamento premium, garantindo tranquilidade máxima do aeroporto até o hotel.',
    aspectRatio: 'portrait' as const,
  },
  {
    id: 'foto-3',
    src: '/gallery/foto-3.jpg',
    fallbackSrc:
      'https://lh3.googleusercontent.com/4tF4u6FLEALtkjJnmPUJLecgAcDaTKgQZD_6kAZfxnBV6R7VINDgOMwrnNtvqwgV5eLEfpyOVKQfASpSkQ=w2026',
    title: 'Rotas Cênicas de Gramado e Canela',
    category: 'serra' as const,
    caption:
      'Passeios privativos pelas estradas mais charmosas do Rio Grande do Sul no seu próprio ritmo.',
    aspectRatio: 'landscape' as const,
  },
  {
    id: 'foto-4',
    src: '/gallery/foto-4.jpg',
    fallbackSrc:
      'https://lh3.googleusercontent.com/WJKMeDfA6GpGlGg8epLBMv74uKkaFieX79WHmp8gLPr97_S8RADvCjw0NEahhQSmpUSKRvaV8WzpihgSiA=w2026',
    title: 'Conforto e Espaço Familiar',
    category: 'interior' as const,
    caption:
      'Bancos confortáveis, climatização perfeita e suporte completo para malas e bagagens de toda a família.',
    aspectRatio: 'portrait' as const,
  },
  {
    id: 'foto-5',
    src: '/gallery/foto-5.jpg',
    fallbackSrc:
      'https://lh3.googleusercontent.com/pnGbxSRlB6t1BdVvLUb5nBejACSAQ4Nxq7kJlQnqhExQ32sTlWpi4_iEiGTEWnspE4q67dM_Uizxnh6E-w=w2026',
    title: 'Segurança nas Curvas da Serra',
    category: 'frota' as const,
    caption:
      'Condução suave por motorista profissional e experiente na neblina e relevo sinuoso da serra.',
    aspectRatio: 'landscape' as const,
  },
  {
    id: 'foto-6',
    src: '/gallery/foto-6.jpg',
    fallbackSrc:
      'https://lh3.googleusercontent.com/xdARhoiOS4evG3pCe4njkJphguGEVBrfb_yxYn1ETTD-d6djVQmsZ5FG3gRYCN1FyxrJgU5pf5hTu5npCQ=w2026',
    title: 'Prontidão & Pontualidade em Canela',
    category: 'frota' as const,
    caption:
      'Nossa base local em Canela garante chegadas no horário exato para voos, passeios e eventos.',
    aspectRatio: 'landscape' as const,
  },
  {
    id: 'foto-7',
    src: '/gallery/foto-7.jpg',
    fallbackSrc:
      'https://lh3.googleusercontent.com/ntvRgJvOMgDqMcSAnc92Xzc9a6FCcNS7aqqDjGIztGp8ESPVOcsKp4BNdHWqMtpThSf2gfkTZdr5hFLvIw=w2026',
    title: 'Atenção Especial aos Pequenos',
    category: 'interior' as const,
    caption:
      'Disponibilização gratuita de cadeirinhas, bebê conforto e assentos de elevação higienizados.',
    aspectRatio: 'portrait' as const,
  },
  {
    id: 'foto-8',
    src: '/gallery/foto-8.jpg',
    fallbackSrc:
      'https://lh3.googleusercontent.com/aNS-Q6fcS5S8ARldAY-qdhBEiLaQhhvOSKGU17Ys_-FdKg6fpVyhURzIaJy6LrfzOC2ITt0wW6fi4q7HdQ=w2026',
    title: 'Experiência VIP na Serra Gaúcha',
    category: 'serra' as const,
    caption:
      'Momentos inesquecíveis entre vinícolas, cânions e os principais cartões-postais da região.',
    aspectRatio: 'landscape' as const,
  },
];

