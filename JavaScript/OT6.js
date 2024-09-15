let carro = {
    marca: "BMW",
    modelo: "Esportivo",
    ano: 2023
}
console.log(carro.modelo);

carro.cor = "Verde"


carro.ano = 2020

for (chave in carro) {
    console.log(`${chave}: ${carro[chave]}`);
}

let calculadora = {
    val1: null,
    val2: null,
    calcula: function (val1, val2) {
        return val1 + val2
    }
}

calculadora.val1 = 2
calculadora.val2 = 4

console.log(calculadora.calcula(calculadora.val1, calculadora.val2));



let hero = {
    nome: "CAP patria",
    reput: 2,
    poder: 10,
    serie: "The Boys"
}


for (aspectro in hero) {
    console.log(`${aspectro}: ${hero[aspectro]} `);
}


let livro = {
    titulo: "O Hobbit",
    autor: "J.R.R Tolkien",
}

livro.paginas = 320

livro.titulo = "Senhor dos anéis o retorno do rei"

for (atr in livro) {
    console.log(`${atr}: ${livro[atr]} `);
}


console.log("/////////");



for (let i = 0; i < Object.keys(livro).length; i++) {
    console.log(Object.keys(livro)[i] + " - " + Object.keys(livro)[i]);
}

