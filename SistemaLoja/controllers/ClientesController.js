import express from "express";
const router = express.Router();

router.get("/clientes", (req, res) => {
  const clientes = [
    {
      imagem: "tigre.jpg",
      nome: "Ana guimaraes",
      cpf: "123.456.789-00",
      endereco:
        "Rua: antonio ferreira de aguiar,13, Bairro centro, Cidade juquia, Estado sao paulo, CEP: 11800-000",
    },
    {
      imagem: "cachorro.jpg",
      nome: "lucas frazao",
      cpf: "987.654.321-00",
      endereco:
        "rua:seis, 6, Bairro jardim valeri, Cidade registro, Estado sao paulo, CEP: 11900-000",
    },
    {
      imagem: "boi.jpg",
      nome: "renan oliveira",
      cpf: "456.789.123-00",
      endereco:
        "rua: teiti koki, 582, Bairro jardim caicara, Cidade registro, Estado de sao paulo, CEP: 119000-000",
    },
    {
      imagem: "ovelha.jpg",
      nome: "larisss",
      cpf: "321.654.987-00",
      endereco:
        "rua: martins coelho, 56, Bairro Bela Vista, Cidade registro, Estado de sao paulo, CEP: 11900-000",
    },
  ];
  res.render("clientes", {
    clientes: clientes,
  });
});

export default router;
