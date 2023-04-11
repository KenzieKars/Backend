import AppDataSource from "../../data-source"
import { Anuncio } from "../../entities/anuncios.entity"
import { AppError } from "../../errors/errors"



const deletarAnuncioService = async (id: string): Promise<void> => {
    const anuncioRepositorio = AppDataSource.getRepository(Anuncio)

    const anuncio = await anuncioRepositorio.findOne({
        where: {
            id:id
        }
    })

    if(!anuncio) {
        throw new AppError("Anuncio não encontrado", 404)
    }

    await anuncioRepositorio.delete(anuncio.id)
    
}

export default deletarAnuncioService