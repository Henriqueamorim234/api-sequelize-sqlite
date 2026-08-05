const { Router } = require("express");
const PessoaController = require("../controller/Pessoa.js");
const MatriculaController = require("../controller/Matricula.js");

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

const router = Router();

router.get("/pessoas", (req, res) => {
  pessoaController.pegaTodos(req, res);
});

router.get("/pessoas/todos", (req, res) => {
  pessoaController.pegaTodasAsPessoas(req, res);
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

router.get("/pessoas/:estudanteid/matriculas", (req, res) => {
  pessoaController.pegaMatriculas(req, res);
});

router.post("/pessoas/:estudanteid/matriculas", (req, res) => {
  matriculaController.criarNovo(req, res);
});

module.exports = router;
