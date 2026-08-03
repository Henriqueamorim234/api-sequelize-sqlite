const { Router } = require("express");
const PessoaController = require("../controller/Pessoa.js");

const pessoaController = new PessoaController();

const router = Router();

router.get("/pessoas", (req, res) => {
  pessoaController.pegaTodos(req, res);
});

router.get("/pessoas/:id", (req, res) => {
  pessoaController.pegarPorId(req, res);
});

router.post("/pessoas", (req, res) => {
  pessoaController.criarNovo(req, res);
});

router.put("/pessoas/:id", (req, res) => {
  pessoaController.atualizar(req, res);
});

router.delete("/pessoas/:id", (req, res) => {
  pessoaController.deletar(req, res);
});

module.exports = router;
