import * as yup from 'yup';
import { SchemaOf } from 'yup';
import {
	IUserRequest,
	IUserResponse,
	IUserUpdateRequest,
} from '../interfaces/users.interfaces';
import { IUserLogin } from '../interfaces/login.interface';

const userRequestSerializer: SchemaOf<IUserRequest> = yup.object().shape({
	nome: yup.string().required(),
	email: yup.string().email().required(),
	senha: yup.string().required(),
	telefone: yup.string().required(),
	bio: yup.string().required(),
	imagem: yup.string().required(),
	cpf: yup.string().required(),
	aniversario: yup.string().required(),
	vendedor: yup.boolean().notRequired(),
	address: yup.object().shape({
		estado: yup.string().required(),
		cep: yup.string().required(),
		numero: yup.number(),
		cidade: yup.string().required(),
		rua: yup.string().required(),
		id: yup.string().notRequired(),
		complemento: yup.string().required(),
	}),
});

const userResponseSerializer: SchemaOf<IUserResponse> = yup.object().shape({
	id: yup.string().notRequired(),
	nome: yup.string().required(),
	email: yup.string().email().required(),
	senha: yup.string().required(),
	telefone: yup.string().required(),
	bio: yup.string().required(),
	imagem: yup.string().required(),
	cpf: yup.string().required(),
	isActive: yup.boolean().notRequired(),
	aniversario: yup.string().required(),
	vendedor: yup.boolean().notRequired(),
	address: yup.object().shape({
		estado: yup.string().required(),
		cep: yup.string().required(),
		numero: yup.number(),
		cidade: yup.string().required(),
		rua: yup.string().required(),
		id: yup.string().notRequired(),
		complemento: yup.string().required(),
	}),
});

const userUpdateSerializer: SchemaOf<IUserUpdateRequest> = yup.object().shape({
	nome: yup.string().required(),
	email: yup.string().email().required(),
	telefone: yup.string().required(),
	bio: yup.string().required(),
	cpf: yup.string().required(),
	aniversario: yup.string().required(),
	vendedor: yup.boolean().notRequired(),
});

const userLoginSerializer: SchemaOf<IUserLogin> = yup.object().shape({
	email: yup.string().email().notRequired(),
	senha: yup.string().notRequired(),
});

const userResponseSerializerArray: SchemaOf<IUserResponse[]> = yup.array(
	userResponseSerializer
);

// const userWithNameAndIdSerializer: SchemaOf<IUserWithNameAndId> = yup.object().shape({
//   id: yup.string(),
//   name: yup.string(),
// });

// const userUpdateSchema: SchemaOf<IUserUpdateRequest> = yup.object().shape({
//   name: yup.string().notRequired(),
//   email: yup.string().email().notRequired(),
//   password: yup.string().notRequired()
// })

export {
	userResponseSerializer,
	userResponseSerializerArray,
	userRequestSerializer,
	userUpdateSerializer,
	userLoginSerializer,
};
