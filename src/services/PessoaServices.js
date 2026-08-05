const Services = require("./Services.js");

class PessoaServices extends Services {
  constructor() {
    super("Pessoa");
  }

  async pegaMatriculasAtivasPorEstudante(id) {
    const estudante = await super.pegarUmRegistroPorID(id);

    const listaMatriculas = await estudante.getAulasMatriculadas(estudante);
    return listaMatriculas;
  }

  async pegaMatriculasPorEstudante(id) {
    const estudante = await super.pegarUmRegistroPorID(id);

    const listaMatriculas = await estudante.getTodasAsMatriculas(estudante);
    return listaMatriculas;
  }

  async pegaPessoasEscopoTodos() {
    const listaPessoas = await super.pegaRegistrosPorEscopo("todosOsRegistros");
    return listaPessoas;
  }
}

module.exports = PessoaServices;
