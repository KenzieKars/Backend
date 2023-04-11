import AppDataSource from "../../data-source";
import { Anuncio } from "../../entities/anuncios.entity";
import { IAnuncioRequest } from "../../interfaces/anuncio.interfaces";
import { listarAnunciosSerializer } from "../../serializers/anuncio.serializer";



const listarTodosAnunciosService = async (): Promise<IAnuncioRequest[]> => {
    const anuncioRepositorio = AppDataSource.getRepository(Anuncio)

    const anuncios = await anuncioRepositorio.find()

    const anunciosReturn = await listarAnunciosSerializer.validate(anuncios, {
        stripUnknown: true
    })

    return anunciosReturn
    
}

export default listarTodosAnunciosService