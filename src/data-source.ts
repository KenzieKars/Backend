import { DataSource, DataSourceOptions } from 'typeorm';
import path from 'path';
import 'dotenv/config';
import { Anuncio } from './entities/advertisement.entity';
import { User } from './entities/user.entity';
import { Endereco } from './entities/address.entity';
import { Comentario } from './entities/comments.entity';
import {Migration1683637780895} from './migrations/1683637780895-migration'

const setDataSourceConfig = (): DataSourceOptions => {
	const nodeEnv = process.env.NODE_ENV;

	if (nodeEnv === 'production') {
		return {
			type: 'postgres',
			url: process.env.DATABASE_URL,
			entities: [Anuncio, User, Endereco,Comentario],
			migrations: [Migration1683637780895] ,
		};
	}

	if (nodeEnv === 'test') {
		return {
			type: 'sqlite',
			database: ':memory:',
			synchronize: true,
			entities: [Anuncio],
		};
	}

	return {
		type: 'postgres',
		host: process.env.PGHOST,
		port: parseInt(process.env.PGPORT!),
		username: process.env.PGUSER,
		password: process.env.PGPASSWORD,
		database: process.env.PGDATABASE,
		logging: true,
		synchronize: false,
		entities: [Anuncio, User, Endereco,Comentario],
		migrations: [Migration1683637780895],
	};
};

const dataSourceConfig = setDataSourceConfig();

export default new DataSource(dataSourceConfig);
