import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import createCommentService from "../services/comentarios/createComments.service";
import deleteCommentService from "../services/comentarios/deleteComments.service";
import listCommentService from "../services/comentarios/listComments.service";
import updateCommentService from "../services/comentarios/updateComments.service";

const createCommentController = async (req: Request, res: Response) => {
  const data = req.body.comentario;
  const announcements = req.params.id;
  const { id } = req.user;

  const comment = await createCommentService(data, announcements, id);

  return res.status(201).json(instanceToPlain(comment));
};

const deleteCommentController = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    await deleteCommentService(id);
  
    return res.status(204).send();
};

  const listCommentController = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    const comment = await listCommentService(id);
  
    return res.status(200).json(instanceToPlain(comment));
};  

const updateCommentController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const newComment: string = req.body.comentario;
  
    const updateComment = await updateCommentService(id, newComment);
  
    return res.status(200).json(updateComment);
};

export{updateCommentController,listCommentController,deleteCommentController,createCommentController}