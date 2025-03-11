import Event from "../models/Evento.js";
import User from "../models/User.js";

const EventController = {
    async registerEvent(req, res) {
        const userId = req.params.userId;
        const eventInfo = { userId, ...req.body};

        try{
            const userEvent = await User.findById(userId);
            if(userEvent){
                const newEvent = await Event.create(eventInfo);
                userEvent.eventos.push(newEvent._id);
                await userEvent.save();
                res.status(201).json({mensagem: "Evento criado com sucesso"});

            }else{
                throw new Error("Usuário não existe");
            }
        }catch(error){
            res.status(500).json({mensagem: "Erro ao criar evento", erro: error.message });
        }
    }
}

export default EventController;