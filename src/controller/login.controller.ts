import loginUserService from "../services/login/login.service";
import {IUserLogin} from "../interfaces/login.interface"
import { Request, Response } from "express";
export const loginUserController = async (req: Request, res: Response) => {
    const userData: IUserLogin = req.body;

    const token = await loginUserService(userData);

    return res.status(200).json({token});
};