const Services = require("./Services.js");

class PessoaServices extends Services {
  constructor() {
    super("Pessoa");
  }

  async pegaMatriculasPorEstudante(id) {
    const estudante = await super.pegarUmRegistroPorID(id);

    const listaMatriculas = await estudante.getAulasMatriculadas(estudante);
    return listaMatriculas;
  }
}

module.exports = PessoaServices;
