import { Request, Response } from "express";
import listAllWithUsersService from"../services/anuncios/listAllWithUsers.service"
import { IAdvertisementRequest, IAdvertisementUpdate } from "../interfaces/advertisement.interfaces"
import createAdvertisementService from "../services/anuncios/createAdvertisement.service"
import getAllAdvertisementService from "../services/anuncios/getAllAdvertisement.service"
import getAdvertisementService from "../services/anuncios/getAdvertisement.service"
import deleteAdvertisementService from "../services/anuncios/deleteAdvertisement.service"
import updateAdvertisementService from "../services/anuncios/updateAdvertisement.service"
import { instanceToPlain } from "class-transformer";
import jwt_decode from "jwt-decode";


const createAdvertisementController = async (req: Request, res: Response) => {
    const data: IAdvertisementRequest = req.body;
    let token = req.headers.authorization.replace("Bearer ", "")
    let decoded:any = jwt_decode(token)
    const { id } = decoded.sub;
    const announcement = await createAdvertisementService(decoded.sub, data);
  
    return res.status(201).json(instanceToPlain(announcement));
    
}

const getAllAdvertisementsController = async (req: Request, res: Response) => {
    const advertisements = await getAllAdvertisementService()
    return res.status(200).json(advertisements)    
}

const getAdvertisementController = async (req: Request, res: Response) => {
    const id: string = req.params.id
    const advertisement = await getAdvertisementService(id)
    return res.status(200).json(advertisement)
    
}

const deleteAdvertisementController = async (req: Request, res: Response) => {
    const id: string = req.params.id
    await deleteAdvertisementService(id)
    return res.status(204).json()
    
}

const updateAdvertisementController = async (req: Request, res: Response) => {
    const data: IAdvertisementUpdate = req.body
    const id: string = req.params.id
    const advertisement = await updateAdvertisementService(data, id)
    return res.status(200).json(advertisement)
    
}



const listAllWithUsersController = async (
    req: Request,
    res: Response
  ) => {
    const { id } = req.params;
    const listUser = await listAllWithUsersService(id);
  
    return res.status(200).json(instanceToPlain(listUser));
  };
  
  export default listAllWithUsersController;

export {
    createAdvertisementController,
    getAllAdvertisementsController,
    getAdvertisementController,
    deleteAdvertisementController,
    updateAdvertisementController,
    listAllWithUsersController
}