import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors"
import cors from "cors";


import { router } from "./routes";

import "./database";

const app = express();
// libera a acesso pelo front-end
app.use(cors()); // fica abilitado para todas aplicações terem acesso
// app.use(cors({
//     origin: "" // limita acesso ao determinada aplicação
// }));

app.use(express.json());

app.use(router);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof Error) {
            return response.status(400).json({
                error: err.message,
            });
        }

        return response.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });
    })


app.listen(3000, () => console.log("Server is running"));