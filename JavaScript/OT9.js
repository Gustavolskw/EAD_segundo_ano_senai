
// const readline = require('node:readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

//1- 
class Animal {

    constructor(som, nome) {
        this.som = som;
        this.nome = nome;
    }

    falar() {
        console.log(`esse é meu som ${this.som}`)
    }

}




let peru = new Animal("glu glu glu glu glu", "João")

peru.falar();




//2-

class Veiculo {
    constructor(marca, modelo, velocidadeMaxima) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
    }

    descrever() {
        console.log(`Veiculo da Marca ${this.marca}, Modelo: ${this.modelo}, com sua velocidade maxima de ${this.velocidadeMaxima}Km/h`)
    }
}


let novoCarro = new Veiculo("BMW", "Esportivo", 320)
novoCarro.descrever();

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
class Estudante extends Pessoa {
    constructor(nome, idade, notas) {
        super(nome, idade);
        this.notas = notas;
    }

    calcularMedia() {
        let totalNotas = 0;
        let media;
        this.notas.forEach(nota => {
            totalNotas += nota
        });
        return media = totalNotas / this.notas.length;
    }
}


let myNotas = [5, 10, 8, 7]
let gustavo = new Estudante("Gustavo", 20, myNotas)


console.log(gustavo.calcularMedia());


class Utilitario {

    static convertFarenhidtToCelsius(fTemp) {
        return (fTemp - 32) / 1.8;
    }
    static convertKelvinToCelius(kTemp) {
        return kTemp - 273;
    }
}


class Jogo {
    static generateRandomRumber() {
        return Math.floor(Math.random() * 10);
    }
}


// rl.question('Digite seu número: ', number => {


//     let numerogerado = Jogo.generateRandomRumber();

//     if (numerogerado == number) {
//         console.log(`acertou!!!! seu numbero${number} numero gerado: ${numerogerado}`);
//     } else {

//         console.log(`errou!!!! seu numero${number} numero gerado: ${numerogerado}`);
//     }
//     rl.close();
// });



class ContaBancaria {
    #saldo
    constructor(saldoInit) {
        this.#saldo = saldoInit;
    }

    despositar(valor) {
        this.#saldo += valor;
    }

    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
        } else {
            console.log("Saldo não pode ficar negativo, transação não efetuada");
        }
    }

    getSaldo() {
        return this.#saldo;
    }
}

let myacc = new ContaBancaria(2000);




myacc.despositar(500);


console.log(myacc.getSaldo());


myacc.sacar(2000);

console.log(myacc.getSaldo());


myacc.sacar(2000);

console.log(myacc.getSaldo());