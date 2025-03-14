import Event from "../models/Evento.js";
import User from "../models/User.js";

const EventController = {
    async registerEvent(req, res) {
        const userId = req.user.id;
        const eventInfo = { userId, ...req.body};

        try{
            const userEvent = await User.findById(userId);
            if(userEvent){
                const newEvent = await Event.create(eventInfo);
                userEvent.eventos.push(newEvent._id);
                await userEvent.save();
                res.status(201).json({message: "Evento criado com sucesso"});

            }else{
                throw new Error("Usuário não existe");
            }
        }catch(error){
            res.status(500).json({message: "Erro ao criar evento", erro: error.message });
        }
    },

    async deleteEvent(req, res) {
        const userId = req.user.id;
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

            res.status(200).json({message: "Evento deletado com sucesso"});
        }catch(error){
            res.status(500).json({message: "Erro ao deletar evento", erro: error.message })
        }
    },

    async listEventsUser(req, res){
        const userId = req.user.id;

        try {
            const searchUser = await User.findById(userId).populate("eventos");
            if(!searchUser){
                throw new Error("Usuario não encontrado")
            }

            res.status(200).json({success: true, message: "Lista de eventos encontrada", eventos:  searchUser.eventos})
        }catch(error){
            res.status(500).json({ message: "Erro ao listar eventos do Usuario", erro: error.message })
        }
    },

    async updateEvent(req, res) {
        const eventId = req.params.eventId;

        try {
            await Event.findByIdAndUpdate(eventId, req.body);
            res.status(200).json({message: "Evento atualizado com sucesso"})
        }catch(error){
            res.status(500).json({message: "Falha ao atualizar evento"})
        }
    }
}

export default EventController;