import { DataSource } from "typeorm"
import path from "path"
import "dotenv/config"
import { Anuncio } from "./entities/anuncios.entity"
import { createAnuncio1681241216367 } from "./migrations/1681241216367-createAnuncio"

const AppDataSource = new DataSource(
    process.env.NODE_ENV === "test" ?
    {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"]
    } :
    {
        type: "postgres",
        host: process.env.PGHOST!,
        port: parseInt(process.env.PGPORT!),
        username: process.env.PGUSER!,
        password: process.env.PGPASSWORD!,
        database: process.env.PGDATABASE!,
        logging: true,
        synchronize: false,
        entities: [Anuncio],
        migrations: [createAnuncio1681241216367]
    }
)

export default AppDataSource