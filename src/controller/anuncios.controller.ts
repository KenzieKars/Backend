import { Request, Response } from "express";
import { IAnuncioRequest, IAnuncioUpdate } from "../interfaces/anuncio.interfaces";
import criarAnuncioService from "../services/anuncios/criarAnuncio.service";
import listarTodosAnunciosService from "../services/anuncios/listarTodosAnuncios.service";
import listarAnuncioService from "../services/anuncios/listarAnuncio.service";
import deletarAnuncioService from "../services/anuncios/deletarAnuncio.service";
import atualizarAnuncioService from "../services/anuncios/atualizarAnuncio.service";







const criarAnuncioController = async (req: Request, res: Response) => {
    const anuncioData: IAnuncioRequest = req.body
    const anuncio = await criarAnuncioService(anuncioData)
    return res.status(201).json(anuncio)
    
}

const listarTodosAnunciosController = async (req: Request, res: Response) => {
    const anuncios = await listarTodosAnunciosService()
    return res.status(200).json(anuncios)    
}

const listarAnuncioController = async (req: Request, res: Response) => {
    const id: string = req.params.id
    const anuncio = await listarAnuncioService(id)
    return res.status(200).json(anuncio)
    
}

const deletarAnuncioController = async (req: Request, res: Response) => {
    const id: string = req.params.id
    await deletarAnuncioService(id)
    return res.status(204).json()
    
}

const atualizarAnuncioController = async (req: Request, res: Response) => {
    const data: IAnuncioUpdate = req.body
    const id: string = req.params.id
    const anuncio = await atualizarAnuncioService(data, id)
    return res.status(200).json(anuncio)
    
}

export {
    criarAnuncioController,
    listarTodosAnunciosController,
    listarAnuncioController,
    deletarAnuncioController,
    atualizarAnuncioController
}