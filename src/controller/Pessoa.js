const Controller = require("./Controller.js");
const PessoaServices = require("../services/PessoaServices.js");

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }

  async pegaMatriculas(req, res) {
    const { estudanteid } = req.params;

    try {
      const listaMatriculas = await pessoaServices.pegaMatriculasPorEstudante(
        Number(estudanteid),
      );

      return res.status(200).json(listaMatriculas);
    } catch (error) {
      // erro
    }
  }
}

module.exports = PessoaController;
