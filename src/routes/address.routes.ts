import { Router } from "express";
import addressController from "../controller/address.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const addressRoutes = Router();

addressRoutes.patch("/:id", ensureAuthMiddleware, addressController);

export default addressRoutes;