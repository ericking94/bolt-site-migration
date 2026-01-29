// Configuração centralizada de preços
export interface ProductPrice {
  id: string;
  price: number;
  originalPrice?: number; // Para mostrar desconto
}

// Preços centralizados - ÚNICA FONTE DE VERDADE
export const productPrices: Record<string, ProductPrice> = {
  // Contas Calibradas
  'calibrar-ranked': { id: 'calibrar-ranked', price: 120 },
  'calibrar-arauto': { id: 'calibrar-arauto', price: 180 },
  'calibrar-guardiao': { id: 'calibrar-guardiao', price: 140 },
  'calibrar-cruzado': { id: 'calibrar-cruzado', price: 170 },
  'calibrar-arconte': { id: 'calibrar-arconte', price: 190 },
  'calibrar-lenda': { id: 'calibrar-lenda', price: 210 },
  'calibrar-ancient': { id: 'calibrar-ancient', price: 250 },
  'calibrar-divine': { id: 'calibrar-divine', price: 300 },

  // Contas Imortais (sem smurf pool)
  'clean-5620': { id: 'clean-5620', price: 400 },
  'clean-6k': { id: 'clean-6k', price: 500 },
  'clean-7k': { id: 'clean-7k', price: 700 },
  'clean-8k': { id: 'clean-8k', price: 1000 },
  'clean-9k': { id: 'clean-9k', price: 0 }, // SOB ENCOMENDA
  'clean-10k': { id: 'clean-10k', price: 0 }, // SOB ENCOMENDA
  'clean-11k': { id: 'clean-11k', price: 0 }, // SOB ENCOMENDA
  'clean-12k': { id: 'clean-12k', price: 0 }, // SOB ENCOMENDA
  'clean-14k': { id: 'clean-14k', price: 0 }, // SOB ENCOMENDA

  // Contas Imortais (com smurf pool)
  'smurf-6k': { id: 'smurf-6k', price: 250 },
  'smurf-7k': { id: 'smurf-7k', price: 300 },
  'smurf-8k': { id: 'smurf-8k', price: 400 },
  'smurf-9k': { id: 'smurf-9k', price: 500 },
  'smurf-10k': { id: 'smurf-10k', price: 700 },
  'smurf-11k': { id: 'smurf-11k', price: 900 },
  'smurf-12k': { id: 'smurf-12k', price: 1300 },

  // Mentoria - Análise de Replays
  'analise-sessao-individual': { id: 'analise-sessao-individual', price: 100 },
  'analise-first-blood': { id: 'analise-first-blood', price: 230 },
  'analise-divine': { id: 'analise-divine', price: 370 },
  'analise-rampage': { id: 'analise-rampage', price: 520 },
  'analise-immortal': { id: 'analise-immortal', price: 730 },

  // Mentoria - Ao Vivo
  'aovivo-sessao-individual': { id: 'aovivo-sessao-individual', price: 100 },
  'aovivo-first-blood': { id: 'aovivo-first-blood', price: 230 },
  'aovivo-divine': { id: 'aovivo-divine', price: 370 },
  'aovivo-rampage': { id: 'aovivo-rampage', price: 520 },
  'aovivo-immortal': { id: 'aovivo-immortal', price: 730 },

  // Mentoria - Duo Ao Vivo
  'duo-sessao-individual': { id: 'duo-sessao-individual', price: 130 },
  'duo-first-blood': { id: 'duo-first-blood', price: 310 },
  'duo-divine': { id: 'duo-divine', price: 490 },
  'duo-rampage': { id: 'duo-rampage', price: 710 },
  'duo-immortal': { id: 'duo-immortal', price: 980 },

  // Jogue Comigo
  'partida-avulsa': { id: 'partida-avulsa', price: 12 },
  'pacote-10-jogos': { id: 'pacote-10-jogos', price: 100, originalPrice: 120 },
  'duo-didatico-avulso': { id: 'duo-didatico-avulso', price: 25 },
  'duo-didatico-pacote': { id: 'duo-didatico-pacote', price: 100, originalPrice: 125 },

  // Boost
  'boost-mmr': { id: 'boost-mmr', price: 0 }, // Calculado dinamicamente
  'calibrar-conta': { id: 'calibrar-conta', price: 180 },

  // Low Priority
  'low-priority-1': { id: 'low-priority-1', price: 25 },
  'low-priority-2': { id: 'low-priority-2', price: 50 },
  'low-priority-3': { id: 'low-priority-3', price: 75 },
  'low-priority-4': { id: 'low-priority-4', price: 100 },
  'low-priority-5': { id: 'low-priority-5', price: 125 },

  // Boost Behavior
  'boost-behavior-10': { id: 'boost-behavior-10', price: 50 },
  'boost-behavior-20': { id: 'boost-behavior-20', price: 100 },
  'boost-behavior-30': { id: 'boost-behavior-30', price: 150 },
  'boost-behavior-40': { id: 'boost-behavior-40', price: 200 },
  'boost-behavior-50': { id: 'boost-behavior-50', price: 250 },

  // PDFs - Funções
  'pdf-hard-carry': { id: 'pdf-hard-carry', price: 50 },
  'pdf-mid': { id: 'pdf-mid', price: 50 },
  'pdf-offlane': { id: 'pdf-offlane', price: 50 },
  'pdf-support-4': { id: 'pdf-support-4', price: 50 },
  'pdf-support-5': { id: 'pdf-support-5', price: 50 },

  // PDFs - Heróis
  'pdf-anti-mage': { id: 'pdf-anti-mage', price: 40 },
  'pdf-storm-spirit': { id: 'pdf-storm-spirit', price: 20 },

  // Custom products for sliders (price will be calculated dynamically)
  'boost-behavior-custom': { id: 'boost-behavior-custom', price: 0 },
  'low-priority-custom': { id: 'low-priority-custom', price: 0 },
};

// Função para obter preço de um produto
export const getProductPrice = (productId: string): ProductPrice | null => {
  return productPrices[productId] || null;
};

// Função para verificar se um produto existe
export const productExists = (productId: string): boolean => {
  return productId in productPrices;
};

// Função para obter todos os preços (útil para debugging)
export const getAllPrices = (): Record<string, ProductPrice> => {
  return productPrices;
};

// Função para atualizar preço (caso precise ser feito dinamicamente)
export const updateProductPrice = (productId: string, newPrice: number): void => {
  if (productPrices[productId]) {
    productPrices[productId].price = newPrice;
  }
};