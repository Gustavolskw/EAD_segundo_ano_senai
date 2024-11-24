// 1. Interface para Funções:
// ○ Defina uma interface Contato com propriedades para email e
// telefone.Crie uma função que aceite um Contato e imprima os
// detalhes de contato.
// 2. Usando Type Alias em Funções:
// ○ Crie um type alias OperacaoMatematica que define uma função
// que aceita dois números e retorna um número.Implemente
// funções para soma, subtração, multiplicação e divisão usando
// este alias.
// 3. Interface com Métodos Opcionais:
// ○ Crie uma interface Configuracao com uma propriedade opcional
// background(string).Escreva uma função que defina a
// configuração de um aplicativo e trate a ausência de background.
// 4. Funções com Type Alias de União:
// ○ Implemente uma função que aceite string ou string[] como
// entrada e retorne uma string sempre, tratando adequadamente a
// entrada caso seja um array.
// 5. Parâmetros Complexos com Interfaces:
// ○ Defina uma interface Jogo com nome, preco e um método
// opcional jogar.Crie uma função que aceite um Jogo e imprima
// uma descrição ou convide o usuário a jogar, se disponível.



//1-
// Definição da interface Contato
interface Contato {
    email: string;
    telefone: string;
}

// Função que aceita um Contato e imprime os detalhes
function imprimirContato(contato: Contato): void {
    console.log(`Email: ${contato.email}, Telefone: ${contato.telefone}`);
}

// Exemplo de uso
const contato: Contato = { email: "exemplo@email.com", telefone: "1234-5678" };
imprimirContato(contato);


//2-
// Definição do type alias OperacaoMatematica
type OperacaoMatematica = (a: number, b: number) => number;

// Implementação das operações
const soma: OperacaoMatematica = (a, b) => a + b;
const subtracao: OperacaoMatematica = (a, b) => a - b;
const multiplicacao: OperacaoMatematica = (a, b) => a * b;
const divisao: OperacaoMatematica = (a, b) => b !== 0 ? a / b : Infinity;

// Exemplo de uso
console.log(soma(10, 5));        // Output: 15
console.log(subtracao(10, 5));   // Output: 5
console.log(multiplicacao(10, 5)); // Output: 50
console.log(divisao(10, 5));     // Output: 2


//3-
// Definição da interface Configuracao
interface Configuracao {
    background?: string;
}

// Função para definir a configuração
function configurarApp(config: Configuracao): void {
    if (config.background) {
        console.log(`Configuração definida com background: ${config.background}`);
    } else {
        console.log("Nenhum background definido. Usando padrão.");
    }
}

// Exemplo de uso
configurarApp({ background: "azul" });
configurarApp({});

//4-
// Função que aceita string ou string[] e retorna sempre uma string
function processarEntrada(input: string | string[]): string {
    if (Array.isArray(input)) {
        return input.join(", "); // Converte array em string separada por vírgulas
    }
    return input; // Retorna a string diretamente
}

// Exemplo de uso
console.log(processarEntrada("Texto único"));       // Output: Texto único
console.log(processarEntrada(["Texto1", "Texto2"])); // Output: Texto1, Texto2



//5-
// Definição da interface Jogo
interface Jogo {
    nome: string;
    preco: number;
    jogar?(): void;
}

// Função que aceita um Jogo e imprime uma descrição ou convida para jogar
function descricaoJogo(jogo: Jogo): void {
    console.log(`Jogo: ${jogo.nome}, Preço: R$${jogo.preco.toFixed(2)}`);
    if (jogo.jogar) {
        console.log("Pronto para jogar? Vamos lá!");
        jogo.jogar();
    } else {
        console.log("Este jogo não tem uma função de jogabilidade.");
    }
}

// Exemplo de uso
const jogo1: Jogo = {
    nome: "Xadrez",
    preco: 39.99,
    jogar: () => console.log("Jogando Xadrez!")
};
const jogo2: Jogo = { nome: "Cartas", preco: 19.99 };

descricaoJogo(jogo1);
descricaoJogo(jogo2);
