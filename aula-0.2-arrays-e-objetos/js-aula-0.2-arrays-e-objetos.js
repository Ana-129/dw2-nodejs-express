// ARRAY (Vetor ou Lista)
let produtos = []
console.log(typeof(produtos))

let Produtos = ["Computador", "Notebook", "Celular", "Tablet"]
console.log(Produtos)

console.log("Exibindo a lista pelos índices...")
console.log(`1 - ${Produtos[0]}`)
console.log(`2 - ${Produtos[1]}`)
console.log(`3 - ${Produtos[2]}`)
console.log(`4 - ${Produtos[3]}`)

console.log("Exibindo a lista através do FOR...")
for (let c in Produtos){
    console.log(`${Number(c) + 1} - ${Produtos[c]}`)
}

console.log("Exibindo lista através do forEach...")
Produtos.forEach(function (produto) {
    console.log(produto)
})

console.log("Exibindo lista através do forEach com os índices...")
Produtos.forEach((produto, i) => {
    console.log(`${i+1} - ${produto}`)
})