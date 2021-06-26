import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
    sub: string;
}
export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {

    // Receber o token
    const authToken = request.headers.authorization;
    //console.log(token);

    // Validar se token está preenchido
    if (!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");
    //console.log(token); //só para mostrar nos testes

    //verify(token, "bananananica", (err, decode))
    try {
        // Validar se token é válido
        const { sub } = verify(token, "Bananananica") as IPayload;
        //console.log(decode); // só para mostrar nos testes

        // Recuperar informações do usuário
        request.user_id = sub;

        return next();
    } catch (err) {
        return response.status(401).end();
    }


}
