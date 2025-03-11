import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senhaHash: { type: String, required: true},
    data:{ type: Date, default: Date.now },
    eventos: [ { type: mongoose.Schema.Types.ObjectId, ref: "eventos" } ]
})

const userModel = mongoose.model("users", userSchema);

export default userModel;