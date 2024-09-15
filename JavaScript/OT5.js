let area = 4
let altura = 5

function calculaRetangulo(ar, al) {
    return al * ar;
}


console.log(calculaRetangulo(altura, area));




let randnumber = 5;


function verificaPar(n) {
    if (n % 2 == 0) {

        return true;

    }
    return false;

}

console.log(verificaPar(randnumber));

let pol = 55

function retornacentimetro(val) {
    return val * 2.54
}

console.log(retornacentimetro(pol) + " Centimetros")

let alturaP = 1.78
let peso = 80

function calculaIMC(altura, pes) {
    return pes / (altura * altura)
}

console.log(calculaIMC(alturaP, peso));

let validacaoString = "TUDO ESTA ESCRITO EM MAIUSCULO"

function stringParaLower(strin) {
    return strin.toLowerCase();;
}

console.log(stringParaLower(validacaoString));
let valor = 4

const multiplo = (as) => as * 10


console.log(multiplo(valor));