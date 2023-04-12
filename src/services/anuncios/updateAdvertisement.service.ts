import AppDataSource from "../../data-source"
import { Anuncio } from "../../entities/advertisement.entity"
import { AppError } from "../../errors/errors"
import { IAdvertisementResponse, IAdvertisementUpdate } from "../../interfaces/advertisement.interfaces"
import { returnAdvertisementSerializer } from "../../serializers/advertisement.serializer"


const updateAdvertisementService = async (data: IAdvertisementUpdate, id:string): Promise<IAdvertisementResponse> => {
    const advertisementRepository = AppDataSource.getRepository(Anuncio)

    const advertisement = await advertisementRepository.findOne({
        where:{
            id:id
        }
    })

    if(!advertisement) {
        throw new AppError("Anuncio não encontrado", 404)
    }
    
    const updatedAdvertisement = advertisementRepository.create({
        ...advertisement,
        ...data
    })

    await advertisementRepository.save(updatedAdvertisement)

    const updatedAdvertisementResponse = await returnAdvertisementSerializer.validate(updatedAdvertisement, {
        stripUnknown: true
    })

    return updatedAdvertisementResponse
}

export default updateAdvertisementService