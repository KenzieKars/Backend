import AppDataSource from "../../data-source"
import { Anuncio } from "../../entities/anuncios.entity"
import { IAnuncioRequest, IAnuncioResponse } from "../../interfaces/anuncio.interfaces"
import { retornarAnuncioSerializer } from "../../serializers/anuncio.serializer"

const criarAnuncioService = async (data:IAnuncioRequest): Promise<IAnuncioResponse>=> {
    const anuncioRepositorio = AppDataSource.getRepository(Anuncio)

    const criarAnuncio = anuncioRepositorio.create(data)
    await anuncioRepositorio.save(criarAnuncio)

    const anuncioResponse = await retornarAnuncioSerializer.validate(criarAnuncio, {
        stripUnknown: true
    })

    return anuncioResponse
}

export default criarAnuncioService