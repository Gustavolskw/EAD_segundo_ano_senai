/*
1. Criando um Convite: Use a concatenação de strings para criar um
convite. Inclua o nome do destinatário, o tipo de evento e a data, usando
variáveis.
2. Diário de Bordo: Escreva um pequeno diário de bordo usando template
literals, incluindo data, local e uma descrição do que aconteceu no dia.
3. Redator de Notícias: Crie uma string que represente uma notícia,
utilizando o método replace() para substituir um fato errado por um
correto.
4. Caixa de Comentários: Use o método trim() para limpar os
comentários dos usuários antes de publicá-los em um blog ou fórum.
5. Carta para um Amigo: Utilize \\n para formatar uma carta para um
amigo, com saudação, corpo da mensagem e despedida, cada um em
uma nova linha.
6. Citações Famosas: Crie uma string que inclua uma citação famosa de
uma pessoa, utilizando caracteres de escape para incluir aspas na
citação.
*/



//1-
let nomeConvidade = "Luiz"
let local = "Joinville Sqaure Garten"
let horas = "22:30"
let nomeDoAniversariante = "Pedro"
let motivo = "festa de aniversário"



let message = "Ola, " + nomeConvidade + ", o senhor esta sendo convidado a conparecer no" + local + ", as " + horas + ", para uma" + motivo + " do excentissimo" + nomeDoAniversariante + ", contamos com sua presença!"



//2-

let dia = "28/12/1498"
let local2 = "America"
let descricao = "Descobrimento de uma notavel terra ao sul da nova américa"


let diario = `no dia ${dia}, apos longa viagem diante das terras da ${local2}, houve o ${descricao}`


//3-
let noticiafake = "diante de tanta miséria foram encontradas 30 Milhoẽs de crianças de rua no brasil"


let noticaReal = noticiafake.replace("30", "3")

console.log(noticaReal);


//4-
let comentarioEspacado = "      OLA esse produto não é la grandes coisas    "

console.log(comentarioEspacado.trim());


//-5
let carta = "Ola Mario.\ncomo vai as ferias na ucrania, muita chuva de fogos\nespero que esteja sendo otimo.\nde: Gustavo"
console.log(carta);

//6-
let citacao = "Steve Jobs: \"A perspectiva importa. Você quer passar o resto de sua vida vendendo água com açúcar, ou você quer uma chance de mudar o mundo?\""
console.log(citacao);

