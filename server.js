const express = require("express");
const cors = require("cors");

const app = express();
const port = 4000;

const postRouter = require("./routes/postRouter");

app.use(express.json());
app.use(cors());

app.use("/post", postRouter);

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
