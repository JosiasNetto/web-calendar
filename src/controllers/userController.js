import bcrypt from "bcrypt";
import User from "../models/User.js";
import  jwt from "jsonwebtoken";

const UserController = {

    async registerUser(req, res) {
        const { nome , email, senha } = req.body;
        try{
            const existingUser = await User.findOne({ email });
            if(existingUser){
                return res.status(400).json({ mensagem: "Usuario ja existe"})
            }

            const hashedPassword = await bcrypt.hash(req.body.senha, 10)
            const objNewUser = {
                nome: req.body.nome,
                email: req.body.email,
                senhaHash: hashedPassword
            }

            await User.create(objNewUser);
            res.status(201).json({ message: "Usuário cadastrado com sucesso" })
        }catch(erro){
            console.error("Erro ao cadastrar usuário:", erro);
            res.status(500).json({ message: "Falha ao cadastrar usuário"})
        }
    },

    async loginUser(req, res) {
        const { email , senha } = req.body;

        try{
            const userExist = await User.findOne({ email });
            if(!userExist){
                return res.status(400).json({ mensagem: "Usuario não encontrado" });
            }
            if( !await bcrypt.compare(senha, userExist.senhaHash)){
                return res.status(400).json({ mensagem: "Senha incorreta" });
            }
            const token = jwt.sign({ id: userExist._id }, "secreto", { expiresIn: "1h"});
            res.status(200).json({ token })
        }catch(erro){
            res.status(500).json({mensagem: "Erro ao fazer login", erro})
        }
    }
}

export default UserController;