const Controller = require("./Controller.js");
const PessoaServices = require("../services/PessoaServices.js");

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }

  async pegaMatriculasAtivas(req, res) {
    const { estudanteid } = req.params;

    try {
      const listaMatriculas =
        await pessoaServices.pegaMatriculasAtivasPorEstudante(
          Number(estudanteid),
        );

      return res.status(200).json(listaMatriculas);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  async pegaMatriculas(req, res) {
    const { estudanteid } = req.params;

    try {
      const listaMatriculas = await pessoaServices.pegaMatriculasPorEstudante(
        Number(estudanteid),
      );

      return res.status(200).json(listaMatriculas);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  async pegaTodasAsPessoas(req, res) {
    try {
      const listaPessoas = await pessoaServices.pegaPessoasEscopoTodos();
      return res.status(200).json(listaPessoas);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }
}

module.exports = PessoaController;
