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
  res.send(
    "<h1>bem-vindo ao meu primeiro site em node.js!</h1><br><p>iniciando estudos com node.js!</p>"
  );
});

//rota de perfil
// :nome -> parametro obrigatorio
// :nome? -> parametro opcional
app.get("/perfil/:nome?", (req, res) => {
  //  res.send("<h1>perfil usuario</h1>");
  // coletando o parametro da rota e gravando na variavel
  const nome = req.params.nome;
  if (nome) {
    res.send(`<h2>olá, ${nome}! Seja bem-vindo ao seu perfil!</h2>`);
  } else {
    res.send(`<h2>faca login no seu perfil!</h2>`);
  }
    res.send(`<h2>olá, ${nome}! Seja bem-vindo ao seu perfil </h2>`);
});

//rota de produtos
app.get("/produto", (req, res) => {
  res.render("produtos");
});

//iniciando o servidor da aplicacao na porta 8080
// o metodo listen inicia um servidor
app.listen(8080,  (error) => {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!" + error);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
