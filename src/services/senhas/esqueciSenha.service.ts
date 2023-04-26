import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/errors";
import AppDataSource from "../../data-source";
import mailer from "../../utils/mailer";
import crypto from "crypto";
import "dotenv/config";

const esqueciSenhaService = async (email: string): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ email });

  if (!user) {
    throw new AppError("User not registered", 404);
  }

  const token = crypto.randomBytes(4).toString("hex");

  const now = new Date();
  now.setHours(now.getHours() + 1);

  await userRepository.update(user.id, {
    resetandoSenha: token,
    resetandoSenhaExpirada: now,
  });

  const mailOptions = {
    from: "<kenzieKars@mail.com>",
    to: email,
    subject: "Recuperação de Senha!",
    template: "index",
    context: { token },
  };

  mailer.sendMail(mailOptions);
};

export default esqueciSenhaService;