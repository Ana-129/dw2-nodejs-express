// exercicio 1
class heroi {
  constructor(nome, vida, velocidade, forca) {
    this.nome = nome;
    this.vida = vida;
    this.velocidade = velocidade;
    this.forca = forca;
  }

  correr() {
    return `${this.nome} esta correndo!`;
  }

  andar() {
    return `${this.nome} esta andando!`;
  }

  atacar() {
    return `${this.nome} esta atacando!`;
  }

  defender() {
    return `${this.nome} esta se defendendo!`;
  }
}

// Homem-Aranha
class HomemAranha extends heroi {
  constructor(nome, vida, velocidade, forca, teia) {
    super(nome, vida, velocidade, forca);
    this.teia = teia;
  }

  sentidoAranha() {
    return `${this.nome} detectou perigo!`;
  }
}

// Superman
class Superman extends heroi {
  constructor(nome, vida, velocidade, forca, podeVoar) {
    super(nome, vida, velocidade, forca);
    this.podeVoar = podeVoar;
  }

  voar() {
    return `${this.nome} esta voando!`;
  }
}

// Batman
class Batman extends heroi {
  constructor(nome, vida, velocidade, forca, esconder) {
    super(nome, vida, velocidade, forca);
    this.esconder = esconder;
  }

  investigar() {
    return `${this.nome} esta atras de um crime!`;
  }
}

const homemAranha = new HomemAranha("Homem-Aranha", 100, 80, 70, 1);
console.log(homemAranha.correr());
console.log(homemAranha.sentidoAranha());

const superman = new Superman("Superman", 100, 90, 100, 1);
console.log(superman.atacar());
console.log(superman.voar());

const batman = new Batman("Batman", 90, 70, 80, 1);
console.log(batman.defender());
console.log(batman.investigar());

//exercicio 02

const dataFutura = () => {
  const dataAtual = new Date();
  dataAtual.setDate(dataAtual.getDate() + 3); // daquia a 3 dias
  dataAtual.setMonth(dataAtual.getMonth() + 2); // daquia a 2 meses
  dataAtual.setFullYear(dataAtual.getFullYear() + 1); // daquia a 1 ano
  return dataAtual.toLocaleDateString("pt-BR");
};

console.log(dataFutura());

// exercicio 03
function converterSalario(salario) {
    const dolar = salario * 0.176;
    const euro = salario * 0.16;
    console.log(
        dolar.toLocaleString("pt-br", { style: "currency", currency: "USD" })
      );
      console.log(
        euro.toLocaleString("pt-br", { style: "currency", currency: "EUR" })
      );
  }
  
  converterSalario();

  //exercicio 04
  function formatarNome(nome) {
    console.log(nome.toUpperCase()); // Letras maiúsculas
    console.log(nome.toLowerCase()); // Letras minúsculas
    console.log(nome.length); // Número de caracteres
  }
  
  formatarNome("Ana Flavia");



