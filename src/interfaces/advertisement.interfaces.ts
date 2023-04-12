interface IAdvertisementRequest {
    marca: string
    modelo: string
    ano: string
    combustivel: string
    cor: string
    quilometragem: number
    preco: number
    descricao: string
    imagens: string[]
}

interface IAdvertisementResponse {
    id: string,
    marca: string
    modelo: string
    ano: string
    combustivel: string
    cor: string
    quilometragem: number
    preco: number
    descricao: string
    imagens: string[]
}

interface IAdvertisementUpdate {
    marca?: string
    modelo?: string
    ano?: string
    combustivel?: string
    cor?: string
    quilometragem?: number
    preco?: number
    descricao?: string
    imagens?: string[]
}

export {
    IAdvertisementRequest,
    IAdvertisementResponse,
    IAdvertisementUpdate
}