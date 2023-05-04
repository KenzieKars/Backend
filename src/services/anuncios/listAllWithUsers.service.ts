import AppDataSource from "../../data-source";
import { Anuncio } from "../../entities/advertisement.entity";

import { AppError } from "../../errors/errors";

const listAllUserAnnouncementsService = async (
  id: string
): Promise<Anuncio[]> => {
  const announcementRepository = AppDataSource.getRepository(Anuncio);

  const findAnnouncement = await announcementRepository.find({
    where: { user: { id } },
    relations: { user: true },
  });

  if (!findAnnouncement) {
    throw new AppError("User not found or not exists", 404);
  }

  return findAnnouncement;
};

export default listAllUserAnnouncementsService;