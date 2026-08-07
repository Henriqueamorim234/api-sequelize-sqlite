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

router.get("/pessoas/:estudante_id/matriculas", (req, res) => {
  pessoaController.pegaMatriculasAtivas(req, res);
});

router.get("/pessoas/:estudante_id/matriculas/todos", (req, res) => {
  pessoaController.pegaMatriculas(req, res);
});

router.get("/pessoas/:estudante_id/matriculas/confirmadas", (req, res) => {
  matriculaController.pegaMatriculasPorEstudante(req, res);
});

router.get("/pessoas/:estudante_id/matriculas/:id", (req, res) => {
  matriculaController.pegarUm(req, res);
});

router.post("/pessoas/:estudante_id/matriculas", (req, res) => {
  matriculaController.criarNovo(req, res);
});

router.put("/pessoas/:estudante_id/matriculas/:id", (req, res) => {
  matriculaController.atualizar(req, res);
});

router.delete("/pessoas/:estudante_id/matriculas/:id", (req, res) => {
  matriculaController.deletar(req, res);
});

module.exports = router;
