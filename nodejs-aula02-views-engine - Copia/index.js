// importando o pacote do express.js
const express = require("express");
// carregando o metodo principal do express
const app = express(); // iniciando o express

//configurando a view engine - ejs
app.set("view engine", "ejs");

//criando a ROTA PRINCIPAL (RAIZ) DO SITE
// metodo .get cria uma rota na aplicacao
// req --> trata a requisicao
//res --> trata a resposta
app.get("/", (req, res) => {
  res.render("index");
});

//rota de perfil
app.get("/perfil", (req, res) => {
  res.render("perfil");
});

//rota de produtos
app.get("/produtos/:produto?", (req, res) => {
  // colentando o parametro de rotas
  const produto = req.params.produto;
  res.render("produtos", {
    // enviando a variavel produto para a pagina
    produto: produto,
  });
});

//iniciando o servidor da aplicacao na porta 8080
// o metodo listen inicia um servidor
app.listen(8080, (error) => {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!" + error);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
