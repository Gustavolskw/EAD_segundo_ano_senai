/*
1. Calculadora Simples: Crie Arrow Functions para as operações básicas
de matemática: soma, subtração, multiplicação e divisão. Cada função
deve aceitar dois parâmetros e retornar o resultado da operação.
2. Função de Saudação Personalizada: Escreva uma Arrow Function que
recebe um nome como parâmetro e retorna uma saudação
personalizada.
3. Contador com Arrow Function: Use uma Arrow Function dentro de um
setInterval para criar um contador que imprime um número a cada
segundo.
4. Filtrar Números Pares: Dado um array de números, use uma Arrow
Function com o método filter para criar um novo array apenas com
números pares.
5. Conversor de Temperatura: Crie uma Arrow Function que converte a
temperatura de Celsius para Fahrenheit.
6. Função de Ordenação: Implemente uma Arrow Function que recebe um
array de strings e retorna um novo array com os itens ordenados
alfabeticamente.
*/

//-1
const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const dividir = (a, b) => a / b;
const multiplicação = (a, b) => a * b;


//2-
const saudacao = (nome) => `Seja bem vindo ao nosso planeta eu nos da raça ${nome} somos passificos`;

//3-
let contador = 0;

const intervalo = setInterval(() => {
    console.log(contador);
    contador++;
}, 1000);

//4-

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filtroPar = (numbers) => numbers.filter((num) => num % 2 == 0)


console.log(filtroPar(numeros));



//5-
const conversorFirehidt = (celsius) => (celsius * 9 / 5) + 32;


//6-
const ordenarStrings = (strings) => strings.sort((a, b) => a.localeCompare(b));

const nomes = ["Maria", "João", "Ana", "Pedro", "Carlos"];

console.log(ordenarStrings(nomes));