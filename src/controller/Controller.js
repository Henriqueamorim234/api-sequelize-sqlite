class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async pegaTodos(req, res) {
    try {
      const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistro);
    } catch (error) {
      //erro
    }
  }

  async pegarPorId(req, res) {
    const { id } = req.params;

    try {
      const umRegistro = await this.entidadeService.pegarUmRegistroPorID(
        Number(id),
      );
      return res.status(200).json(umRegistro);
    } catch (error) {
      res.status(404).json("registro não encontrado");
    }
  }

  async criarNovo(req, res) {
    const novoRegistro = req.body;

    try {
      const registroCriado =
        await this.entidadeService.criarRegistro(novoRegistro);
      return res.status(200).json(registroCriado);
    } catch (error) {
      // erro
    }
  }

  async atualizar(req, res) {
    const { id } = req.params;

    const dadosAtualizados = req.body;

    try {
      const foiAtualizado = await this.entidadeService.atualizaRegistro(
        dadosAtualizados,
        Number(id),
      );

      if (!foiAtualizado) {
        return res.status(400).json({ mensage: "registro não foi atualizado" });
      }

      return res.status(200).json({ mensage: "registro foi atualizado" });
    } catch (error) {
      //erro
    }
  }

  async deletar(req, res) {
    const { id } = req.params;

    try {
      this.entidadeService.deletarRegistro(id);
      return res
        .status(200)
        .json({ mensage: `o registro de id = ${id} foi deletado` });
    } catch (error) {
      // erro
    }
  }
}

module.exports = Controller;
