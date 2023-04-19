import AppDataSource from "../../data-source";
import { Anuncio} from "../../entities/advertisement.entity";

const listAllWithUsersService = async (): Promise<Anuncio[]> => {
  const announcementRepository = AppDataSource.getRepository(Anuncio);

  const announcements = await announcementRepository.find({
    relations: { user: true },
  });

  return announcements;
};

export default listAllWithUsersService;