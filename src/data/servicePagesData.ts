import { ServicePageDetail } from '../types';

export const SERVICE_PAGES: ServicePageDetail[] = [
  {
    id: 'transfer-aeroporto',
    slug: 'transfer-aeroporto',
    seoTitle: 'Transfer Aeroporto POA e Caxias (CXJ) para Gramado | Transportes Feiten',
    seoDescription:
      'Transfer privativo do Aeroporto de Porto Alegre (POA) e Caxias do Sul (CXJ) até Gramado e Canela. Rastreamento de voo, recepção VIP e cadeirinha infantil grátis.',
    h1: 'Transfer Privativo de Aeroportos para Gramado e Canela',
    eyebrow: 'Aeroporto Salgado Filho (POA) & Hugo Cantergiani (CXJ)',
    lead: 'Desembarque sem filas, sem espera por ônibus e sem estresse com malas. Nosso motorista aguarda você no portão com placa nominal e leva sua família direto ao hotel na Serra Gaúcha.',
    searchIntents: [
      'Quanto tempo leva do Aeroporto de Porto Alegre para Gramado',
      'Transfer privativo POA Gramado com cadeirinha de bebê',
      'Como ir do Aeroporto de Caxias do Sul para Gramado e Canela',
      'Transfer executivo 24h com monitoramento de voo',
    ],
    overviewParagraphs: [
      'A chegada à Serra Gaúcha define o clima de toda a viagem. No modelo de transfer privativo da Transportes Feiten, você não precisa dividir van com desconhecidos nem aguardar dezenas de passageiros embarcarem em outros hotéis antes do seu destino.',
      'Monitoramos seu voo em tempo real pelo código da companhia aérea. Se houver atraso ou adiantamento na decolagem ou no pouso em Porto Alegre (POA) ou Caxias do Sul (CXJ), nossa equipe ajusta o horário automaticamente sem cobrar taxa extra de espera.',
      'Subimos a serra pelas rodovias mais seguras e cênicas (Rota Romântica via ERS-115 ou ERS-020), com veículos modernos climatizados, espaço generoso para malas e cadeirinhas infantis higienizadas instaladas previamente.',
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Reserva com Dados do Voo',
        detail: 'Informe número do voo, data, quantidade de passageiros, malas e se necessita de cadeirinha infantil.',
      },
      {
        step: '02',
        title: 'Contato Direto do Motorista',
        detail: 'Antes do embarque, enviamos o nome do condutor executivo e contato direto via WhatsApp.',
      },
      {
        step: '03',
        title: 'Recepção no Desembarque',
        detail: 'Ao retirar as bagagens, nosso motorista aguarda no saguão com placa de identificação e auxilia com as malas.',
      },
      {
        step: '04',
        title: 'Trajeto Direto ao Hotel',
        detail: 'Viagem 100% privativa direto à porta do seu hotel, pousada ou apartamento em Gramado, Canela ou região.',
      },
    ],
    includedFeatures: [
      'Monitoramento online do voo em tempo real',
      'Recepção nominal no saguão de desembarque',
      'Bebê-conforto, cadeirinha ou booster sem custo extra',
      'Veículo 100% exclusivo para seu grupo (não compartilhado)',
      'Água mineral e carregadores USB a bordo',
      'Seguro total de passageiros (APP) e condução defensiva',
    ],
    idealFor: [
      'Famílias com crianças pequenas e carrinhos de bebê',
      'Casais em lua de mel ou viagens românticas',
      'Executivos e palestrantes com agenda pontual',
      'Grupos de até 6 pessoas com várias malas grandes',
    ],
    relatedCitySlugs: ['porto-alegre', 'caxias-do-sul', 'gramado', 'canela', 'nova-petropolis'],
    faqs: [
      {
        question: 'Se meu voo atrasar em Porto Alegre ou Caxias do Sul, pago taxa de espera?',
        answer:
          'Não. Acompanhamos o status do voo online em tempo real e reorganizamos a chegada do motorista sem qualquer custo adicional por atrasos da companhia aérea.',
      },
      {
        question: 'Qual a diferença entre transfer privativo e transfer compartilhado?',
        answer:
          'No transfer privativo da Transportes Feiten o veículo é 100% seu: saída imediata após pegar as malas, roteiro direto para seu hotel e total flexibilidade para paradas rápidas.',
      },
      {
        question: 'Vocês atendem voos de madrugada?',
        answer:
          'Sim. Embora o atendimento comercial opere das 05:00 às 23:00, realizamos recepções e embarques em voos de madrugada mediante agendamento prévio.',
      },
    ],
    defaultOrigin: 'Aeroporto de Porto Alegre (POA)',
    defaultDestination: 'Gramado (Hotel / Pousada)',
  },
  {
    id: 'tour-vinhedos',
    slug: 'tour-vale-dos-vinhedos',
    seoTitle: 'Tour Vale dos Vinhedos Privativo saindo de Gramado | Transportes Feiten',
    seoDescription:
      'Passeio privativo para Bento Gonçalves e Vale dos Vinhedos saindo de Gramado e Canela. Visite vinícolas como Miolo e Casa Valduga sem dirigir após degustações.',
    h1: 'Tour Vale dos Vinhedos Privativo saindo de Gramado e Canela',
    eyebrow: 'Bento Gonçalves • Garibaldi • Monte Belo do Sul',
    lead: 'Deguste os melhores vinhos e espumantes do Brasil com tranquilidade absoluta. Motorista executivo exclusivo o dia inteiro, sem pressa e sem preocupação com a lei seca.',
    searchIntents: [
      'Tour privativo Vale dos Vinhedos saindo de Gramado',
      'Motorista particular para vinícolas em Bento Gonçalves',
      'Como visitar vinícolas no Vale dos Vinhedos sem dirigir',
      'Transfer Gramado para Bento Gonçalves e Maria Fumaça',
    ],
    overviewParagraphs: [
      'O Vale dos Vinhedos concentra as vinícolas mais premiadas da América do Sul, mas dirigir pelas sinuosas estradas entre Bento Gonçalves e Garibaldi após degustações não é seguro nem prazeroso.',
      'Com o Tour Privativo da Transportes Feiten, você define o ritmo do dia: pode combinar grandes casas históricas como Casa Valduga, Miolo e Peterlongo com cantinas familiares boutique e almoço típico italiano em cantinas coloniais ou nos Caminhos de Pedra.',
      'Nosso motorista aguarda em cada parada, auxilia na organização das caixas de vinho adquiridas e cuida de todo o trajeto de ida e volta até o seu hotel em Gramado ou Canela.',
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Personalização do Roteiro',
        detail: 'Ajudamos a alinhar os horários das degustações e almoço conforme o perfil do grupo (vinhos tintos, espumantes ou turismo cultural).',
      },
      {
        step: '02',
        title: 'Saída Confortável do Hotel',
        detail: 'Buscamos você diretamente na sua hospedagem em Gramado ou Canela pela manhã, no horário combinado.',
      },
      {
        step: '03',
        title: 'Visitas sem Correria',
        detail: 'Aproveite cada vinícola e ponto turístico pelo tempo que desejar, sem depender de horários rígidos de ônibus.',
      },
      {
        step: '04',
        title: 'Retorno Seguro à Hospedagem',
        detail: 'Volte descansando no banco executivo com suas compras acondicionadas com segurança no porta-malas.',
      },
    ],
    includedFeatures: [
      '7h a 9h de passeio privativo com motorista exclusivo',
      'Roteiro 100% personalizável entre vinícolas e atrações',
      'Sugestões locais de cantinas e restaurantes sem armadilhas turísticas',
      'Espaço seguro no porta-malas para compras de vinhos e queijos',
      'Embarque e desembarque direto no hotel em Gramado ou Canela',
    ],
    idealFor: [
      'Casais e amantes de enoturismo e gastronomia',
      'Grupos de amigos que desejam degustar sem dirigir',
      'Visitantes interessados em Caminhos de Pedra e Maria Fumaça',
    ],
    relatedCitySlugs: ['bento-goncalves', 'garibaldi', 'carlos-barbosa', 'farroupilha', 'gramado'],
    faqs: [
      {
        question: 'Os ingressos das vinícolas e o almoço estão inclusos no passeio?',
        answer:
          'O serviço cobre o transporte privativo executivo com motorista exclusivo durante todo o dia. Os ingressos de degustação e refeições são contratados diretamente por você, dando liberdade total de escolha.',
      },
      {
        question: 'É possível combinar o Vale dos Vinhedos com o passeio de Maria Fumaça?',
        answer:
          'Sim! Coordenamos os horários para que nosso motorista deixe vocês na estação de embarque em Bento Gonçalves, Garibaldi ou Carlos Barbosa e faça o receptivo na chegada do trem.',
      },
      {
        question: 'Quantas vinícolas dá para visitar em um dia?',
        answer:
          'Em média recomendamos de 3 a 4 paradas principais (entre vinícolas e almoço) para aproveitar cada degustação com calma e sem correria.',
      },
    ],
    defaultOrigin: 'Gramado (Hotel / Pousada)',
    defaultDestination: 'Vale dos Vinhedos (Bento Gonçalves)',
  },
  {
    id: 'city-tour',
    slug: 'city-tour-gramado-canela',
    seoTitle: 'City Tour Privativo Gramado e Canela | Transportes Feiten',
    seoDescription:
      'City tour exclusivo em Gramado e Canela com motorista guia local. Visite Lago Negro, Cascata do Caracol, Catedral de Pedra e Rua Coberta no seu próprio ritmo.',
    h1: 'City Tour Gramado e Canela Exclusivo e Personalizado',
    eyebrow: 'Roteiro Privativo sob Medida • Sem Grupos Desconhecidos',
    lead: 'Conheça os principais cartões-postais de Gramado e Canela sem depender de aplicativos ou filas de excursões. Você escolhe as atrações e o tempo de permanência.',
    searchIntents: [
      'City tour privativo Gramado e Canela valor',
      'Motorista particular por hora ou diária em Gramado',
      'Passeio personalizado para família com crianças em Gramado',
      'Roteiro Lago Negro, Cascata do Caracol e Bondinhos Aéreos',
    ],
    overviewParagraphs: [
      'Em períodos de alta temporada — como inverno, Natal Luz e feriados — estacionar perto das principais atrações de Gramado e Canela pode consumir horas preciosas da sua viagem.',
      'Com nosso City Tour Privativo, o motorista deixa sua família bem na entrada de cada parque ou atração (como Lago Negro, Mini Mundo, Skyglass, Parque do Caracol ou Bondinhos Aéreos) e aguarda o horário combinado para seguir para a próxima parada.',
      'Você decide o que quer visitar, onde almoçar e quando voltar ao hotel — ideal para quem viaja com crianças pequenas, idosos ou busca conforto premium.',
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Escolha Meio Período ou Dia Inteiro',
        detail: 'Defina a duração conforme a quantidade de parques e lojas que deseja incluir no dia.',
      },
      {
        step: '02',
        title: 'Roteiro Inteligente por Proximidade',
        detail: 'Nosso condutor sugere a ordem ideal das atrações para evitar trânsito e ganhar tempo.',
      },
      {
        step: '03',
        title: 'Desembarque na Porta das Atrações',
        detail: 'Zero estresse com estacionamento pago ou longas caminhadas no frio e na chuva.',
      },
      {
        step: '04',
        title: 'Flexibilidade Total',
        detail: 'Quer ficar mais tempo em uma chocolateria ou tirar mais fotos na Catedral de Pedra? O roteiro se adapta a você.',
      },
    ],
    includedFeatures: [
      'Motorista local com dicas reais de gastronomia e horários',
      'Opções de 4h (meio período) ou 8h (dia completo)',
      'Cadeirinhas infantis e espaço para carrinhos de bebê no carro',
      'Climatização impecável contra frio intenso ou calor',
      'Paradas estratégicas para fotos em mirantes e pórticos',
    ],
    idealFor: [
      'Famílias com crianças e idosos que evitam caminhadas longas',
      'Viajantes com poucos dias que querem otimizar o roteiro',
      'Quem não quer dirigir no trânsito da alta temporada ou chuva',
    ],
    relatedCitySlugs: ['gramado', 'canela', 'nova-petropolis'],
    faqs: [
      {
        question: 'Posso montar meu próprio roteiro de atrações no City Tour?',
        answer:
          'Sim, 100%! Você nos envia os lugares que deseja conhecer (ex.: Lago Negro, Snowland, Acquamotion, Skyglass, Alpen Park, Vinícola Jolimont) e montamos a logística mais eficiente.',
      },
      {
        question: 'Vocês também fazem apenas trechos ponto a ponto dentro de Gramado e Canela?',
        answer:
          'Sim. Além do City Tour por período, realizamos agendamentos para jantares noturnos, shows do Natal Luz e deslocamentos entre hotéis e restaurantes.',
      },
    ],
    defaultOrigin: 'Gramado (Hotel / Pousada)',
    defaultDestination: 'Canela e Gramado (City Tour)',
  },
  {
    id: 'tour-canions',
    slug: 'tour-canions-cambara-do-sul',
    seoTitle: 'Tour Cânions Cambará do Sul Privativo | Itaimbezinho e Fortaleza',
    seoDescription:
      'Passeio privativo saindo de Gramado e Canela para os Cânions Itaimbezinho e Fortaleza em Cambará do Sul. Condução segura em estradas de acesso com motorista experiente.',
    h1: 'Tour Privativo aos Cânions de Cambará do Sul',
    eyebrow: 'Cânion Itaimbezinho & Cânion Fortaleza • Serra Geral',
    lead: 'Explore os maiores cânions da América Latina com conforto, segurança técnica nas estradas serranas e acompanhamento das condições climáticas em tempo real.',
    searchIntents: [
      'Passeio privativo Cânion Itaimbezinho saindo de Gramado',
      'Transfer Gramado para Cambará do Sul valor',
      'Tour Cânion Fortaleza com motorista particular',
    ],
    overviewParagraphs: [
      'Localizada nos Campos de Cima da Serra, Cambará do Sul abriga os impressionantes cânions Itaimbezinho e Fortaleza, com paredões verticais de até 900 metros de profundidade.',
      'O trajeto a partir de Gramado e Canela envolve trechos de estrada sinuosa, variação rápida de altitude e neblina frequente. Viajar com um condutor experiente que conhece bem a região garante tranquilidade total para você focar apenas na paisagem.',
      'No modelo privativo, você aproveita os mirantes, trilhas leves e pausas gastronômicas no seu ritmo, retornando ao conforto do seu hotel no fim da tarde.',
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Checagem Climática Prévia',
        detail: 'Acompanhamos a previsão de visibilidade nos parques para ajudar você a escolher o melhor dia para o passeio.',
      },
      {
        step: '02',
        title: 'Saída Matinal de Gramado ou Canela',
        detail: 'Partida cedo para aproveitar a melhor luz da manhã nos mirantes antes da formação de nuvens.',
      },
      {
        step: '03',
        title: 'Visita aos Mirantes e Trilhas',
        detail: 'Tempo livre para percorrer as trilhas do Vértice e Cotovelo no Itaimbezinho ou a Pedra do Segredo no Fortaleza.',
      },
      {
        step: '04',
        title: 'Retorno Confortável',
        detail: 'Após o passeio e parada para almoço regional, retorno seguro até sua hospedagem.',
      },
    ],
    includedFeatures: [
      'Veículo confortável e revisado para trechos de serra e acesso',
      'Condutor acostumado às condições de neblina dos Campos de Cima da Serra',
      'Flexibilidade para escolher Itaimbezinho, Fortaleza ou combinação',
      'Orientações práticas sobre trilhas, horários dos parques e vestimenta',
    ],
    idealFor: [
      'Amantes de ecoturismo, fotografia de paisagem e natureza',
      'Casais e famílias que não querem enfrentar estradas desconhecidas',
      'Hóspedes de Gramado e Canela buscando um passeio bate-volta memorável',
    ],
    relatedCitySlugs: ['cambara-do-sul', 'canela', 'gramado'],
    faqs: [
      {
        question: 'Quanto tempo dura a viagem de Gramado até Cambará do Sul?',
        answer:
          'O deslocamento dura em média 2 horas por trecho. O passeio completo costuma durar de 9 a 10 horas considerando o tempo de trilhas e almoço.',
      },
      {
        question: 'É possível visitar o Itaimbezinho e o Fortaleza no mesmo dia?',
        answer:
          'É possível dependendo do ritmo e da época do ano, mas para aproveitar sem pressa muitas famílias escolhem um dos cânions principais ou combinam roteiro estendido.',
      },
    ],
    defaultOrigin: 'Gramado / Canela (Hotel)',
    defaultDestination: 'Cambará do Sul (Cânions)',
  },
  {
    id: 'transporte-eventos',
    slug: 'transporte-eventos-casamentos',
    seoTitle: 'Transporte Executivo para Eventos e Casamentos em Gramado e Canela',
    seoDescription:
      'Logística executiva privativa para casamentos, congressos na Expogramado, Serra Park e eventos corporativos na Serra Gaúcha. Pontualidade e nota fiscal.',
    h1: 'Transporte Executivo para Eventos, Congressos e Casamentos',
    eyebrow: 'Atendimento Corporativo • Destination Weddings • Feiras & Convenções',
    lead: 'Logística discreta, pontualidade absoluta e atendimento em traje executivo para noivos, convidados VIP, palestrantes e equipes corporativas em toda a Serra Gaúcha.',
    searchIntents: [
      'Transporte executivo para eventos em Gramado Expogramado',
      'Motorista particular para casamento em Canela e Gramado',
      'Transfer corporativo Porto Alegre para convenção em Gramado',
    ],
    overviewParagraphs: [
      'Eventos corporativos e casamentos na Serra Gaúcha exigem precisão cronológica. Um atraso na recepção do aeroporto ou no traslado até o local da cerimônia compromete toda a programação.',
      'A Transportes Feiten oferece gestão dedicada de horários para congressos no Serra Park e Expogramado, jantares de diretoria, além de transporte exclusivo para noivos, padrinhos e familiares em destination weddings em Gramado, Canela e vinícolas de Bento Gonçalves.',
      'Emitimos nota fiscal e organizamos planilhas de embarque sob medida para agências de eventos, cerimonialistas e departamentos de viagens corporativas.',
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Alinhamento com Cerimonial ou Empresa',
        detail: 'Recebemos a grade de voos, hotéis e horários do evento para montar o cronograma exato.',
      },
      {
        step: '02',
        title: 'Recepção Padronizada',
        detail: 'Motoristas com traje social, discrição executiva e veículos impecavelmente limpos.',
      },
      {
        step: '03',
        title: 'Coordenação em Tempo Real',
        detail: 'Comunicação direta com produtores, secretárias ou cerimonialistas durante todo o evento.',
      },
      {
        step: '04',
        title: 'Faturamento Transparente',
        detail: 'Emissão de nota fiscal e condições facilitadas via PIX, transferência ou cartão corporativo.',
      },
    ],
    includedFeatures: [
      'Atendimento por trecho, diária ou pacote completo de evento',
      'Motoristas em apresentação formal executiva',
      'Emissão de Nota Fiscal para empresas e agências',
      'Cobertura de todos os centros de eventos (Serra Park, Expogramado, hotéis resort)',
    ],
    idealFor: [
      'Noivos, padrinhos e familiares em destination weddings',
      'Executivos e palestrantes de feiras e congressos em Gramado',
      'Agências de turismo receptivo e produtoras de eventos',
    ],
    relatedCitySlugs: ['gramado', 'canela', 'porto-alegre', 'caxias-do-sul', 'bento-goncalves'],
    faqs: [
      {
        question: 'Vocês emitem Nota Fiscal para empresas?',
        answer:
          'Sim, emitimos Nota Fiscal de prestação de serviços para empresas, agências e viajantes corporativos que necessitam de prestação de contas.',
      },
      {
        question: 'É possível contratar motorista à disposição durante toda a festa de casamento?',
        answer:
          'Sim. Trabalhamos com diárias e períodos fechados à disposição para levar os convidados ao local da cerimônia e garantir retorno seguro na madrugada.',
      },
    ],
    defaultOrigin: 'Aeroporto de Porto Alegre (POA)',
    defaultDestination: 'Gramado (Evento / Hotel)',
  },
];

export function getServicePageBySlug(slug: string): ServicePageDetail | undefined {
  return SERVICE_PAGES.find((s) => s.slug === slug);
}
