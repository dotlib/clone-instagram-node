/**
 * @description Controller dos likes
 *
 * @author Dot.Lib <vlamir.santo@dotlib.com.br>
 * @since 2019-12-18
 */

const Post = require("../models/Post");

module.exports = {
  // Salva o item no Mongo
  async save(req, res) {
    const post = await Post.findById(req.params.id);

    post.likes += 1;

    await post.save();

    return res.json(post);
  }
};
