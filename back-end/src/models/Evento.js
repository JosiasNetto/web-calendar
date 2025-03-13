import mongoose from "mongoose";

const eventoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    horaInicio: { type: String, required: true },
    horaFim: { type: String, required: true},
    data:{ type: Date, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users"}
})

const eventoModel = mongoose.model("eventos", eventoSchema);

export default eventoModel;