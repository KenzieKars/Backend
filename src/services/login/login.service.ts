import { IUserLogin } from "../../interfaces/login.interface";

import AppDataSource from "../../data-source";

import { compare } from "bcryptjs";

import "dotenv/config";

import Jwt from "jsonwebtoken";

import { AppError } from "../../errors/errors";

import { User } from "../../entities/user.entity";

const loginUserService = async ({
  email,
  senha,
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getTreeRepository(User);

  const foundUser = await userRepository.findOneBy({
    email: email,
  });

  if (!foundUser) {
    throw new AppError("Wrong email or password.", 403);
  }

  const passwordMatch = await compare(senha, foundUser.senha);

  if (!passwordMatch) {
    throw new AppError("Wrong email or password.", 403);
  }

  const token = Jwt.sign({ email: foundUser.email }, process.env.SECRET_KEY, {
    expiresIn: "24h",
    subject: String(foundUser.id),
  });
  return token;
};

export default loginUserService;
