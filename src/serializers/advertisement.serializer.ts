import * as yup from "yup";
import {
  IAdvertisementRequest,
  IAdvertisementResponse,
  IAdvertisementUpdate,
} from "../interfaces/advertisement.interfaces";
import { SchemaOf } from "yup";

const createAdvertisementSerializer: SchemaOf<IAdvertisementRequest> = yup
  .object()
  .shape({
    marca: yup.string().required(),
    modelo: yup.string().required(),
    ano: yup.string().required(),
    combustivel: yup
      .string()
      .oneOf(["Flex", "Híbrido", "Elétrico"], "Tipo inválido de combustivel")
      .required(),
    cor: yup.string().required(),
    quilometragem: yup.number().required(),
    preco: yup.number().required(),
    descricao: yup.string().required(),
    imagens: yup.array().required(),
  });

const returnAdvertisementSerializer: SchemaOf<IAdvertisementResponse> = yup
  .object()
  .shape({
    id: yup.string(),
    marca: yup.string(),
    modelo: yup.string(),
    ano: yup.string(),
    combustivel: yup
      .string()
      .oneOf(["Flex", "Híbrido", "Elétrico"], "Tipo inválido de combustivel"),
    cor: yup.string(),
    quilometragem: yup.number(),
    preco: yup.number(),
    descricao: yup.string(),
    imagens: yup.array(),
    ativo: yup.boolean(),
    criadoEm: yup.date(),
    atualizadoEm: yup.date(),
    user: yup.object().shape({
      id: yup.string().notRequired(),
      nome: yup.string().required(),
      email: yup.string().email().required(),
      telefone: yup.string().required(),
      bio: yup.string().required(),
      imagem: yup.string().required(),
      cpf: yup.string().required(),
      aniversario: yup.string().required(),
      vendedor: yup.boolean().notRequired(),
    }),
  });

const updateAdvertisementSerializer: SchemaOf<IAdvertisementUpdate> = yup
  .object()
  .shape({
    marca: yup.string(),
    modelo: yup.string(),
    ano: yup.string(),
    combustivel: yup
      .string()
      .oneOf(["Flex", "Híbrido", "Elétrico"], "Tipo inválido de combustivel"),
    cor: yup.string(),
    quilometragem: yup.number(),
    preco: yup.number(),
    descricao: yup.string(),
    imagens: yup.array(),
  });

const getAdvertisementsSerializer = yup.array(returnAdvertisementSerializer);

export {
  createAdvertisementSerializer,
  returnAdvertisementSerializer,
  updateAdvertisementSerializer,
  getAdvertisementsSerializer,
};
