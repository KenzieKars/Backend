import { IEnderecoUpdate } from "../interfaces/address.interfaces";
import { Request,Response } from "express";
import addressService from "../services/address/address.service";

const updateAddressController = async (req: Request, res: Response) => {
    const addressId = req.params.id;
    const newAddress: IEnderecoUpdate = req.body;
  
    const updateAddress = await addressService(addressId , newAddress);
  
    return res.status(200).json(updateAddress);
  };
  
  export default updateAddressController;