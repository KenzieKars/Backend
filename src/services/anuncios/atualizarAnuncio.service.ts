import AppDataSource from "../../data-source";
import { Anuncio } from "../../entities/anuncios.entity";
import { AppError } from "../../errors/errors";
import { IAnuncioResponse, IAnuncioUpdate } from "../../interfaces/anuncio.interfaces";
import { retornarAnuncioSerializer } from "../../serializers/anuncio.serializer";




const atualizarAnuncioService = async (data: IAnuncioUpdate, id:string): Promise<IAnuncioResponse> => {
    const anuncioRepositorio = AppDataSource.getRepository(Anuncio)

    const anuncio = await anuncioRepositorio.findOne({
        where:{
            id:id
        }
    })

    if(!anuncio) {
        throw new AppError("Anuncio não encontrado", 404)
    }
    
    const anuncioAtualizado = anuncioRepositorio.create({
        ...anuncio,
        ...data
    })

    await anuncioRepositorio.save(anuncioAtualizado)

    const anuncioAtualizadoResponse = await retornarAnuncioSerializer.validate(anuncioAtualizado, {
        stripUnknown: true
    })

    return anuncioAtualizadoResponse
}

export default atualizarAnuncioService