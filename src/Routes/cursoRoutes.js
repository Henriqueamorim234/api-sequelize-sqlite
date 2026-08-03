const { Router } = require("express");
const CursoController = require("../controller/Curso.js");

const cursoController = new CursoController();

const router = Router();

router.get("/cursos", (req, res) => {
  cursoController.pegaTodos(req, res);
});

router.get("/cursos/:id", (req, res) => {
  cursoController.pegarPorId(req, res);
});

router.post("/cursos", (req, res) => {
  cursoController.criarNovo(req, res);
});

router.put("/cursos/:id", (req, res) => {
  cursoController.atualizar(req, res);
});

router.delete("/cursos/:id", (req, res) => {
  cursoController.deletar(req, res);
});

module.exports = router;
