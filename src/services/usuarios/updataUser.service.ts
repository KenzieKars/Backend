import { IUserResponse, IUserUpdateRequest } from '../../interfaces/users.interfaces'
import AppDataSource from '../../data-source'
import {User} from '../../entities/user.entity'
import { userResponseSerializer } from '../../serializers/user.serializer'
import { AppError } from '../../errors/errors'

const updateUserService = async (userData: IUserUpdateRequest, userId: string): Promise<IUserResponse> => {

    const userRepository = AppDataSource.getRepository(User);
    
     const foundUserByParam = await userRepository.findOneBy({id:userId});


    if (!foundUserByParam) {
        throw new AppError("User not found.", 404)
    };

    const {nome, email, senha, telefone, bio, imagem, cpf, aniversario, vendedor} = userData;

    if(!nome && !email && !senha && !telefone && !bio && !imagem && !cpf && !aniversario && !vendedor){
        throw new AppError("You do not have permission to change one of this values", 403)
    };

    const updatedUser = userRepository.create({
        ...foundUserByParam,
        nome: nome || foundUserByParam.nome,
        email: email || foundUserByParam.email,
        senha: senha || foundUserByParam.senha,
        telefone: telefone || foundUserByParam.telefone,
        bio: bio || foundUserByParam.bio,
        imagem: imagem || foundUserByParam.imagem,
        cpf: cpf || foundUserByParam.cpf,
        aniversario: aniversario || foundUserByParam.aniversario,
        vendedor: vendedor || foundUserByParam.vendedor,
        atualizadoEm: new Date()
    });

    await userRepository.save(updatedUser);

    const userResponse = await userResponseSerializer.validate(updatedUser, {
        stripUnknown: true
    });

    return userResponse;
};


export default updateUserService;