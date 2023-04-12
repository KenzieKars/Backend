import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { errorHandle } from "./errors/errors"
import cors from "cors"
import { advertisementRoutes } from "./routes/advertisement.routes"
import { pagination } from "typeorm-pagination"


const app = express()
app.use(express.json())
app.use(pagination)

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

app.use("/advertisement", advertisementRoutes)

app.use(errorHandle)

export default app