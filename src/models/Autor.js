import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
    {
        id: String,
        nome: {type: String, required: true},
        nacionalidade: String

    },
    {
        versionKey: false
    }
)

const autores = mongoose.model("autores", autorSchema)

export default autores