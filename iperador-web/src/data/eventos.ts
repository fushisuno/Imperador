export interface Evento {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
  categoria: string;
  data: string;
}

export const eventos: Evento[] = [
  {
    id: '1',
    titulo: 'Casamento no Jardins',
    descricao: 'Chopp premium para 150 convidados com serviço completo',
    imagem: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop',
    categoria: 'Casamento',
    data: '15/03/2024',
  },
  {
    id: '2',
    titulo: 'Festa Corporativa',
    descricao: 'Evento empresarial com 200 colaboradores',
    imagem: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop',
    categoria: 'Corporativo',
    data: '22/03/2024',
  },
  {
    id: '3',
    titulo: 'Aniversário de 30 anos',
    descricao: 'Celebração íntima com família e amigos',
    imagem: 'https://images.unsplash.com/photo-1530103862676-de3c9a59af38?w=600&h=400&fit=crop',
    categoria: 'Aniversário',
    data: '28/03/2024',
  },
  {
    id: '4',
    titulo: 'Bodas de Ouro',
    descricao: '50 anos de casamento celebração especial',
    imagem: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop',
    categoria: 'Bodas',
    data: '05/04/2024',
  },
  {
    id: '5',
    titulo: 'Formatura Universitária',
    descricao: 'Confraternização de formandos',
    imagem: 'https://images.unsplash.com/photo-1523580494863-6f3031224c14?w=600&h=400&fit=crop',
    categoria: 'Formatura',
    data: '12/04/2024',
  },
  {
    id: '6',
    titulo: 'Churrasco Empresarial',
    descricao: 'Integração de equipe com churrasco e chopp',
    imagem: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop',
    categoria: 'Corporativo',
    data: '20/04/2024',
  },
];