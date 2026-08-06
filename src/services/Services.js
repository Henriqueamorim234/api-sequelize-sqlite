const dataSource = require("../DataBase/models");

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }
  async pegaTodosOsRegistros() {
    return dataSource[this.model].findAll();
  }

  async pegaRegistrosPorEscopo(escopo) {
    return dataSource[this.model].scope(escopo).findAll();
  }

  async pegarUmRegistroPorID(id) {
    return dataSource[this.model].findByPk(id);
  }

  async pegarUmRegistro(where) {
    return dataSource[this.model].findOne({ where: { ...where } });
  }

  async criarRegistro(dadosDoRegistro) {
    return dataSource[this.model].create(dadosDoRegistro);
  }

  async atualizaRegistro(dadosAtualizados, where) {
    const listaDeRegistrosAtualizados = dataSource[this.model].update(
      dadosAtualizados,
      {
        where: { ...where },
      },
    );
    if (listaDeRegistrosAtualizados[0] === 0) {
      return false;
    }
    return true;
  }

  async deletarRegistro(where) {
    return dataSource[this.model].destroy({ where: { ...where } });
  }
}

module.exports = Services;
