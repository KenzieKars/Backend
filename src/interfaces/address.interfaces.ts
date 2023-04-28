export interface IEndereco {
    id: string;
    cep: string;
    estado: string;
    cidade: string;
    rua: string;
    numero: number;
    complemento: string;
  }
  
  export interface IEnderecoUpdate {
    id?: string;
    cep?: string;
    estado?: string;
    cidade?: string;
    rua?: string;
    numero?: number;
    complemento?: string;
  }