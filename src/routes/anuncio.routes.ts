import { Router } from "express"
import { atualizarAnuncioController, criarAnuncioController, deletarAnuncioController, listarAnuncioController, listarTodosAnunciosController } from "../controller/anuncios.controller"
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware"
import { criarAnuncioSerializer } from "../serializers/anuncio.serializer"


export const anuncioRoutes = Router()

anuncioRoutes.post("",ensureDataIsValidMiddleware(criarAnuncioSerializer),criarAnuncioController)

anuncioRoutes.get("", listarTodosAnunciosController)

anuncioRoutes.get("/:id", listarAnuncioController)

anuncioRoutes.delete("/:id", deletarAnuncioController)

anuncioRoutes.patch("/:id", atualizarAnuncioController)