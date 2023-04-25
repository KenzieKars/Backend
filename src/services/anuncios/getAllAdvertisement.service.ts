import AppDataSource from "../../data-source"
import { Anuncio } from "../../entities/advertisement.entity"
import { IAdvertisementRequest } from "../../interfaces/advertisement.interfaces"
import { getAdvertisementsSerializer } from "../../serializers/advertisement.serializer"


const getAllAdvertisementService = async (): Promise<IAdvertisementRequest[]> => {
    const anuncioRepositorio = AppDataSource.getRepository(Anuncio)

    const advertisement = await anuncioRepositorio.createQueryBuilder('anuncio')
        .leftJoinAndSelect('anuncio.user', 'user')
        .getMany()

    const advertisementResponse = await getAdvertisementsSerializer.validate(advertisement, {
        stripUnknown: true
    })

    return advertisement
}

export default getAllAdvertisementService