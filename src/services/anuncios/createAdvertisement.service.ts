import AppDataSource from "../../data-source"
import { Anuncio } from "../../entities/advertisement.entity"
import { IAdvertisementRequest, IAdvertisementResponse } from "../../interfaces/advertisement.interfaces"
import { returnAdvertisementSerializer } from "../../serializers/advertisement.serializer"

const createAdvertisementService = async (data:IAdvertisementRequest): Promise<IAdvertisementResponse>=> {
    const advertisementRepository = AppDataSource.getRepository(Anuncio)

    const createdAdvertisement = advertisementRepository.create(data)
    await advertisementRepository.save(createdAdvertisement)

    const advertisementResponse = await returnAdvertisementSerializer.validate(createdAdvertisement, {
        stripUnknown: true
    })

    return advertisementResponse
}

export default createAdvertisementService