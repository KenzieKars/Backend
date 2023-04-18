import AppDataSource from "../../data-source";
import {User} from "../../entities/user.entity";
import { AppError } from "../../errors/errors";
    
const listUserByIdService = async (userId:string, userAuth: string
    ) => {
    const userRepository = AppDataSource.getRepository(User);
    const foundUserByParam = await userRepository.findOneBy({id:userId});

    if (!foundUserByParam) {
        throw new AppError("User not found", 404);
      }

    return {foundUserByParam};
}

export default listUserByIdService;