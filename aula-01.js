//Introdução a javascript
//CTRL + ; -> comenta o codigo selecionado

//Declaração de variáveis no JS: CONST + LET + VAR

const nome = "Larissa"; //Const precisa de um valor atribuido a ele
let Nome; // Let não precisa de valor atribuido a ele

var cor = "Azul";
var cor = "Amarelo";
let cidade = "Registro";
cidade = "Jacupiranga";

const message = "Hello, world! Iniciando estudos Javascript!";
console.log(message);

// Typeof (esse comando exibira o tipo de variavel)
const estado = "sp";
const idade = 18;
let endereco;
console.log(typeof estado);
console.log(typeof idade);
console.log(typeof endereco);
// O javascript é uma linguagem de tipagem dinamica e tipagem fraca

////////////////////////////////////////////////////////////////////////

//Tipos de funções no javascript
function minhaFuncao() {}
console.log(typeof minhaFuncao);

// funcao simples
function saudacao() {
  console.log("olá, bem-vindo!");
}
saudacao();

// funcao com parametro / argumento
// parametro -> é um dado que a funcao recebe
// argumento -> é o dado que é enviado para a funcao
function Saudacao(nome) {
  console.log("olá, bem-vindo " + nome + "!"); //concatenando
  console.log(`olá, bem-vindo ${nome}!`); //usando template strings
  // ${} -> placeholder
}
Saudacao("Ana"); //argumento

// funcao com mais de um parametro
function soma(n1, n2) {
  let resultado = n1 + n2;
  console.log(`A soma dos dois numeros foi ${resultado}.`);
}
let n1 = 6;
let n2 = 10;
soma(n1, n2);

// funcao com retorno
function Soma(n1, n2) {
  return n1 + n2;
}
console.log(`A soma dos dois numeros foi ${Soma(2, 6)}.`);

// funcao com mais de um retorno
function parImpar(n) {
  if (n % 2 == 0) {
    return "par";
  } else {
    return "Impar";
  }
}
let num = 4;
console.log(parImpar(num));
console.log(`O numero ${num} é ${parImpar(num)}!`);

// função anônima
let dobro = function (x) {
    return x * 2;
  };
  console.log(dobro(15));
  console.log(`O dobro do número é ${dobro(15)}!`);
  
  // arrow function com parâmetro único
  // função flecha
  const Dobro = x => {
    return x * 2;
  };
  console.log(`Função dobro com arrow function. Resultado: ${Dobro(20)}.`);
  
  // arrow function com mais de um parâmetro
  const calc = (num1, operador, num2) => {
    return eval(`${num1} ${operador} ${num2}`);
  };
  console.log(`O resultado da operação é ${calc(6, '*', 6)}.`);
  
  // simplificando arrow function
  const Calc = (num1, operador, num2) => eval(`${num1} ${operador} ${num2}`);
  console.log(`O resultado da operação é ${Calc(7, '*', 7)}`);
  
  // IIFE - Immediately Invoked Function Expression
  // função imediata - última
  const Iife = (function(app) {
    console.log(`Executando imediatamente o app ${app}.`);
  })("whatsapp");
  