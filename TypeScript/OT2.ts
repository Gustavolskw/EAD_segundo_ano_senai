/*Exercícios para Praticar
1. Trabalhando com Tipos:
○ Crie variáveis para cada tipo básico e imprima-as.
○ Tente atribuir valores incorretos a essas variáveis para ver o que
acontece.
2. Função com Tipos:
○ Escreva uma função que aceita um array de números e retorna a
soma de todos os elementos.
○ Assegure-se de tipar tanto a entrada quanto a saída da função.
3. Enumerações:
○ Crie um enum para representar os dias da semana e use-o em
uma função que imprime uma mensagem de acordo com o dia
passado.
4. Tuplas:
○ Crie uma tupla que representa um produto (com nome e preço).
Use essa tupla em uma função que imprime o nome e o preço do
produto.
5. Any:
○ Crie uma variável do tipo any e atribua diferentes tipos de valores
a ela. Note como o TypeScript não emite erros nesse caso.
6. Void, Null e Undefined:
○ Crie uma função que não retorna nada (void) e outra que retorna
undefined. Compare as duas.
*/

//1-
// Declaração das variáveis com tipos
let numero: number;
let nome: string;
let lista: any[] = [];
let verdade: boolean;
let listaDef: [string, number] = ['Rua Sem Nome', 22];
enum Marcas { BMW, FORD, HONDA, ALFA_ROMEO }
let meuCarro: Marcas = Marcas.BMW;

let qualquerCoisa: any = 'tudo';

// Testando atribuições corretas
numero = 42;
nome = "João";
verdade = true;
lista.push("item1", 2, true);

// Exibindo as variáveis
console.log(numero);
console.log(nome);
console.log(lista);
console.log(verdade);
console.log(listaDef);
console.log(meuCarro);

// Tentativa de atribuir valores incorretos (vai gerar erros do TypeScript)
/*
numero = "Hello World"; // Erro: não pode atribuir string a um number
nome = 4; // Erro: não pode atribuir number a uma string
*/

//2-
// Função que soma os elementos de um array
function somaArray(numeros: number[]): number {
    return numeros.reduce((acc, val) => acc + val, 0);
}

// Testando a função
const numeros = [1, 2, 3, 4, 5];
console.log(somaArray(numeros)); // resultado 15


//3-
// Enum para representar os dias da semana
enum DiasDaSemana {
    Domingo, Segunda, Terca, Quarta, Quinta, Sexta, Sabado
}

// Função que imprime uma mensagem com base no dia
function imprimeDia(dia: DiasDaSemana): void {
    switch (dia) {
        case DiasDaSemana.Domingo:
            console.log("Hoje é domingo, dia de descanso!");
            break;
        case DiasDaSemana.Segunda:
            console.log("Hoje é segunda, início da semana!");
            break;
        // Adicione cases para os outros dias se necessário
        default:
            console.log("Dia inválido.");
    }
}

// Testando a função com o enum
imprimeDia(DiasDaSemana.Domingo); //Hoje é domingo, dia de descanso!
imprimeDia(DiasDaSemana.Segunda); //Hoje é segunda, início da semana!


//4-

// Tupla para representar um produto
let produto: [string, number] = ['Celular', 1500];

// Função que imprime o nome e o preço do produto
function imprimeProduto(produto: [string, number]): void {
    console.log(`Produto: ${produto[0]}, Preço: R$${produto[1]}`);
}

// Testando a função
imprimeProduto(produto); //Produto: Celular, Preço: R$1500


//5-

// Variável do tipo 'any'
let variavelAny: any;

variavelAny = "Texto";
console.log(variavelAny); // Texto

variavelAny = 100;
console.log(variavelAny); // 100

variavelAny = { chave: "valor" };
console.log(variavelAny); // { chave: 'valor' }


//6-
// Função que não retorna nada (void)
function logMensagem(): void {
    console.log("Esta função não retorna nada.");
}

// Função que retorna undefined
function retornaUndefined(): undefined {
    return undefined;
}

// Testando as funções
logMensagem(); // Esta função não retorna nada.
console.log(retornaUndefined()); // undefined


