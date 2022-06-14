const express = require("express");
const app = express();
const path = require("path");

const mainRouter = require("./routers/main");

app.listen(3000, () => {
  console.log("Servidor funcionando");
});

app.use(express.static(path.resolve(__dirname, "./public")));

app.use("/", mainRouter);
