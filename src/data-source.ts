import { DataSource, DataSourceOptions } from "typeorm"
import path from "path"
import "dotenv/config"
import { Anuncio } from "./entities/advertisement.entity"
import { createAnuncio1681241216367 } from "./migrations/1681241216367-createAnuncio"

const setDataSourceConfig = (): DataSourceOptions => {
  
    const nodeEnv = process.env.NODE_ENV

    if(nodeEnv === "production"){
        return {
            type: "postgres",
            url: process.env.DATABASE_URL,
            entities: [Anuncio],
            migrations: [createAnuncio1681241216367],
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
        entities: [Anuncio],
        migrations: [createAnuncio1681241216367]
    }
}

const dataSourceConfig = setDataSourceConfig()

export default new DataSource(dataSourceConfig)