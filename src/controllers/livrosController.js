import livros from "../models/livro.js";

class LivroController {
  static listarLivros = async (req, res) => {
    try {
      const retorno = await livros.find().populate('autor').exec();
      res.status(200).json(retorno);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  static listarLivrosPorId = async (req, res) => {
    try {
      const id = req.params.id
      const retorno = await livros.findById(id).populate('autor', 'nome').exec();
      res.status(200).json(retorno);
    } catch (error) {
      res.status(500).json(error.message);
    }
  };

  static cadastrarLivro = async (req, res) => {
    try {
      let livro = new livros(req.body);
      await livro.save();
      res.status(200).send(livro.toJSON());
    } catch (err) {
        res.status(500)
        .send({ message: `${err.message} - Falha ao cadastrar livro.` });
    }
  };

  static atualizarLivro = async (req, res) => {

      try {
        const id = req.params.id
        await livros.findByIdAndUpdate(id, {$set: req.body})
        res.status(200).send({message: 'Livro atualizado com sucesso'})

      } catch (err) {
        res.status(500).send({message: err.message})

      }
    }

    static excluirLivro = async (req, res) => {

      try {
        const id = req.params.id
        await livros.findByIdAndDelete(id)
        res.status(200).send({message: 'Livro removido com sucesso'})

      } catch (err) {
        res.status(500).send({message: err.message})

      }
    }

    static listarLivroPorEditora = async (req, res) => {

      try {
        const editora = req.query.editora
        let retorno = await livros.find({'editora': editora}, {})
        res.status(200).json(retorno)
      } catch (error) {
        res.status(500).send({message: error.message})
      }
    }
}


// app.delete('/livros/:id', (req, res) => {
//     let {id} = req.params

//     let index = buscaLivro(id)
//     livros.splice(index, 1)

//     res.send(`livro ${id}, removido com sucesso!`)

// })

export default LivroController;
