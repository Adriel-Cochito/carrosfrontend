export type CarroStatus = 'Novo' | 'Seminovo' | 'Usado';
export interface Carro {
  id: number;
  status: CarroStatus;
  modelo: string;
  fabricante: string;
  pais: string;
  cor:string;
  ano: number;
  cavalosDePotencia: number;
}