import express from "express";
const router = express.Router();

router.get("/pedidos", function (req, res) {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const pedidos = [
    {
      imagem: "order.png",
      data: `${day}/${month}/${year}`,
      numero: "987654321",
      cliente: "ana flavia guimaraes",
      produto: "1 kalanchoe, 1 suculenta",
      valor: 25,
    },
    {
      imagem: "order.png",
      data: "02/10/2024",
      numero: "987456321",
      cliente: "lucas frazao",
      produto: "2 orquidea",
      valor: 220,
    },
    {
      imagem: "order.png",
      data: "04/03/2025",
      numero: "987321654",
      cliente: "renan oliveira",
      produto: "6 kalanchoe, 20 suculenta, 2 orquidea, 2 jiboia neon ",
      valor: 500,
    },
    {
      imagem: "order.png",
      data: "05/08/2024",
      numero: "987142536",
      cliente: "larisss",
      produto: "1 kalanchoe, 1 orquidea",
      valor: 130,
    },
  ];
  res.render("pedidos", {
    pedidos: pedidos,
  });
});

export default router;
