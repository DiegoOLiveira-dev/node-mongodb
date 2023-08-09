import autores from "../models/Autor.js";

class AutorController {
  static listarAutores = async (req, res) => {
    try {
      const retorno = await autores.find();
      res.status(200).json(retorno);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  static listarAutoresPorId = async (req, res) => {
    try {
      const id = req.params.id
      const retorno = await autores.findById(id);
      res.status(200).json(retorno);
    } catch (error) {
      res.status(500).json(error.message);
    }
  };

  static cadastrarAutor = async (req, res) => {
    try {
      let livro = new autores(req.body);
      await livro.save();
      res.status(200).send(livro.toJSON());
    } catch (err) {
        res.status(500)
        .send({ message: `${err.message} - Falha ao cadastrar livro.` });
    }
  };

  static atualizarAutor = async (req, res) => {

      try {
        const id = req.params.id
        await autores.findByIdAndUpdate(id, {$set: req.body})
        res.status(200).send({message: 'Autor atualizado com sucesso'})

      } catch (err) {
        res.status(500).send({message: err.message})

      }
    }

    static excluirAutor = async (req, res) => {

      try {
        const id = req.params.id
        await autores.findByIdAndDelete(id)
        res.status(200).send({message: 'Autor removido com sucesso'})

      } catch (err) {
        res.status(500).send({message: err.message})

      }
    }
}


// app.delete('/autores/:id', (req, res) => {
//     let {id} = req.params

//     let index = buscaAutor(id)
//     autores.splice(index, 1)

//     res.send(`livro ${id}, removido com sucesso!`)

// })

export default AutorController;
