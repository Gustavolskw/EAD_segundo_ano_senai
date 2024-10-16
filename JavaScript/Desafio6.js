/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual
qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do
campeonato,
e imprima o nome desse campeonato no console.
*/
let championship = "Catarinense"
console.log(championship);
/*
Declare uma variável chamada `teams`, que receberá um array com 5
elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes
devem
estar na ordem em que eles aparecem na tabela no momento da solução
desse
desafio.
*/
let teams = ["Criciuma", "Avai", "Marcilio Dias", "Figueirense", "Barra-SC", "Brusque"]
console.log('Times que estão participando do campeonato:', teams);
/*
Crie uma função chamada `showTeamPosition` com as seguintes
características:
- A função deve receber um número por parâmetro;
- A função deve retornar a frase:
"O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
- Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o
time
que está nessa posição no array criado acima com os nomes dos times.
--------------
Dica: lembre-se que arrays começam no índice zero, então a posição
passada
deve ser sempre um número a mais que o índice do array ;)
--------------
- A função só deve retornar a frase acima somente se o time estiver entre
os 5 primeiros.
- Se não houver time para a posição passada, deve retornar a mensagem:
"Não temos a informação do time que está nessa posição."
*/
function showteams(teams, position) {
    if (teams.length < position) {
        console.log("Não temos a informação do time que está nessa posição.");
    } else {
        console.log(`O time que está em ${position + 1}º lugar é o ${teams[position]}.`)
    }
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando
a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
for (let i = 0; i < 4; i++) {
    showteams(teams, i)
}
/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura
de
repetição "while".
*/
let number = 0;
while (number <= 30) {
    console.log(number);
    number++;

}
/*
Crie uma função chamada `convertToHex`, com as seguintes características:
- A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
- Escolha 5 cores que serão convertidas do nome da cor para o seu
equivalente hexadecimal (pode ser qualquer tom);
- Usando a estrutura switch, verifique se a cor passada por parâmetro é
algum hexa escolhido. Se for, retorne a frase:
"O hexadecimal para a cor [COR] é [HEXADECIMAL].";
- Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
a frase:
"Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(str) {
    switch (str) {
        case "red":
            return `O hexadecimal para a cor ${str} é [#FF0000].`;
        case "blue":
            return `O hexadecimal para a cor ${str} é [#0000ff ].`;;
        case "yellow":
            return `O hexadecimal para a cor ${str} é [#FFFF00].`;;
        case "white":
            return `O hexadecimal para a cor ${str} é [#FFFFFF].`;
        case "black ":
            return `O hexadecimal para a cor ${str} é [#000000].`;;
        default:
            return `Não temos o equivalente hexadecimal para ${str}`;
    }
}
/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada
acima.
*/
console.log(convertToHex("red"));
console.log(convertToHex("blue"));
console.log(convertToHex("yellow"));
console.log(convertToHex("magenta"));
console.log(convertToHex("light blue"));
console.log(convertToHex("dark"));
console.log(convertToHex("black"));
console.log(convertToHex("white"));
