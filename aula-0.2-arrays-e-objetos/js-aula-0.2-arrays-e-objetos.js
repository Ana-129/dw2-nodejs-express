// ARRAY (Vetor ou Lista)
let produtos = [];
console.log(typeof produtos);

let Produtos = ["Computador", "Notebook", "Celular", "Tablet"];
console.log(Produtos);

console.log("Exibindo a lista pelos índices...");
console.log(`1 - ${Produtos[0]}`);
console.log(`2 - ${Produtos[1]}`);
console.log(`3 - ${Produtos[2]}`);
console.log(`4 - ${Produtos[3]}`);

console.log("Exibindo a lista através do FOR...");
for (let c in Produtos) {
  console.log(`${Number(c) + 1} - ${Produtos[c]}`);
}

console.log("Exibindo lista através do forEach...");
Produtos.forEach(function (produto) {
  console.log(produto);
});

console.log("Exibindo lista através do forEach com os índices...");
Produtos.forEach((produto, i) => {
  console.log(`${i + 1} - ${produto}`);
});

// metodos de manipulacao de vetores
let vetor = ["laranja", " maça", "banana"];
console.log(`nosso vetor é o: ${vetor}`);
vetor[3] = "morango";
console.log(`nosso vetor agora é o: ${vetor}`);

// metodos push - insere um novo elemento no FINAL do vetor
vetor.push("abacaxi");
console.log(`nosso vetor agora é o: ${vetor}`);

// metodo unshift - insere novo elemento no INICIO do vetor
vetor[0] = "pera";
console.log(`nosso vetor agora é o: ${vetor}`);
vetor.unshift("laranja");
console.log(`nosso vetor agora é o: ${vetor}`);

// metodo length - retorna o numero de elemento no vetor
let numeros = [6, 8, 2, 9, 3, 800, 200];
console.log(`nossa lista de numeros é: ${numeros}`);
console.log(`o numero de elementos do vetor é ${numeros.length}.`);

// metodos sort - ordenar o vetor
console.log(`o primeiro elemento da lista de frutas é: ${vetor[0]}`);
vetor.sort();
console.log(`agora primeiro elemento da lista de frutas é: ${vetor[0]}.`);
console.log(`nossa lista de frutas ordenadas é: ${vetor.sort()}`);

// ordenacao de numeros com sort
console.log(`nossa lista de numeros é ${numeros}`);
numeros.sort();
console.log(`agora a lista de numeros ordenadas é: ${numeros}`);

// ordenando de forma crescente
console.log(numeros.sort((a, b) => a - b));

// ordenando de forma decrescente
console.log(numeros.sort((a, b) => b - a));

///////////////////////////////////////////////////////////////////////////////////////////////////////
//objetos literais(nao sao derivados de classes)
//objetos possuem atributos (caracteristica) e metodos (acao)
// ladfo esquerdo: chaves / lado direito: valores
const pessoa = {};
console.log(typeof pessoa);

const carro = {
  //atribuido
  modelo: "gol",
  cor: "cinza",
  // metodos
  acelerar() {
    console.log("acelerando...");
  },
  frear() {
    console.log("freando");
  },
};
console.log(`o modelo do carro é ${carro.modelo}.`);
console.log(`a cor do carro é ${carro.cor}.`);
carro.acelerar();
carro.frear();

////////////////////////////////////////////////////////////////////////////////////////////////////////

const produto = {
  nome: "computador",
  marca: "lenovo",
  preco: 3000,
  descricao: "PC moderno com bom desempenho.",
};
console.log(produto);
console.log(
  `o ${produto.nome} da marca ${produto.marca} custa apenas R$${produto.preco}. ${produto.descricao}.`
);

////////////////////////////////////////////////////////////////////////////////////////////////////////

//array de objetos
const listaprodutos = [
  {
    nome: "computador",
    marca: "lenovo",
    preco: 3000,
    descricao: "PC moderno com bom desempenho.",
  },
  {
    nome: "tablet",
    marca: "samsung",
    preco: 2000,
    descricao: "ptima velocidade de processamento.",
  },
  {
    nome: "celular",
    marca: "apple",
    preco: 16000,
    descricao: "ultra resistente. muito barato!",
  },
];
// exibindo o array de objetos com forEach
listaprodutos.forEach((produto) => {
  console.log(`produto: ${produto.nome}`);
  console.log(`marca: ${produto.marca}`);
  console.log(`preco: ${produto.preco}`);
  console.log(`descricao: ${produto.descricao}`);
  console.log();
});

//console.table
console.table(listaprodutos)
