let livros = new Map();


livros.set("J.R.R Tolkien", "O Hobbit");
livros.set("Sun Tzu", "A Arte da Guerra");
livros.set("J.K Rowling", "Harry Potter pedra Filosofal");


console.log(livros.get("Sun Tzu"))


for (let [chave, valor] of livros) {
    console.log(`${chave} : ${valor}`)
}


console.log(livros.size);

livros.delete("Sun Tzu");


console.log(livros.has("Sun Tzu") ? "SIM" : "NAO")



///fazer atividade 5 


let livro = {
    autor: "Sun Tzu",
    nome: "Arte da Guerra",
    ano: 1950,
    editora: "Lira Brasil"
}

let colecao = new Map();

colecao.set("Livro", livro);
colecao.set(5, "A guerra dos farrapos")
colecao.set("JRR Tolkien", "Senhor dos aneis");


let chavesArray = [...colecao.keys()]



chavesArray.forEach(chave => {
    console.log(chave)
})