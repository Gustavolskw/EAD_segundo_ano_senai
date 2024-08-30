
function impreimeValores(n) {
    for (i = 0; i <= n; i++) {
        console.log(i);
    }
}
console.log("\nTodos Valores");
impreimeValores(10);



function impreimeValoresImpares(n) {
    for (i = 0; i <= n; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
console.log("\nSomente Impares");
impreimeValoresImpares(20);



console.log("\nCom while");
i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}


while (i <= 100) {
    console.log(i);
    if (i == 50) {
        console.log("Quebrando LOOP");
        break;

    }
    i++;
}

console.log("\nCom For que não imprime 13");
for (i = 0; i <= 20; i++) {

    if (i == 13) {
        console.log("Devido a Valores inapropriados esse numero foi taxado");
        continue;
    }
    console.log(i);
}



let ladroes = ['HadadI', 'Lulu', 'Xandão', 'Bolinhos'];
console.log("\nImpressao de Ladroes");
for (let ladrao of ladroes) {
    console.log(ladrao);
}



