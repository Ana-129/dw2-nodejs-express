// funcao simples
function Saudacao() {
  console.log(`olá, meu nome é Ana, tenho 19 anos e moro em Juquiá!`);
}
Saudacao();

// funcao com parametro
function divisao(n1, n2) {
  let resultado = n1 / n2;
  console.log(`O resultado da divisao foi ${resultado}.`);
}
divisao(10, 5);

//Funcao com retorno
function multiplicar(n1, n2, n3) {
  return n1 * n2 * n3;
}
console.log(`A multiplicacao dos numeros é ${multiplicar(10, 11, 3)}`);

//Funcao mais de um retorno
function maiorDeIdade(n) {
  if (n >= 0) {
    return "Maior de Idade";
  } else {
    return "Menor de Idade";
  }
}
let idade = 19;
console.log(maiorDeIdade(idade));
console.log(`Fulano tem ${idade} anos e é ${maiorDeIdade(idade)}!`);

// função anônima
let media = function (n1, n2) {
  if ((n1 + n2) / 2 <= 5) {
    return "Reprovado";
  } else {
    return "Aprovado";
  }
};
console.log(`${media(10, 5)}!`);

// arrow function com parâmetro único
const triplo = (x) => {
  return x * 3;
};
console.log(`O triplo do numero é: ${triplo(10)}.`);

// arrow function com mais de um parâmetro
const Calc = (num1, num2, num3, num4) =>
  eval(`${num1} + ${num2} + ${num3} + ${num4}`);
console.log(`A soma dos numeros é ${Calc(5, 5, 5, 5)}`);

// IIFE
const Iife = (function (nome) {
  console.log(`Meu namorado se chama ${nome}.`);
})("Lucas");
