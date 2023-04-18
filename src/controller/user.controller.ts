import { Request, Response } from "express";
import { IUserRequest, IUserUpdateRequest } from "../interfaces/users.interfaces";
import createUserService from "../services/usuarios/createUser.service";
import deleteUserService from "../services/usuarios/deleteUser.service";
import listUserByIdService from "../services/usuarios/listUserById.service";
import listUsersService from "../services/usuarios/listUser.service";
import updateUserService from "../services/usuarios/updataUser.service";


const createUserController = async (req: Request, res: Response) => {
    const userData: IUserRequest = req.body;
    const newUser = await createUserService(userData);

    return res.status(201).json(newUser);
};

const listUsersController = async (req: Request, res: Response) => {
    const users = await listUsersService();

    return res.status(200).json(users);
};

const listUserByIdController = async (req: Request, res: Response) => {
    const userId: string = req.params.id;
    const userAuth : string = req.user.id;
    const users = await listUserByIdService(userId, userAuth);

    return res.status(200).json(users);
};

const updateUserController = async(req: Request, res:Response) => {
    const userData: IUserUpdateRequest = req.body;
    const userId = req.params.id;
    const updatedUser = await updateUserService(userData, userId);

    return res.json(updatedUser);
};

const deleteUserController = async (req: Request, res: Response) => {
    const userId: string = req.params.id;

    await deleteUserService(userId);

    return res.status(204).send();
};
export {  createUserController, deleteUserController, listUserByIdController, listUsersController, updateUserController };

