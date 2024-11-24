// 1. Trabalhando com Union e Intersection:
// ○ Crie uma função que aceite um parâmetro que pode ser um
// string ou um number, e outro parâmetro que é uma interseção
// de dois tipos com diferentes propriedades.
// 2. Explorando Conditional Types:
// ○ Defina um tipo condicional que mude com base em um valor
// booleano passado, alternando entre dois tipos definidos.
// 3. Aplicando Partial e Readonly:
// ○ Use Partial para criar uma função que aceite configurações
// parciais de um objeto.Use Readonly para garantir que nenhum
// objeto passado para uma função específica possa ser modificado.
// 4. Utilizando Record:
// ○ Implemente uma função que use Record para mapear nomes de
// países para suas capitais e permita busca por qualquer país
// fornecido.
// 5. Generics com Utilitários:
// ○ Crie uma função generic que aceite um tipo e retorne um array de
// Partial desse tipo, permitindo a criação de listas com
// configurações parciais.


//1-
// Definição dos tipos
type TipoA = { propriedadeA: string };
type TipoB = { propriedadeB: number };

// Função que aceita um parâmetro de união e outro de interseção
function processarDados(
    parametro1: string | number,
    parametro2: TipoA & TipoB
): void {
    console.log(`Parâmetro 1: ${parametro1}`);
    console.log(`Parâmetro 2 - PropriedadeA: ${parametro2.propriedadeA}, PropriedadeB: ${parametro2.propriedadeB}`);
}

// Exemplo de uso
processarDados("Texto", { propriedadeA: "Exemplo", propriedadeB: 42 });
// Output:
// Parâmetro 1: Texto
// Parâmetro 2 - PropriedadeA: Exemplo, PropriedadeB: 42


//2-
// Tipo condicional
type TipoCondicional<T extends boolean> = T extends true ? { ativo: boolean } : { inativo: boolean };

// Exemplo de uso
const objetoAtivo: TipoCondicional<true> = { ativo: true };
const objetoInativo: TipoCondicional<false> = { inativo: false };

console.log(objetoAtivo); // Output: { ativo: true }
console.log(objetoInativo); // Output: { inativo: false }


//3-
// Objeto de configuração
interface Configuracao {
    tema: string;
    modoEscuro: boolean;
    idioma: string;
}

// Função que aceita configurações parciais
function atualizarConfiguracao(config: Partial<Configuracao>): void {
    console.log("Configurações atualizadas:", config);
}

// Função que aceita apenas objetos readonly
function mostrarConfiguracao(config: Readonly<Configuracao>): void {
    console.log("Configurações atuais:", config);
    // config.tema = "Outro tema"; // Erro: não é possível alterar propriedades de um objeto Readonly
}

// Exemplo de uso
atualizarConfiguracao({ tema: "Claro" }); // Output: Configurações atualizadas: { tema: "Claro" }

const configuracaoAtual: Readonly<Configuracao> = { tema: "Escuro", modoEscuro: true, idioma: "PT-BR" };
mostrarConfiguracao(configuracaoAtual); // Output: Configurações atuais: { tema: "Escuro", modoEscuro: true, idioma: "PT-BR" }



//4-
// Uso de Record para mapear países e capitais
const paisesCapitais: Record<string, string> = {
    Brasil: "Brasília",
    Alemanha: "Berlim",
    Japão: "Tóquio",
    França: "Paris"
};

// Função para buscar a capital de um país
function buscarCapital(pais: string): string | undefined {
    return paisesCapitais[pais];
}

// Exemplo de uso
console.log(buscarCapital("Brasil")); // Output: Brasília
console.log(buscarCapital("Alemanha")); // Output: Berlim
console.log(buscarCapital("Espanha")); // Output: undefined


//5-
// Função que retorna um array de Partial de um tipo
function criarListaParcial<T>(itens: Partial<T>[]): Partial<T>[] {
    return itens;
}

// Exemplo de uso com um tipo definido
interface Usuario {
    nome: string;
    idade: number;
    ativo: boolean;
}

const listaUsuarios = criarListaParcial<Usuario>([
    { nome: "Lucas" },
    { nome: "Ana", idade: 30 },
    { ativo: true }
]);

console.log(listaUsuarios);
// Output:
// [ { nome: "Lucas" }, { nome: "Ana", idade: 30 }, { ativo: true } ]
