import AppDataSource from "../../data-source";
import { Anuncio } from "../../entities/advertisement.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/errors";
import {
  IAdvertisementRequest,
  IAdvertisementResponse,
} from "../../interfaces/advertisement.interfaces";
import { returnAdvertisementSerializer } from "../../serializers/advertisement.serializer";

const createAdvertisementService = async (
  id: string,
  data: IAdvertisementRequest
): Promise<IAdvertisementResponse> => {
  const advertisementRepository = AppDataSource.getRepository(Anuncio);
  const userRepository = AppDataSource.getRepository(User);

  const userExists = await userRepository.findOneBy({ id });

  if (!userExists) {
    throw new AppError("User id not found or not exists", 404);
  }

  const { ...announcementData } = data;

  const newAnnouncement = advertisementRepository.create({
    ...announcementData,
    user: userExists,
  });

  await advertisementRepository.save(newAnnouncement);

  const advertisementResponse = await returnAdvertisementSerializer.validate(
    newAnnouncement,
    {
      stripUnknown: true,
    }
  );

  return advertisementResponse;
};

export default createAdvertisementService;
