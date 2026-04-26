export interface Filial {
  id: string;
  nome: string;
  cidade: string;
  estado: string;
  bairro: string;
  endereco: string;
  whatsapp: string;
  coordenadas: [number, number];
}

export const filiais: Filial[] = [
  {
    id: 'centro',
    nome: 'Imperador Centro',
    cidade: 'Curitiba',
    estado: 'PR',
    bairro: 'Centro',
    endereco: 'Av. Vicente Machado, 500',
    whatsapp: '5545999754897',
    coordenadas: [-25.4284, -49.2733],
  },
  {
    id: 'norte',
    nome: 'Imperador Norte',
    cidade: 'Curitiba',
    estado: 'PR',
    bairro: 'Boa Vista',
    endereco: 'Av. Paraná, 2340',
    whatsapp: '5545998044189',
    coordenadas: [-25.3833, -49.2333],
  },
  {
    id: 'sul',
    nome: 'Imperador Sul',
    cidade: 'Curitiba',
    estado: 'PR',
    bairro: 'Pinheirinho',
    endereco: 'Av. Winston Churchill, 1200',
    whatsapp: '5545998044190',
    coordenadas: [-25.4667, -49.3167],
  },
  {
    id: 'leste',
    nome: 'Imperador Leste',
    cidade: 'Curitiba',
    estado: 'PR',
    bairro: 'Boqueirão',
    endereco: 'Av. do Boqueirão, 890',
    whatsapp: '5545998044191',
    coordenadas: [-25.45, -49.25],
  },
  {
    id: 'oeste',
    nome: 'Imperador Oeste',
    cidade: 'Curitiba',
    estado: 'PR',
    bairro: 'Portão',
    endereco: 'Av. das Américas, 3400',
    whatsapp: '5545998044192',
    coordenadas: [-25.45, -49.3],
  },
  {
    id: 'cascavel',
    nome: 'Imperador Cascavel',
    cidade: 'Cascavel',
    estado: 'PR',
    bairro: 'Centro',
    endereco: 'Av. Brasil, 1520',
    whatsapp: '5545998044193',
    coordenadas: [-24.9557, -53.4554],
  },
  {
    id: 'cascavel-oeste',
    nome: 'Imperador Cascavel Oeste',
    cidade: 'Cascavel',
    estado: 'PR',
    bairro: 'Núcleo Urbano',
    endereco: 'Av. Tito Muffo, 850',
    whatsapp: '5545998044194',
    coordenadas: [-24.9713, -53.4918],
  },
  {
    id: 'maringa',
    nome: 'Imperador Maringá',
    cidade: 'Maringá',
    estado: 'PR',
    bairro: 'Zona 1',
    endereco: 'Av. XV de Novembro, 890',
    whatsapp: '5545998044195',
    coordenadas: [-23.4203, -51.9336],
  },
  {
    id: 'maringa-sul',
    nome: 'Imperador Maringá Sul',
    cidade: 'Maringá',
    estado: 'PR',
    bairro: 'Jardim Independência',
    endereco: 'Av. Cerro Azul, 1200',
    whatsapp: '5545998044196',
    coordenadas: [-23.4467, -51.9584],
  },
];

export const whatsappGeral = '5545998044188';