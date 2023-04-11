import * as yup from "yup"
import { IAnuncioRequest, IAnuncioResponse, IAnuncioUpdate } from "../interfaces/anuncio.interfaces"
import { SchemaOf } from "yup"

const criarAnuncioSerializer: SchemaOf<IAnuncioRequest> = yup.object().shape({
    marca: yup.string().required(),
    modelo: yup.string().required(),
    ano: yup.string().required(),
    combustivel: yup.string().oneOf(["gasolina", "etanol"], "Tipo inválido de combustivel").required(),
    cor: yup.string().required(),
    quilometragem: yup.number().required(),
    preco: yup.number().required(),
    descricao: yup.string().required(),
    imagens: yup.array().required()
})

const retornarAnuncioSerializer: SchemaOf<IAnuncioResponse> = yup.object().shape({
    id: yup.string(),
    marca: yup.string(),
    modelo: yup.string(),
    ano: yup.string(),
    combustivel: yup.string().oneOf(["gasolina", "etanol"], "Tipo inválido de combustivel"),
    cor: yup.string(),
    quilometragem: yup.number(),
    preco: yup.number(),
    descricao: yup.string(),
    imagens: yup.array(),
    ativo: yup.boolean(),
    criadoEm: yup.date(),
    atualizadoEm: yup.date()
})

const atualizarAnuncioSerializer: SchemaOf<IAnuncioUpdate> = yup.object().shape({
    marca: yup.string(),
    modelo: yup.string(),
    ano: yup.string(),
    combustivel: yup.string().oneOf(["gasolina", "etanol"], "Tipo inválido de combustivel"),
    cor: yup.string(),
    quilometragem: yup.number(),
    preco: yup.number(),
    descricao: yup.string(),
    imagens: yup.array()
})

const listarAnunciosSerializer = yup.array(retornarAnuncioSerializer)

export {
    criarAnuncioSerializer,
    retornarAnuncioSerializer,
    atualizarAnuncioSerializer,
    listarAnunciosSerializer
}