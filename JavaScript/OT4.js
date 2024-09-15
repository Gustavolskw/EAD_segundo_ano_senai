
const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});



let idade = 78;

if (idade < 13) {
    console.log("criança");
} else if (idade > 13 && idade < 17) {
    console.log("adolescente");
} else if (idade > 17 && idade < 65) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}


// rl.question('Digite seu número: ', number => {
//     let hideNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1);
//     console.log("Número sorteado:", hideNumber);

//     // Converte o input 'number' para um número inteiro
//     switch (parseInt(number)) {
//         case hideNumber:
//             console.log("Acertou!");
//             break;
//         default:
//             console.log("Errou!");
//             break;
//     }

//     rl.close();
// });


rl.question('Digite seu número: ', number => {


    // Converte o input 'number' para um número inteiro
    switch (parseInt(number)) {
        case 7:
            console.log("Aprovado!");
            break;
        case 8:
            console.log("Aprovado!");
            break;
        case 9:
            console.log("Aprovado!");
            break;
        case 10:
            console.log("Aprovado!");
            break;
        default:
            console.log("Reprovado!");
            break;
    }

    rl.close();
});

