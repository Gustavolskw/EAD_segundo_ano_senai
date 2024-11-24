// 1. Funções Generics:
// ○ Crie uma função generic primeiroElemento que retorna o
// primeiro elemento de um array de qualquer tipo.
// 2. Generics com Interfaces:
// ○ Defina uma interface Pilha<T> que suporte operações de 'push'
// e 'pop'.Implemente esta interface em uma classe.
// 3. Classes com Generics:
// ○ Implemente uma classe Mapa < K, V > que simule a funcionalidade
// de um objeto Map, permitindo adicionar e buscar pares de
// chave - valor.
// 4. Generics com Restrições:
// ○ Crie uma função que aceite somente arrays ou strings como
// argumento, fazendo uso de generics com restrições.
// 5. Generics Complexos:
// ○ Escreva uma função mergeObjects que combine dois objetos e
// retorne um novo objeto que combine as propriedades de ambos,
//     usando generics.


//1-
// Função generic que retorna o primeiro elemento de um array
function primeiroElemento<T>(array: T[]): T | undefined {
    return array.length > 0 ? array[0] : undefined;
}

// Exemplo de uso
console.log(primeiroElemento([1, 2, 3]));        // Output: 1
console.log(primeiroElemento(["a", "b", "c"]));  // Output: "a"
console.log(primeiroElemento([]));               // Output: undefined



//2-
// Definição da interface Pilha<T>
interface Pilha<T> {
    push(item: T): void;
    pop(): T | undefined;
}

// Implementação da interface em uma classe
class PilhaArray<T> implements Pilha<T> {
    private elementos: T[] = [];

    push(item: T): void {
        this.elementos.push(item);
    }

    pop(): T | undefined {
        return this.elementos.pop();
    }
}

// Exemplo de uso


//3-
// Implementação da classe Mapa<K, V>
class Mapa<K, V> {
    private dados: Map<K, V> = new Map();

    adicionar(chave: K, valor: V): void {
        this.dados.set(chave, valor);
    }

    buscar(chave: K): V | undefined {
        return this.dados.get(chave);
    }

    remover(chave: K): void {
        this.dados.delete(chave);
    }

    listar(): void {
        this.dados.forEach((valor, chave) => {
            console.log(`${chave}: ${valor}`);
        });
    }
}

// Exemplo de uso
const mapa = new Mapa<string, number>();
mapa.adicionar("idade", 30);
mapa.adicionar("altura", 180);
console.log(mapa.buscar("idade")); // Output: 30
mapa.listar(); // Output: idade: 30, altura: 180


//4-
// Função que aceita apenas arrays ou strings como argumento
function aceitarArrayOuString<T extends string | any[]>(input: T): T {
    console.log(input);
    return input;
}

// Exemplo de uso
aceitarArrayOuString([1, 2, 3]); // Output: [1, 2, 3]
aceitarArrayOuString("texto");   // Output: texto
// aceitarArrayOuString(42); // Erro: O tipo 'number' não é atribuível a 'string | any[]'


//5-
// Função que combina dois objetos usando generics
function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

// Exemplo de uso
const objeto1 = { nome: "Lucas", idade: 25 };
const objeto2 = { profissao: "Desenvolvedor", pais: "Brasil" };
const resultado = mergeObjects(objeto1, objeto2);

console.log(resultado);
// Output: { nome: "Lucas", idade: 25, profissao: "Desenvolvedor", pais: "Brasil" }

