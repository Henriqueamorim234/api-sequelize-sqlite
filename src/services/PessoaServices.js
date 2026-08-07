const Services = require("./Services.js");

class PessoaServices extends Services {
  constructor() {
    super("Pessoa");
    this.MatriculasServices = new Services("Matricula");
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

  async cancelaPessoaEMatriculas(estudanteid) {
    await super.atualizaRegistro({ ativo: false }, { id: estudanteid });
    await this.MatriculasServices.atualizaRegistro(
      { status: "cancelado" },
      { estudante_id: estudanteid },
    );
  }
}

module.exports = PessoaServices;
