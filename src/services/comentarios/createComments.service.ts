import AppDataSource from "../../data-source";
import { Anuncio } from "../../entities/advertisement.entity";
import { Comentario } from "../../entities/comments.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/errors";

const createCommentService = async (
  comentario: string,
  announcementsId: string,
  userId: string
) => {
  const userRepository = AppDataSource.getRepository(User);
  const announcementRepository = AppDataSource.getRepository(Anuncio);
  const commentRepository = AppDataSource.getRepository(Comentario);

  const foundUser = await userRepository.findOneBy({ id: userId });

  if (!foundUser) {
    throw new AppError("User not found", 404);
  }

  const foundAnnouncement = await announcementRepository.findOneBy({
    id: announcementsId,
  });

  if (!foundAnnouncement) {
    throw new AppError("Announcement not found", 404);
  }

  const comment = commentRepository.create({
    comentario,
    announcements: foundAnnouncement,
    user: foundUser,
  });

  await commentRepository.save(comment);

  return comment;
};

export default createCommentService;