const { Router } = require("express");
const CategoriaController = require("../controller/Categoria.js");

const categoriaController = new CategoriaController();

const router = Router();

router.get("/categorias", (req, res) => {
  categoriaController.pegaTodos(req, res);
});

router.get("/categorias/:id", (req, res) => {
  categoriaController.pegarPorId(req, res);
});

router.post("/categorias", (req, res) => {
  categoriaController.criarNovo(req, res);
});

router.put("/categorias/:id", (req, res) => {
  categoriaController.atualizar(req, res);
});

router.delete("/categorias/:id", (req, res) => {
  categoriaController.deletar(req, res);
});

module.exports = router;
