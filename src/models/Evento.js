import mongoose from "mongoose";

const eventoSchema = new mongoose.Schema({
    descricao: { type: String, required: true },
    horaInicio: { type: String, required: true },
    horaFim: { type: String, required: true},
    data:{ type: Date, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users"}
})

const eventoModel = mongoose.model("Eventos", eventoSchema);

export default eventoModel;