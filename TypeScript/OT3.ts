/*Exercícios para Praticar
1. Criação e Acesso:
○ Crie um array de strings com os nomes de cinco cidades. Em
seguida, escreva um código que imprime o nome da terceira
cidade na lista.
2. Adicionando e Removendo Elementos:
○ Dado o array [10, 20, 30, 40, 50], adicione o número 35
entre 30 e 40, e depois remova o número 20 do array. Imprima o
array final.
3. Método .map():
○ Crie um array de números [1, 2, 3, 4, 5]. Use o método
.map() para criar um novo array onde cada número é
multiplicado por 3. Imprima o novo array.
4. Filtrando Valores:
○ Utilize o método .filter() para criar um novo array contendo
apenas os números ímpares do array original [1, 2, 3, 4, 5,
6, 7, 8, 9, 10].
5. Usando .reduce() para Soma:
○ Dado um array de números [5, 7, 10, 12, 15], utilize o
método .reduce() para calcular e imprimir a soma total dos
elementos do array.
*/




//1-
let cities: string[] = ["São Paulo", "Rio de Janeiro", "Curitiba", "Salvador", "Porto Alegre"];
console.log(cities[2]); // Output: "Curitiba"



//2-
let numbers: number[] = [10, 20, 30, 40, 50];
numbers.splice(3, 0, 35); // Adiciona 35 na posição 3
numbers.splice(1, 1);      // Remove o número 20
console.log(numbers);      // Output: [10, 30, 35, 40, 50]


//3-
let nums: number[] = [1, 2, 3, 4, 5];
let multiplied = nums.map(n => n * 3);
console.log(multiplied);   // Output: [3, 6, 9, 12, 15]


//4-
let original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = original.filter(n => n % 2 !== 0);
console.log(oddNumbers);   // Output: [1, 3, 5, 7, 9]


//5-
let values = [5, 7, 10, 12, 15];
let totalSum = values.reduce((acc, val) => acc + val, 0);
console.log(totalSum);     // Output: 49
