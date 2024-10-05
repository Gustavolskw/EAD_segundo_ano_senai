/*1. Extrair Dados de um Array: Crie um array com três elementos e utilize a
desestruturação para criar três variáveis, cada uma recebendo um
elemento do array.
2. Extrair Propriedades de um Objeto: Crie um objeto com propriedades
como nome e idade.Use a desestruturação para criar variáveis a partir
dessas propriedades.
3. Desestruturação em Funções: Escreva uma função que recebe um
objeto como parâmetro e use a desestruturação para trabalhar com as
    propriedades do objeto dentro da função.
4. Desestruturação com Arrays Aninhados: Crie um array de arrays e use a
desestruturação para criar variáveis a partir dos elementos do array
aninhado.
5. Valores Padrão na Desestruturação: Crie um array com um elemento e
utilize a desestruturação para criar duas variáveis.A primeira deve
receber o valor do array e a segunda deve usar um valor padrão.
6. Trocar Valores de Variáveis com Desestruturação: Crie duas variáveis e
troque os valores entre elas utilizando desestruturação.*/


//1-
let array = ["Gustavo", "Piter", "Jack"];
let [nome1, nome2, nome3] = array;


//2-
let pessoa = {
    nome: "Gustavo",
    idade: 21,
    email: "Gustavo@admin.com"
}

let { nome, idade, email } = pessoa;
console.log(nome);

//3-
const descrontrutiva = (obj) => {
    let { nome, idade, email } = obj
    console.log(nome, idade, email);
}


descrontrutiva(pessoa);


//4-

let carros = [["BMW", "Mercedes", "Audi"], ["FIAT", "Ferrari", "Alpha Romeu"]]

let [alemaes, italianos] = carros
console.log(alemaes);


//5-
let [a = 2, b = 4] = [56]


console.log(a, b);

//6-
let x = 0;
let y = 9;
[x, y] = [y, x]

console.log(x, y);