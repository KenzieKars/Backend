import { Router } from "express";
import { createUserController, deleteUserController, listUserByIdController, listUsersController, updateUserController,} from "../controller/user.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { loginUserController } from "../controller/login.controller";
import { userRequestSerializer, userUpdateSerializer,userLoginSerializer  } from "../serializers/user.serializer";

const userRoutes = Router();



userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userRequestSerializer),
  createUserController
);

userRoutes.get(
  "",
  ensureAuthMiddleware, 
  listUsersController
);

userRoutes.patch("/:id", ensureAuthMiddleware,  ensureDataIsValidMiddleware(userUpdateSerializer), updateUserController);
userRoutes.delete("/:id", ensureAuthMiddleware, deleteUserController);
userRoutes.get("/:id", ensureAuthMiddleware, listUserByIdController);

export default userRoutes;