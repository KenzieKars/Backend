import AppDataSource from "../../data-source";
import { Comentario } from "../../entities/comments.entity";
import { AppError } from "../../errors/errors";

const listCommentService = async (id: string): Promise<Comentario[]> => {
  const commentRepository = AppDataSource.getRepository(Comentario);

  const foundComment = await commentRepository.find({
    relations: { announcements: true, user: true },
  });

  const commentList = foundComment.filter(
    (comentario) => comentario.announcements.id === id
  );

  if (!commentList) {
    throw new AppError("comment not found", 404);
  }

  return commentList;
};

export default listCommentService;