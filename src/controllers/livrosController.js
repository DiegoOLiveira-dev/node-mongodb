import livros from "../models/livro.js";

class LivroController {

    static listarLivros = async (req, res) => {
        try {
            const retorno = await livros.find()
            res.status(200).json(retorno)
        } catch (error) {
            res.status(500).json(error)
    
        }
    }
}


// app.get('/livros/:id', (req, res) => {
//     let index = buscaLivro(Number(req.params.id))

//     res.status(200).json(livros[index])
// })

// app.post('/livros', (req, res) => {
//     const exist = livros.find((livro) => livro.id === req.body.id)

//     exist ? res.status(400).send('id ja existe')  : livros.push(req.body)

//     res.status(201).send()
// })

// app.put('/livros/:id', (req, res) => {
//     let index = buscaLivro(Number(req.params.id))

//     livros[index].titulo = req.body.titulo

//     res.status(200).json(livros[index])
// })

// app.delete('/livros/:id', (req, res) => {
//     let {id} = req.params

//     let index = buscaLivro(id)
//     livros.splice(index, 1)

//     res.send(`livro ${id}, removido com sucesso!`)

// })

export default LivroController