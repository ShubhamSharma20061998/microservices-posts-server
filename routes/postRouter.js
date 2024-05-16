const express = require("express");
const postCltr = require("../app/controllers/postCltr");

const postRouter = express.Router();

postRouter.post("/", postCltr.post);

postRouter.get("/", postCltr.get);

module.exports = postRouter;
