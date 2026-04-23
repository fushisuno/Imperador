export interface Filial {
  id: string;
  nome: string;
  cidade: string;
  estado: string;
  whatsapp: string;
  coordenadas: [number, number];
}

export const filiais: Filial[] = [
  {
    id: 'cascavel',
    nome: 'Imperador do Chopp - Cascavel',
    cidade: 'Cascavel',
    estado: 'PR',
    whatsapp: '5599999999999',
    coordenadas: [-24.9573, -53.4630],
  },
  {
    id: 'toledo',
    nome: 'Imperador do Chopp - Toledo',
    cidade: 'Toledo',
    estado: 'PR',
    whatsapp: '5599888888888',
    coordenadas: [-24.7136, -53.7432],
  },
  {
    id: 'maringa',
    nome: 'Imperador do Chopp - Maringá',
    cidade: 'Maringá',
    estado: 'PR',
    whatsapp: '5599777777777',
    coordenadas: [-23.5703, -51.9905],
  },
];

export const whatsappGeral = '5599111111111';