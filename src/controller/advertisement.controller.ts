import { Request, Response } from "express"
import { IAdvertisementRequest, IAdvertisementUpdate } from "../interfaces/advertisement.interfaces"
import createAdvertisementService from "../services/anuncios/createAdvertisement.service"
import getAllAdvertisementService from "../services/anuncios/getAllAdvertisement.service"
import getAdvertisementService from "../services/anuncios/getAdvertisement.service"
import deleteAdvertisementService from "../services/anuncios/deleteAdvertisement.service"
import updateAdvertisementService from "../services/anuncios/updateAdvertisement.service"


const createAdvertisementController = async (req: Request, res: Response) => {
    const anuncioData: IAdvertisementRequest = req.body
    const advertisement = await createAdvertisementService(anuncioData)
    return res.status(201).json(advertisement)
    
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

export {
    createAdvertisementController,
    getAllAdvertisementsController,
    getAdvertisementController,
    deleteAdvertisementController,
    updateAdvertisementController
}