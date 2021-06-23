import express, { request, response } from "express";

// @types/express
const app = express();

/**
 * GET      => Buscar uma informação
 * POST     => Inserir ou criat uma informação
 * PUT      => Alterar uma infomação
 * DELETE   => Remover um dadp
 * PATCH    => Alterar uma informação específica
 */

/**
 * Tipos de parâmetros
 * Routes Params    => http://localhost:3000/produtos/24835722893472
 * Query Params     => http://localhost:3000/produtos?name=teclado&description=tecladobom&
 * Body Params      => {
 *  "name": "teclado",
 *  "description": "teclado bom"
 * }
 */

app.get("/test", (request, response) => {
    // Request => Entrando
    // Response => saindo
    return response.send("Olá NLW");
});

app.post("/test-post", (request, response) => {
    return response.send("Olá NLW método post");
})

// http://localhoest:3000
app.listen(3000, () => console.log("Server is running"));

