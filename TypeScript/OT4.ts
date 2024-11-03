/*
Exercícios para Praticar
1. Implementando Funções:
○ Escreva uma função concatenaNomes que recebe dois
parâmetros, nome e sobrenome, e retorna o nome completo.
2. Uso de Arrow Functions:
○ Converta a função soma para uma arrow function e implemente a
mesma lógica.
3. Explorando Parâmetros Opcionais:
○ Modifique a função saudacao para incluir um parâmetro opcional
titulo, que se usado, precederá o nome no cumprimento.
4. Trabalhando com Overloads:
○ Crie uma função ajustar que pode receber tanto um number
quanto uma string, retornando o valor ajustado conforme o tipo.
5. Função com Valor Padrão:
○ Implemente uma função incrementa que recebe um número e
um valor de incremento opcional, que, se não fornecido, será 1.*/

//-1
function concatenaNomes(nome: string, sobrenome: string): string {
    return `${nome} ${sobrenome}`;
}
console.log(concatenaNomes("João", "Silva")); //  "João Silva"


//2-
const soma = (a: number, b: number): number => a + b;
console.log(soma(5, 10)); //  15


//3-
function saudacao(nome: string, titulo?: string): string {
    return titulo ? `${titulo} ${nome}` : `Olá, ${nome}`;
}
console.log(saudacao("Maria")); //  "Olá, Maria"
console.log(saudacao("Maria", "Dra.")); //  "Dra. Maria"


//4-
function ajustar(valor: number): number;
function ajustar(valor: string): string;
function ajustar(valor: any): any {
    if (typeof valor === "number") {
        return valor * 2;
    } else if (typeof valor === "string") {
        return valor.toUpperCase();
    }
}
console.log(ajustar(5));        //  10
console.log(ajustar("texto"));  //  "TEXTO"



//5-
function incrementa(num: number, incremento: number = 1): number {
    return num + incremento;
}
console.log(incrementa(10));      // 11
console.log(incrementa(10, 5));   // 15
