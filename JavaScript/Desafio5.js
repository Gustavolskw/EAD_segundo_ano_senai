/*
Crie uma variável qualquer, que receba um array com alguns valores
aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let arrayVariable = [1, 2, 3, 7, 5, 7, 5, 3, 1, 78]
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function useArray(array) {
    return array;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
useArray(arrayVariable);
console.log(useArray(arrayVariable)[2 - 1]);
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores;
e o
segundo, um número. A função deve retornar o valor de um índice do array
que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o
número passado no
segundo parâmetro.
*/
function manipulaArray(array, pos) {
    return array[pos];
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let multiTypeArray = ["Gustavo", 56, 5.7, "Uchoa", 76];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
for (let i = 0; i < multiTypeArray.length; i++) {
    console.log(manipulaArray(multiTypeArray, i));
}
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome
do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
- `quantidadePaginas` - Number (quantidade de páginas)
- `autor` - String
- `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
let livro = {
    quantidadePaginas: Number,
    autor: String,
    editora: String
}

let livros = new Map();

livro.quantidadePaginas = 320
livro.autor = "JRRTOLKIEN"
livro.editora = "Brasil"

livros.set("senhor dos Aneis", livro);

livro.quantidadePaginas = 280
livro.autor = "Philip K. Dick"
livro.editora = "Brasil"
livros.set("Man in the High Castle", livro);

livro.quantidadePaginas = 310
livro.autor = "Andrzej Sapkowski"
livro.editora = "Brasil"
livros.set("Ultimo desejo", livro);



function book(nomeDoLivro) {

    if (livros.has(nomeDoLivro)) {
        return livros.get(nomeDoLivro);
    } else {
        return livros;
    }

}


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro
qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

let nomeLivro = "Ultimo desejo"
console.log(`O livro ${nomeLivro} tem ${book("Ultimo desejo").quantidadePaginas} Páginas`);
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer,
usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log(`O autor do livro ${nomeLivro} é ${book("Ultimo desejo").autor}`);
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer,
usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
nomeLivro = "Man in the High Castle"
console.log(`O livro ${nomeLivro}  foi publicado pela editora ${book("Ultimo desejo").editora}`);