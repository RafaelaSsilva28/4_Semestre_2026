//usando o Map nativo do JS
const contatos = new Map();

//guardando valores vinculados a chaves
contatos.set("Ana", "9999-1111");
contatos.set("Beto", "3239-1231");

//busca direta e instantanea pela chave (sem precisar percorrer uma lista)
console.log(contatos.get("Ana")); //9999-1111
