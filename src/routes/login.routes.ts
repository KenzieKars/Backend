import { Router } from "express";
import {loginUserController} from "../controller/login.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { userLoginSerializer } from "../serializers/user.serializer";

const loginRoutes = Router();
loginRoutes.post("",ensureDataIsValidMiddleware(userLoginSerializer), loginUserController);
export default loginRoutes;
