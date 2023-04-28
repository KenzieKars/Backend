import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { errorHandle } from "./errors/errors"
import cors from "cors"
import { advertisementRoutes } from "./routes/advertisement.routes"
import { pagination } from "typeorm-pagination"
import userRoutes from "./routes/user.routes"
import loginRoutes from "./routes/login.routes"
import senhaRoutes from "./routes/senha.routes"
import addressRoutes from "./routes/address.routes"


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
      origin: ["http://localhost:3001"],
      methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
    })
)

app.use("/advertisement", advertisementRoutes)
app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/senha", senhaRoutes);
app.use("/address", addressRoutes)

app.use(errorHandle)

export default app