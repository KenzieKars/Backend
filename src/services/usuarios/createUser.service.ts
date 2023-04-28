import { IUserRequest, IUserResponse } from "../../interfaces/users.interfaces";
import {User} from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import {
  userResponseSerializer
} from "../../serializers/user.serializer";
import { AppError } from "../../errors/errors"
import { IEndereco } from "../../interfaces/address.interfaces";
import { Endereco } from "../../entities/address.entity";

const createUserService = async (
  userData: IUserRequest,
  endereco: IEndereco
): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const addressRepository = AppDataSource.getRepository(Endereco);

  const userAddress: IEndereco = addressRepository.create(endereco);
  await addressRepository.save(userAddress);

  const foundUser = await userRepository.findOne({
    where: {
      email: userData.email,
    },
  });

  if (foundUser) {
    throw new AppError("User already exists.", 409);
  }

  const createUser = userRepository.create(userData);

  createUser.address = userAddress;

  await userRepository.save(createUser);

  const createdUserResponse = await userResponseSerializer.validate(
    createUser,
    {
      stripUnknown: true,
    },
  );
  
  return createdUserResponse;
  
};

export default createUserService;