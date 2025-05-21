import express from "express";
const app = express();

import PedidosController from "./controllers/PedidosController.js";
import ClientesController from "./controllers/ClientesController.js";
import ProdutosController from "./controllers/ProdutosController.js";

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", PedidosController);
app.use("/", ClientesController);
app.use("/", ProdutosController);

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(8080, function (erro) {
  if (erro) {
    console.log("Ocorreu um erro!");
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
