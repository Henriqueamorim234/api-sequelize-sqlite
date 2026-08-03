const express = require("express");
const pessoas = require("./pessoasRoutes.js");
const curso = require("./cursoRoutes.js");
const categoria = require("./categoriasRoutes.js");

module.exports = (app) => {
  app.use(express.json(), pessoas, curso, categoria);
};
