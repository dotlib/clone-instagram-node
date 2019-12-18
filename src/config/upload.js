/**
 * @description Configuração do path de destino dos arquivos de upload
 *
 * @author Dot.Lib <vlamir.santo@dotlib.com.br>
 * @since 2019-12-18
 */

const multer = require("multer");
const path = require("path");

module.exports = {
  storage: new multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename: function(req, file, callback) {
      callback(null, file.originalname);
    }
  })
};
