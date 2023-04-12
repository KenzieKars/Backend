import AppDataSource from "../../data-source"
import { Anuncio } from "../../entities/advertisement.entity"
import { AppError } from "../../errors/errors"
import { returnAdvertisementSerializer } from "../../serializers/advertisement.serializer"


const getAdvertisementService = async (id: string) => {
    const advertisementRepository = AppDataSource.getRepository(Anuncio)

    const advertisement = await advertisementRepository.findOne({
        where: {
            id: id
        }
    })

    if(!advertisement) {
        throw new AppError("Anuncio não encontrado", 404)
    }

    const advertisementResponse = await returnAdvertisementSerializer.validate(advertisement, {
        stripUnknown: true
    })

    return advertisementResponse
    
}

export default getAdvertisementService