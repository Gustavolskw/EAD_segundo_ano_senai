let frutas = new Set();

frutas.add("Maçã");
frutas.add("Pêssego");
frutas.add("pêra");

console.log(...frutas);
frutas.add("Maçã")
console.log(...frutas);

console.log(frutas.has("Maçã"));

frutas.delete("pêra");

console.log(...frutas);

for (fruta of frutas) {
    console.log(fruta);
}

frutas.clear();

console.log(frutas.size);

const frutasAdd = ['Morango', "limao", "limao", "pêra", "eminem",]

let newSet = new Set(frutasAdd);

console.log([...newSet]);



