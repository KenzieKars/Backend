import { Router } from "express"
import { createAdvertisementController, getAllAdvertisementsController, getAdvertisementController, deleteAdvertisementController, updateAdvertisementController, listAllWithUsersController } from "../controller/advertisement.controller"
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware"
import { createAdvertisementSerializer } from "../serializers/advertisement.serializer"
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware"


export const advertisementRoutes = Router()

advertisementRoutes.post("",ensureAuthMiddleware,ensureDataIsValidMiddleware(createAdvertisementSerializer),createAdvertisementController)

advertisementRoutes.get("", getAllAdvertisementsController)

advertisementRoutes.get("/:id", getAdvertisementController)

advertisementRoutes.delete("/:id",ensureAuthMiddleware, deleteAdvertisementController)

advertisementRoutes.patch("/:id",ensureAuthMiddleware, updateAdvertisementController)

advertisementRoutes.get("/users/:id", listAllWithUsersController)