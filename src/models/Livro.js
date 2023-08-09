import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: String,
    titulo: {type: String, required: true},
    autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
    editora: {type: String, required: true},
    numeroPaginas: Number
})

const livros = mongoose.model('livros', livroSchema)

export default livros