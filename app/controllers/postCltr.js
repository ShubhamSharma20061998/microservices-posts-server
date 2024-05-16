const post = require("../models/postsModel");

const postCltr = {};

postCltr.get = async (req, res) => {
  res.json(post);
};

postCltr.post = async (req, res) => {
  const id = Number(new Date());
  const { title } = req.body;
  post[id] = {
    id,
    title,
  };
  res.status(200).json(post[id]);
};

module.exports = postCltr;
