import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Comentario } from "../entities/comments.entity";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/errors";

const verifyCommentProperty = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.user;
  const comentarioId = req.params.id;
  const userRepository = AppDataSource.getRepository(User);
  const userExist = await userRepository.findOneBy({ id });

  const commentRepository = AppDataSource.getRepository(Comentario);
  const foundComment = await commentRepository.findOne({
    where: { id: comentarioId },
    relations: { user: true },
  });

  if (userExist?.id !== foundComment?.user.id) {
    throw new AppError("Not authorized", 401);
  }

  return next();
};

export default verifyCommentProperty;