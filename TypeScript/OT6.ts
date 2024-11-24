// 1. Criando e Instanciando Classes:
// ○ Defina uma classe Carro com propriedades para marca, modelo,
//     e ano.Adicione um método que imprime uma descrição do carro.
// 2. Explorando Herança:
// ○ Crie uma classe CarroEletrico que herda de Carro e adiciona
// uma propriedade para a capacidade da bateria.
// 3. Uso de Modificadores de Acesso:
// ○ Modifique a classe Conta para prevenir acesso direto ao saldo,
//     fornecendo métodos para depositar e obter o saldo atual.
// 4. Implementando Polimorfismo:
// ○ Crie uma classe ContaCorrente que sobrescreve o método
// calcularJuros com uma taxa específica para contas correntes.
// 5. Classes com Interfaces:
// ○ Implemente uma interface Motorizavel com um método
// ligarMotor.Crie classes Barco e Motocicleta que
// implementam esta interface.


//1-
// Definição da classe Carro
class Carro {
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    // Método para imprimir uma descrição do carro
    descricao(): void {
        console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`);
    }
}

// Exemplo de uso
const carro = new Carro("Toyota", "Corolla", 2023);
carro.descricao(); // Output: Carro: Toyota Corolla, Ano: 2023




//2-
// Classe CarroEletrico herdando de Carro
class CarroEletrico extends Carro {
    capacidadeBateria: number; // Capacidade da bateria em kWh

    constructor(marca: string, modelo: string, ano: number, capacidadeBateria: number) {
        super(marca, modelo, ano);
        this.capacidadeBateria = capacidadeBateria;
    }

    // Método adicional para descrever a bateria
    descricao(): void {
        super.descricao();
        console.log(`Capacidade da bateria: ${this.capacidadeBateria} kWh`);
    }
}

// Exemplo de uso
const carroEletrico = new CarroEletrico("Tesla", "Model S", 2023, 100);
carroEletrico.descricao();
// Output:
// Carro: Tesla Model S, Ano: 2023
// Capacidade da bateria: 100 kWh


//3-
// Classe Conta com modificadores de acesso
class Conta {
    private saldo: number; // Propriedade privada

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    // Método para depositar dinheiro
    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
        } else {
            console.log("O valor do depósito deve ser positivo.");
        }
    }

    // Método para obter o saldo atual
    obterSaldo(): number {
        return this.saldo;
    }
}

// Exemplo de uso
const conta = new Conta(1000);
conta.depositar(500);
console.log(`Saldo atual: R$${conta.obterSaldo().toFixed(2)}`);
// Output:
// Depósito de R$500.00 realizado com sucesso.
// Saldo atual: R$1500.00



//4 -
// Classe base Conta com método calcularJuros
class Conta {
    saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    // Método para calcular juros (sobrescrito na subclasse)
    calcularJuros(): number {
        return this.saldo * 0.01; // Juros padrão de 1%
    }
}

// Classe ContaCorrente sobrescrevendo calcularJuros
class ContaCorrente extends Conta {
    calcularJuros(): number {
        return this.saldo * 0.005; // Juros de 0.5% para conta corrente
    }
}

// Exemplo de uso
const contaPadrao = new Conta(1000);
console.log(`Juros padrão: R$${contaPadrao.calcularJuros().toFixed(2)}`); // Output: R$10.00

const contaCorrente = new ContaCorrente(1000);
console.log(`Juros conta corrente: R$${contaCorrente.calcularJuros().toFixed(2)}`); // Output: R$5.00


//5-
// Definição da interface Motorizavel
interface Motorizavel {
    ligarMotor(): void;
}

// Classe Barco implementando Motorizavel
class Barco implements Motorizavel {
    ligarMotor(): void {
        console.log("O motor do barco foi ligado!");
    }
}

// Classe Motocicleta implementando Motorizavel
class Motocicleta implements Motorizavel {
    ligarMotor(): void {
        console.log("O motor da motocicleta foi ligado!");
    }
}

// Exemplo de uso
const barco = new Barco();
barco.ligarMotor(); // Output: O motor do barco foi ligado!

const motocicleta = new Motocicleta();
motocicleta.ligarMotor(); // Output: O motor da motocicleta foi ligado!
