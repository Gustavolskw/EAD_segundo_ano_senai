/*1. Criando uma Lista de Compras: Use o operador spread para combinar
dois arrays de itens de supermercado em uma lista de compras.
2. Atualizando um Perfil de Usuário: Crie um objeto usuario com
propriedades como nome e email. Use o operador spread para criar um
novo objeto com os dados do usuário e uma propriedade adicional
status.
3. Festa de Aniversário: Crie uma função que aceita um número variável
de nomes e os imprime como lista de convidados para uma festa de
aniversário, usando o operador spread para coletar os nomes.
4. Clonando um Array de Músicas: Dado um array de músicas, crie uma
cópia do array usando o operador spread. Altere um elemento no array
copiado e verifique se o array original permanece inalterado.
5. Mesclando Objetos com Informações Complementares: Crie dois
objetos, um com informações básicas de um filme (título e diretor) e
outro com informações complementares (ano e gênero). Use o operador
spread para mesclar esses objetos em um único objeto filme.
6. Criando um Menu de Restaurante Variável: Faça uma função criarMenu
que aceita vários itens (entradas, pratos principais, sobremesas) como
arrays e usa o operador spread para criar um único array de menu.*/


//1-
let compras = ["Feijão", "arroz", "farofa", "Carne", "Peixe", "cerveja"]

let condor = [...compras]

console.log(condor);


//2-
let usuario = {
    id: 1,
    nome: "Gustavo",
    email: "gustavo@admin.com"

}

let attUser = { ...usuario, idade: 21 }
console.log(attUser);


//3-
let listaDeConidados = ["Pedor", "Joca", "Alfredo"]

const festaDeAniversario = (listaDeNomes) => {
    console.log(...listaDeNomes);
}

//4-

let musicas = ["Save your tears", "Bank Account", "Prise the lord", "Without me"];

let newMusicas = [...musicas, "Walk it talk it "]

console.log(musicas);
console.log(newMusicas);



//5-

let filme = {
    nome: "Senhor dos aneis",
    diretor: "Peter Jackson"
}


let resto = {
    ano: 2004,
    genero: "Fantasia"
}


let filmeCompleto = { ...filme, ...resto }

console.log(filmeCompleto);


//6-

let entradas = ["Pão", "Café", "Chá",]
let pratos = ["Carne", "Feijão", "Estrogonoff",]
let sobremesas = ["Pudim", "Chocolate", "Sagú",]

const criarMenu = (entradas, pratosP, sobremesas) => {
    return {
        entradas: [...entradas], pratos: [...pratosP], sobremesas: [...sobremesas]
    }
}


console.log(criarMenu(entradas, pratos, sobremesas));