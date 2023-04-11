import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { errorHandle } from "./errors/errors";
import cors from "cors"
import { anuncioRoutes } from "./routes/anuncio.routes";

const app = express()
app.use(express.json())

app.use(
    cors({
      allowedHeaders: [
        "sessionId",
        "Content-Type",
        "Authorization",
        "authorization",
      ],
      origin: ["http://localhost:3000"],
      methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
    })
)

app.use("/anuncios", anuncioRoutes)

app.use(errorHandle)

export default app