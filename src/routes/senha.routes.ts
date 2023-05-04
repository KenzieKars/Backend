import { Router } from "express";
import {esqueciSenhaController, resetandoSenhaController} from "../controller/senha.controller";

const senhaRoutes = Router();

senhaRoutes.post("/reset_password", resetandoSenhaController);
senhaRoutes.post("/forgot_password", esqueciSenhaController);

export default senhaRoutes;