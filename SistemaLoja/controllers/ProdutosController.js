import express from "express";
const router = express.Router();

router.get("/produtos", function (req, res) {
  const produtos = [
    {
      imagem: "suculenta.png",
      nome: "suculenta",
      preco: 5,
      categoria: "planta",
    },
    { imagem: "orquidea.png", nome: "orquidea", preco: 110, categoria: "flor" },
    {
      imagem: "kalanchoe.png",
      nome: "kalanchoe",
      preco: 20,
      categoria: "flor",
    },
    {
      imagem: "jiboiaNeon.png",
      nome: "jiboia neon",
      preco: 35,
      categoria: "folhagem",
    },
  ];
  res.render("produtos", {
    produtos: produtos,
  });
});
export default router;
