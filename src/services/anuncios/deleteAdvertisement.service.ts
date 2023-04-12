import AppDataSource from "../../data-source"
import { Anuncio } from "../../entities/advertisement.entity"
import { AppError } from "../../errors/errors"


const deleteAdvertisementService = async (id: string): Promise<void> => {
    const advertisementRepository = AppDataSource.getRepository(Anuncio)

    const advertisement = await advertisementRepository.findOne({
        where: {
            id:id
        }
    })

    if(!advertisement) {
        throw new AppError("Anuncio não encontrado", 404)
    }

    await advertisementRepository.delete(advertisement.id)
    
}

export default deleteAdvertisementService