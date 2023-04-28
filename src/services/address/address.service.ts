import AppDataSource from "../../data-source";
import { AppError } from "../../errors/errors";
import { IEndereco, IEnderecoUpdate } from "../../interfaces/address.interfaces";
import { Endereco } from "../../entities/address.entity";

const addressService = async (
  id: string,
  endereco: IEnderecoUpdate
): Promise<IEndereco> => {
  const addressRepository = AppDataSource.getRepository(Endereco);
  const findAddress = await addressRepository.findOneBy({ id });

  if (!findAddress) {
    throw new AppError("Address not found", 404);
  }

  await addressRepository.update(id, {
    cep: endereco.cep ? endereco.cep : findAddress.cep,
    estado: endereco.estado ? endereco.estado: findAddress.estado,
    cidade: endereco.cidade ? endereco.cidade : findAddress.cidade,
    rua: endereco.rua ? endereco.rua : findAddress.rua,
    numero: endereco.numero ? endereco.numero : findAddress.numero,
    complemento: endereco.complemento
      ? endereco.complemento
      : findAddress.complemento,
  });
  const updatedAddress = await addressRepository.findOneBy({
    id,
  });

  return updatedAddress!;
};

export default addressService;