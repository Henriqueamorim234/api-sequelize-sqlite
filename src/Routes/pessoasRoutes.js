const { Router } = require("express");

const PessoaController = require("./controller/Pessoa.js");

const router = Router();

router.get("/pessoas", PessoaController.pegarTodas);

module.exports = router;
