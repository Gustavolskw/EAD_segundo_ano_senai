let animais = ['leao', 'onça', 'cabra', 'canguçu', 'chacal']

function exibeArray(array) {
    let i = 1;
    array.forEach(item => {
        console.log(i + " " + item);
        i++;
    });
}


animais.push('Ovelha');
animais.push("Cegonha");
animais.push("Quiati");

console.log("\nArray Completo");
exibeArray(animais);


animais.shift();
console.log("\nArray removendo o primerio");
exibeArray(animais);


animais.unshift("Cabrito");
animais.unshift("Veado");

console.log("\nArray adicionando 2 a frente ");
exibeArray(animais);


animais[1] = "Girafa";
console.log("\nArray mudsando o segunda pisção para Girafa ");
exibeArray(animais);



let frutas = ["banana", "maça", "uva", "pera"]


console.log("\nContando array de frutas");
console.log(frutas.length);

console.log("\nArray de Frutas");
exibeArray(frutas);






