import AppDataSource from "../../data-source";
import { Comentario } from "../../entities/comments.entity";
import { AppError } from "../../errors/errors";

const updateCommentService = async (
  id: string,
  comentario: string,
  editado: boolean
): Promise<Comentario> => {
  const commentRepository = AppDataSource.getRepository(Comentario);
  const foundComment = await commentRepository.findOneBy({ id });
  if (!foundComment) {
    throw new AppError("Comment not found", 404);
  }

  await commentRepository.update(id, {
    comentario: comentario ? comentario : foundComment.comentario,
    created_at: new Date(),
    editado: true
  });

  const newComment = await commentRepository.findOneBy({ id });

  return newComment!;
};

export default updateCommentService;