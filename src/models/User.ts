import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true},
    data:{ type: Date, default: Date.now },
    eventos: [ { type: mongoose.Schema.Types.ObjectId, ref: "eventos" } ]
})

const userModel = mongoose.model("Users", userSchema);

export default userModel;