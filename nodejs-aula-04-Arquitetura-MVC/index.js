// mode CommonJS de importação
// const express = require("express");
// mode ES6 de importação
//const express = require("express");
import express from "express"
// Carregando o método principal do Express
const app = express(); // Iniciando o Express

// Importando os controllers (onde estão as rotas)
import ProdutosController from "./controllers/ProdutosController.js";

// CONFIGURANDO A VIEW ENGINE - EJS
app.set("view engine", "ejs");


// Configurando o express para utilizar as rotas dos controllers
app.use("/", ProdutosController);

// configurando a pasta public para arquivos estáticos
app.use(express.static("public"));
// CRIANDO A ROTA PRINCIPAL (RAIZ) DO SITE
// Método .get cria uma rota na aplicação
// REQ -> Trata a requisão
// RES -> Trata a resposta
app.get("/", (req, res) => {
  res.render("index");
});


// Iniciando o servidor da aplicação na porta 8080
// O método listen do Express inicia um servidor
app.listen(8080, (error) => {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!" + error);
  } else {
    console.log("Servidor iniciado com sucesso!");
    console.log("Acesse http://localhost:5000");
  }
});
