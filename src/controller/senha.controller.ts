import { Request, Response } from "express";
import resetandoSenhaService from "../services/senhas/resetandoSenha.service";
import esqueciSenhaService from "../services/senhas/esqueciSenha.service";

const resetandoSenhaController = async (req: Request, res: Response) => {
  const { email, token, senha} = req.body;
  await resetandoSenhaService(email, token, senha);

  return res.status(200).send();
};

const esqueciSenhaController = async (req: Request, res: Response) => {
    const { email } = req.body;
    await esqueciSenhaService(email);
  
    return res.status(200).json({ message: "The email has been sent!" });
  };

export {resetandoSenhaController, esqueciSenhaController}