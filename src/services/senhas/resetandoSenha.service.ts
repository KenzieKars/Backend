import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/errors";
import AppDataSource from "../../data-source";
import { hash } from "bcryptjs";

const resetandoSenhaService = async (
  email: string,
  token: string,
  senha: string
): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ email });

  if (!user) {
    throw new AppError("User not registered", 404);
  }

  if (token !== user.resetandoSenha) {
    console.log(token)
    throw new AppError("Invalid reset token", 400);
  }

  const now = new Date();

  if (now > user.resetandoSenhaExpirada) {
    throw new AppError("Reset token expired", 400);
  }

  await userRepository.update(user.id, {
    senha: await hash(senha, 10),
  });
};

export default resetandoSenhaService;