// Classes no JS

class Carro {
  // Nome de classes devem iniciar com a primeira letra maiuscula

  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  // metodos
  buzinar() {
    return "Beep! Beep!";
  }

  // criando uma instancia (objeto) da classe carro
}

const carroPopular = new Carro("Fiat", "Uno", "2021");
console.log(
  `O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano ${
    carroPopular.ano
  } e faz ${carroPopular.buzinar()}`
);

// Instancia carroEsportivo
const carroEsportivo = new Carro();
carroEsportivo.marca = "Chevrolet";
carroEsportivo.modelo = "Camaro";
carroEsportivo.ano = "2024";
console.log(
  `O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano ${
    carroEsportivo.ano
  } e também faz ${carroEsportivo.buzinar()}`
);

//adicionando um novo atributo

carroEsportivo.corNeon = "Azul";

//adicionando um novo metodo
carroEsportivo.turbo = function () {
  return "ZUMMMMMMMMMMMMM";
};
console.log(`O carro ${carroEsportivo.marca} modelo ${
  carroEsportivo.modelo
} é do ano ${
  carroEsportivo.ano
} e também faz ${carroEsportivo.buzinar()} da cor ${carroEsportivo.corNeon}
  que faz ${carroEsportivo.turbo}`);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// manipulando datas no javascript
const dataAtual = new Date();
console.log(typeof dataAtual);

//pegando o dia atual
const dia = dataAtual.getDate();
console.log(`hoje é dia ${dia}.`);

//pegando o mes atual
const mes = dataAtual.getMonth() + 1;
console.log(`estamos no mes ${mes}.`);

//pegando o ano atual
const ano = dataAtual.getFullYear();
console.log(`ano atual ${ano}.`);

// adicionando dias, meses e anos a data atual
dataAtual.setDate(dataAtual.getDate() + 10);

//exibindo a nova data
console.log(`daqui a 10 dias sera dia ${dataAtual.getDate()}.`);

// adicionando 3 meses a data atual:
dataAtual.setMonth(dataAtual.getMonth() + 3);

//exibindo o novo ano
console.log(`daqui a 3 meses sera mes ${dataAtual.getMonth() + 1}.`);

// adicionando 2 anos a data atual
dataAtual.setFullYear(dataAtual.getFullYear() + 2);

//exibindo o novo ano
console.log(`daqui a 2 anos sera ${dataAtual.getFullYear()}.`);

//////////////////////////////////////////////////////////////////////
//trabalhando com moeda no javascript
let salario = 2500.3;
console.log(salario);

// mostrando as casas decimais
console.log(salario.toFixed(2));

//ocultando as casas decimais
console.log(salario.toFixed(0));

//alterando o marcador de cada decimal
console.log(salario.toFixed(2).replace(".", ","));

//formatacao de moeda
//mostrando o salario em real (R$)
console.log(
  salario.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
);

//mostrando o salario em DOLAR (USD)
console.log(
    salario.toLocaleString("pt-br", { style: "currency", currency: "USD" })
  );

// convertendo de real para dolar
const salarioDolar = salario * 0.176

console.log(
    salarioDolar.toLocaleString("pt-br", { style: "currency", currency: "USD" })
  );

//mostrando o salario em EURO (EUR)
console.log(
    salario.toLocaleString("pt-br", { style: "currency", currency: "EUR" })
  );

//////////////////////////////////////////////////////////////////////////////////////////
//formatacao de string
const nome = "Ana Flavia"

//alterando para letras MAIUSCULA
console.log(nome.toUpperCase())

//alterando para letras MINUSCULA
console.log(nome.toLowerCase())

//contando caracteres de uma string
console.log(nome.length)

//removendo espaços
const novoNome = nome.replace(/\s/g, "")
console.log(novoNome)
console.log(novoNome.length)