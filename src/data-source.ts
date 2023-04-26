import { DataSource, DataSourceOptions } from "typeorm"
import path from "path"
import "dotenv/config"
import { Anuncio } from "./entities/advertisement.entity"
import { User } from "./entities/user.entity"
import { Migration1682367567168 } from "./migrations/1682367567168-migration"


const setDataSourceConfig = (): DataSourceOptions => {
  
    const nodeEnv = process.env.NODE_ENV

    if(nodeEnv === "production"){
        return {
            type: "postgres",
            url: process.env.DATABASE_URL,
            entities: [Anuncio,User],
            migrations: [Migration1682367567168],
        }
    }

    if(nodeEnv === "test"){
        return {
            type: "sqlite",
            database: ":memory:",
            synchronize: true,
            entities: [Anuncio],
        }
    }

    return {
        type: "postgres",
        host: process.env.PGHOST,
        port: parseInt(process.env.PGPORT!),
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        logging: true,
        synchronize: false,
        entities: [Anuncio,User],
        migrations: [Migration1682367567168]
    }
}

const dataSourceConfig = setDataSourceConfig()

export default new DataSource(dataSourceConfig)