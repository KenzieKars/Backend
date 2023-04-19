export interface IUserRequest {
    nome: string
    email: string              
    telefone:string
    bio:string
    imagem:string
    cpf:string
    aniversario:string
    vendedor?: boolean;
}

export interface IUserResponse {
    id:string
    nome: string
    email: string
    senha: string
    telefone:string
    bio:string
    imagem:string
    cpf:string
    aniversario:string
    isActive: boolean;
    vendedor?: boolean;
}

export interface IUserUpdateRequest {
    nome?: string
    email?: string
    senha?: string
    telefone?:string
    bio?:string
    imagem?:string
    cpf?:string
    aniversario?:string
    vendedor?: boolean;
};