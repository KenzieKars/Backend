import AppDataSource from "../../data-source"
import { Anuncio } from "../../entities/anuncios.entity"
import { AppError } from "../../errors/errors"
import { retornarAnuncioSerializer } from "../../serializers/anuncio.serializer"



const listarAnuncioService = async (id: string) => {
    const anuncioRepositorio = AppDataSource.getRepository(Anuncio)

    const anuncio = await anuncioRepositorio.findOne({
        where: {
            id: id
        }
    })

    if(!anuncio) {
        throw new AppError("Anuncio não encontrado", 404)
    }

    const anuncioResponse = await retornarAnuncioSerializer.validate(anuncio, {
        stripUnknown: true
    })

    return anuncioResponse
    
}

export default listarAnuncioService