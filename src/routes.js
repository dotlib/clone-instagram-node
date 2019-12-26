/**
 * @description Rotas da aplicação
 *
 * @author Dot.Lib <vlamir.santo@dotlib.com.br>
 * @since 2019-12-18
 */

const express = require("express");

const routes = new express.Router();

routes.get("/", (req, res) => {
  return res.json({ message: "API Clone do Instagram" });
});

module.exports = routes;
