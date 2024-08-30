const nome = "Gustavo";
let idade = 1;
var comida = "Strogonoff";

function showName() {
    if (idade === 21) {
        console.log(`Meu nome é ${nome}, tenho ${idade} anos de idade, e gosto de comer ${comida}`);
        return;
    }

    console.log(idade);
    console.log("acho que não ....");
    console.log("Aumenta");




    idade++;
    setTimeout(showName, 500);
}


showName();