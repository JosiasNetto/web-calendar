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
    },

    async deleteEvent(req, res) {
        const userId = req.params.userId;
        const eventId = req.params.eventId;

        try {
            const userEvent = await User.findById(userId);
            if(!userEvent){
                throw new Error("Usuario não encontrado")
            }
            console.log("Passou do user", userId)

            const event = await Event.findById(eventId);
            if(!event){
                throw new Error("Evento não encontrado")
            }

            await Event.findByIdAndDelete(eventId);

            userEvent.eventos = userEvent.eventos.filter(id => id.toString() !== eventId);
            await userEvent.save();

            res.status(200).json({mensagem: "Evento deletado com sucesso"});
        }catch(error){
            res.status(500).json({mensagem: "Erro ao deletar evento", erro: error.message })
        }
    }
}

export default EventController;