export interface Produto {
  id: string;
  nome: string;
  descricao: string;
  preco: string;
  imagem: string;
  categoria: string;
  features: string[];
}

export const produtos: Produto[] = [
  {
    id: 'chopp-premium',
    nome: 'Chopp Premium',
    descricao: 'O clássico chopp argentino de alta qualidade, servido gelado na pressão. Perfeito para eventos.',
    preco: 'A partir de R$ 180/unidade',
    imagem: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&h=400&fit=crop',
    categoria: 'Chopp',
    features: ['Cerveja artesanal', 'Servido na pressão', 'Copas exclusivas'],
  },
  {
    id: 'chopp-premium-plus',
    nome: 'Chopp Premium Plus',
    descricao: 'Edição especial com adicionais PREMIUM incluídos. Experience única para seu evento.',
    preco: 'A partir de R$ 250/unidade',
    imagem: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&h=400&fit=crop',
    categoria: 'Chopp',
    features: ['Cerveja artesanal premium', 'Copas personalizadas', 'Decorações temáticas'],
  },
  {
    id: 'barril-10l',
    nome: 'Barril 10L',
    descricao: 'Barril de chopp de 10 litros para eventos menores. Ideal para festas íntimas.',
    preco: 'R$ 450/barril',
    imagem: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=600&h=400&fit=crop',
    categoria: 'Barril',
    features: ['10 litros', 'Rendimento ~50 copos', 'Acabamento incluso'],
  },
  {
    id: 'barril-20l',
    nome: 'Barril 20L',
    descricao: 'Barril de chopp de 20 litros para eventos médios. O melhor custo-benefício.',
    preco: 'R$ 780/barril',
    imagem: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=600&h=400&fit=crop',
    categoria: 'Barril',
    features: ['20 litros', 'Rendimento ~100 copos', 'Acabamento incluso'],
  },
  {
    id: 'barril-30l',
    nome: 'Barril 30L',
    descricao: 'Barril gigante de 30 litros para grandes eventos.满足 grandes festas corporativas.',
    preco: 'R$ 1.050/barril',
    imagem: 'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?w=600&h=400&fit=crop',
    categoria: 'Barril',
    features: ['30 litros', 'Rendimento ~150 copos', 'Acabamento incluso'],
  },
  {
    id: 'copa-exclusiva',
    nome: 'Copa Exclusiva',
    descricao: 'Copa VIP personalizada com a marca do seu evento. Elegância em cada detalhe.',
    preco: 'R$ 15/unidade',
    imagem: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=400&fit=crop',
    categoria: 'Acessórios',
    features: ['Personalizável', 'Alta qualidade', 'Memorial do evento'],
  },
];