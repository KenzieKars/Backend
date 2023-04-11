interface IAnuncioRequest {
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

interface IAnuncioResponse {
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

interface IAnuncioUpdate {
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
    IAnuncioRequest,
    IAnuncioResponse,
    IAnuncioUpdate
}