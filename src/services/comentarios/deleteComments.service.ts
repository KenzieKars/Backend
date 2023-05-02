import AppDataSource from "../../data-source";
import { Comentario } from "../../entities/comments.entity";
import { AppError } from "../../errors/errors";

const deleteCommentService = async (id: string): Promise<void> => {
  const commentRepository = AppDataSource.getRepository(Comentario);

  const foundComment = await commentRepository.findOneBy({ id });

  if (!foundComment) {
    throw new AppError("Comment not found", 404);
  }

  await commentRepository.delete({ id: id });
};

export default deleteCommentService;