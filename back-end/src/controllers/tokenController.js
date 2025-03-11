import jwt from "jsonwebtoken";

function authMiddleware(req, res, next) {
    const token = req.header("Authorization");

    if(!token){
        return res.status(401).json( { mensagem: "Acesso negado, nenhum token fornecido"});
    }

    try{
        const decoded = jwt.verify(token, "secreto");
        req.user = decoded;
        next();
    } catch(error) {
        res.status(400).json({mensagem: "Token invalido"});
    }
}

export default authMiddleware;