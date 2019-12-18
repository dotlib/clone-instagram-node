/**
 * @description Aplicação
 *
 * @author Dot.Lib <vlamir.santo@dotlib.com.br>
 * @since 2019-12-18
 */

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();
const server = require("http").Server(app);

// Conectando no mongoDB
mongoose.connect(
  "mongodb+srv://instagra:instagra@cluster0-qtwxf.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

/**
 * Rota para acessar arquivos estáticos
 * localhost:3333/files/NOME_DO_ARQUIVO
 */
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "uploads", "resized"))
);

app.use(cors());
app.use(require("./routes"));

server.listen(3333);
