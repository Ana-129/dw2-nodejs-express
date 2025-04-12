
import express from "express";
// carregando o método do express  para gerenciamento de rotas
const router = express.Router();

// ROTA DE PRODUTOS
router.get("/produtos", (req, res) => {
    // array com lista produtos
    const produtos = [
        {nome:'Celular Motorola E22', preco: 1200, categoria:'Eletroportáteis'},
        {nome: 'Tablet Samsung', preco: 900, categoria:'Eletronicos'},
        {nome: 'Notebook Lenovo', preco: 3200, categoria:'Computadores'},
        {nome: 'Fone Bluetooth', preco: 150, categoria:'Perifericos'},
    
    ]

    res.render("produtos", {
    // Enviando a variável produtos para a página
    produtos: produtos,
    });
});

export default router;