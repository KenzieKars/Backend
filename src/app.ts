import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { errorHandle } from "./errors/errors";

const app = express()
app.use(express.json())


app.use(errorHandle)

export default app