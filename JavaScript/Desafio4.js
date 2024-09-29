/*
    Declare uma variável chamada`isTruthy`, e atribua a ela uma função que
recebe
um único parâmetro como argumento.Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou`false`
para o contrário.
*/


var isTruthy = function isTruthy(value) {
    return value === true || value === false;
}


// Invoque a função criada acima, passando todos os tipos de valores `falsy`


isTruthy(false);


/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/


isTruthy(true);


/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

let carro = {
    marca: String,
    modelo: String,
    placa: String,
    ano: Number,
    cor: String,
    quantasPortas: Number,
    assentos: Number = 5,
    pessoas: Number = 0,

}


/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
var mudarCor = function mudarCor(cor) {

    carro.cor = cor;
}
/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
var obterCor = function obterCor() {
    return carro.cor;
}
/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
var obterModelo = function obterModelo() {
    return carro.modelo;
}
/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
var obterMarca = function obterMarca() {
    return carro.marca;
}
/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
var obterMarcaModelo = function obterMarcaModelo() {
    return `[${carro.marca}] [${carro.modelo}]`;
}



/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro.
Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas
por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
console.log(carro.assentos);
var preencherOCarro = function preencherOCarro(pessoas) {

    if (pessoas > carro.assentos) {
        return `Limite maximo de assentos excedido em ${pessoas - carro.assentos}`
    }
    if (carro.pessoas + pessoas > carro.assentos) {
        let vagas = carro.assentos - carro.pessoas
        return `Só cabem mais ${carro.assentos - carro.pessoas} ${vagas <= 1 ? "pessoa" : "pessoas"}`
    }
    if (pessoas > 0) {
        if (carro.pessoas == carro.assentos) {
            return "O carro já está lotado!"
        }
    }

    carro.pessoas += pessoas
    return `Já temos ${carro.pessoas} pessoas no carro!`;
}


/*
Agora vamos verificar algumas informações do carro. Para as respostas
abaixo,
utilize sempre o formato de invocação do método (ou chamada da
propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.
Qual a cor atual do carro?
*/


console.log(obterCor()); //[Function: String]





// Mude a cor do carro para vermelho.
mudarCor("Vermelho")
// E agora, qual a cor do carro?
console.log(obterCor());//Vermelho
// Mude a cor do carro para verde musgo.
mudarCor("Verde Musgo")
// E agora, qual a cor do carro?
console.log(obterCor());//Verde Musgo

// Qual a marca e modelo do carro?
carro.marca = "BMW"
carro.modelo = "Esportivo"
console.log(obterMarcaModelo());//[function String() { [native code] }] function String() { [native code] } / [BMW] [Esportivo]

// Adicione 2 pessoas no carro.
console.log(preencherOCarro(2));

// Adicione mais 4 pessoas no carro.
console.log(preencherOCarro(4));

// Faça o carro encher.

console.log(preencherOCarro(3));
// Tire 4 pessoas do carro.
console.log(preencherOCarro(-4));
// Adicione 10 pessoas no carro.
console.log(preencherOCarro(10));
// Quantas pessoas temos no carro?
console.log(preencherOCarro(0));