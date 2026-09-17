//estriutura hierarquica de pastas
const pastaRaiz = {
    nome: "Menu Documentos", 
    filhos: [
        {
            nome: "Fotos",
            filhos: [
                {nome: "ferias.png", filhos: [] }
            ]
        },
        {nome: "curriculo.pdf", filhos: []}
    ]
};

//acessando subpastas 
console.log(pastaRaiz.nome);
console.log(pastaRaiz.filhos[0].nome);
console.log(pastaRaiz.filhos[0].filhos[0].nome);
