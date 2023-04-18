import AppDataSource from "../../data-source";
import {User} from "../../entities/user.entity";
import { AppError } from "../../errors/errors";

const deleteUserService = async (userId: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const foundUserByParam = await userRepository.findOneBy({ id: userId });

  if (!foundUserByParam) {
    throw new AppError("User not found. Informed id is incorrect.", 404);
  };

  if (foundUserByParam.isActive === false) {
    throw new AppError("User already deleted.", 400);
  };

  foundUserByParam.isActive = false;
  await userRepository.save(foundUserByParam);

  return { foundUserByParam };
};

export default deleteUserService;