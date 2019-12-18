/**
 * @description Criando o schema do Post
 *
 * @author Dot.Lib <vlamir.santo@dotlib.com.br>
 * @since 2019-12-18
 */

const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Post", PostSchema);
