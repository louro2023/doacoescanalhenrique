export interface DonationTier {
  id: string;
  amountLabel: string;
  valueNumeric?: number;
  title: string;
  subtitle: string;
  url: string;
  badge?: string;
  popular?: boolean;
  impact: string;
  toolsBought: string[];
}

export const DONATION_TIERS: DonationTier[] = [
  {
    id: 'dois-reais',
    amountLabel: 'R$ 2,00',
    valueNumeric: 2,
    title: 'O Cafezinho do Técnico',
    subtitle: 'Uma forcinha rápida que faz toda a diferença para o canal continuar gravando.',
    url: 'https://nubank.com.br/cobrar/3a4h2/6ac3abb7-271e-43cb-8da3-c2c1ef1e42d7',
    impact: 'Ajuda nos insumos descartáveis: cotonetes antiestáticos, luvas nitrílicas e papel térmico.',
    toolsBought: ['Kit de hastes flexíveis de precisão', 'Luvas de nitrilo antiestáticas', 'Fita isolante térmica']
  },
  {
    id: 'cinco-reais',
    amountLabel: 'R$ 5,00',
    valueNumeric: 5,
    title: 'Doutor do PS5',
    subtitle: 'O valor campeão! Equivale a uma coxinha, mas salva o console de milhares de pessoas.',
    url: 'https://nubank.com.br/cobrar/3a4h2/6ac3a284-c7d1-419a-8d8c-17364a2251c7',
    popular: true,
    impact: 'Ajuda na compra de metal líquido de alta condutividade, thermal pads e brocas Torx T8.',
    toolsBought: ['Seringa de metal líquido Thermal Grizzly', 'Thermal pads para memórias GDDR6', 'Álcool isopropílico 99,8%']
  },
  {
    id: 'qualquer-valor',
    amountLabel: 'Qualquer Valor',
    title: 'Patrão da Bancada',
    subtitle: 'Você define a quantia que cabe no seu bolso para apoiar o laboratório.',
    url: 'https://nubank.com.br/cobrar/3a4h2/6ac1eb8d-5603-425a-9724-34655040d351',
    impact: 'Financia equipamentos pesados: estação de solda, microscópio HDMI e placas para testes destrutivos.',
    toolsBought: ['Estação de retrabalho SMD para HDMI', 'Microscópio digital para trilhas finas', 'Fontes e coolers para testes']
  }
];

export interface ChannelTool {
  name: string;
  category: string;
  purpose: string;
  estimatedCost: string;
  importance: 'Essencial' | 'Crítico' | 'Avançado';
}

export const CHANNEL_TOOLS: ChannelTool[] = [
  {
    name: 'Chave Torx T8 / T9 com Furo Magnética',
    category: 'Desmontagem',
    purpose: 'Para abrir os parafusos de segurança patenteados do chassi e carcaça do PS5 sem espanar a rosca.',
    estimatedCost: 'R$ 35,00 / unidade',
    importance: 'Crítico'
  },
  {
    name: 'Metal Líquido (Thermal Grizzly Conductonaut)',
    category: 'Arrefecimento',
    purpose: 'Composto térmico oficial da APU do PS5. Exige aplicação minuciosa e barreira de contenção renovada.',
    estimatedCost: 'R$ 110,00 / seringa 1g',
    importance: 'Crítico'
  },
  {
    name: 'Álcool Isopropílico 99,8% Puro',
    category: 'Higienização',
    purpose: 'Limpeza de oxidação na placa-mãe, dutos do cooler e remoção de crostas sem conduzir corrente.',
    estimatedCost: 'R$ 45,00 / litro',
    importance: 'Essencial'
  },
  {
    name: 'Thermal Pads de Alta Condutividade (12.8 W/mK)',
    category: 'VRAM & VRM',
    purpose: 'Dissipação das memórias GDDR6 ultra-quentes e dos MOSFETs da linha de 12V da fonte interna.',
    estimatedCost: 'R$ 65,00 / cartela',
    importance: 'Essencial'
  },
  {
    name: 'Soprador de Ar Elétrico Antiestático',
    category: 'Limpeza Frequente',
    purpose: 'Desobstrução dos coletores de poeira (dust catchers) e do dissipador de aletas densas sem condensar água.',
    estimatedCost: 'R$ 180,00',
    importance: 'Essencial'
  },
  {
    name: 'Microscópio Digital para Solda HDMI',
    category: 'Bancada e Gravação',
    purpose: 'Mostrar em close macro de 1080p nos vídeos as 19 perninhas do conector HDMI e trilhas rompidas.',
    estimatedCost: 'R$ 420,00',
    importance: 'Avançado'
  }
];

export interface TestimonialMessage {
  id: string;
  author: string;
  handle: string;
  date: string;
  amount: string;
  message: string;
  ps5Model: string;
}

export const INITIAL_TESTIMONIALS: TestimonialMessage[] = [
  {
    id: '1',
    author: 'Marcos Vinicius',
    handle: '@marcos_vini_ps',
    date: 'Ontem',
    amount: 'R$ 5,00',
    message: 'Salvei meu PS5 fat que tava desligando sozinho com 20 minutos de jogo! Apenas desobstruí a fonte com a sua dica. Economizei no mínimo 350 conto!',
    ps5Model: 'PS5 Fat Edição com Disco'
  },
  {
    id: '2',
    author: 'Felipe Andrade',
    handle: '@lipe_gamer99',
    date: 'Há 2 dias',
    amount: 'R$ 2,00',
    message: 'Canal sem enrolação, direto ao ponto! Mandei 2 pila pra pagar o cafezinho. Não sou mão de vaca não kkkkk tamo junto mestre!',
    ps5Model: 'PS5 Slim Digital'
  },
  {
    id: '3',
    author: 'Rodrigo Mendonça',
    handle: '@rodrigo_mendonca',
    date: 'Há 3 dias',
    amount: 'R$ 15,00',
    message: 'Troquei o metal líquido seguindo o passo a passo com a barreira de fita. O cooler agora nem faz barulho mais jogando Cyberpunk. Você é fera!',
    ps5Model: 'PS5 Fat 1ª Geração'
  },
  {
    id: '4',
    author: 'Thiago Nogueira',
    handle: '@thiagao_tech',
    date: 'Há 5 dias',
    amount: 'R$ 5,00',
    message: 'Todo leigo que ama seu videogame tem a obrigação moral de fortalecer esse canal. Parabéns pela didática e transparência!',
    ps5Model: 'PS5 Slim'
  }
];
