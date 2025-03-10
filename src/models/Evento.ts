import mongoose from "mongoose";

const eventoSchema = new mongoose.Schema({
    descricao: { type: String, required: true },
    horaInicio: { type: String, required: true },
    horaFim: { type: String, required: true},
    data:{ type: Date, required: true },
})

const eventoModel = mongoose.model("Users", eventoSchema);

export default eventoModel;