import { Router } from "express"
import { createAdvertisementController, getAllAdvertisementsController, getAdvertisementController, deleteAdvertisementController, updateAdvertisementController } from "../controller/advertisement.controller"
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware"
import { createAdvertisementSerializer } from "../serializers/advertisement.serializer"


export const advertisementRoutes = Router()

advertisementRoutes.post("",ensureDataIsValidMiddleware(createAdvertisementSerializer),createAdvertisementController)

advertisementRoutes.get("", getAllAdvertisementsController)

advertisementRoutes.get("/:id", getAdvertisementController)

advertisementRoutes.delete("/:id", deleteAdvertisementController)

advertisementRoutes.patch("/:id", updateAdvertisementController)