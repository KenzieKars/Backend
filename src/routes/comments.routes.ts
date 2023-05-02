import { Router } from "express";
import {
  createCommentController,
  deleteCommentController,
  listCommentController,
  updateCommentController,
} from "../controller/comments.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import verifyCommentProperty from "../middlewares/verifyCommentProperty";


export const commentsRoutes = Router();

commentsRoutes.post("/:id", ensureAuthMiddleware, createCommentController);
commentsRoutes.get("/:id", listCommentController);
commentsRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  verifyCommentProperty,
  updateCommentController
);
commentsRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  verifyCommentProperty,
  deleteCommentController
);
