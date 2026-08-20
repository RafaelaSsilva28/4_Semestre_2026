const URL = "https://x8ki-letl-twmt.n7.xano.io/api:ijUECDHD/marca"

const novoItem = {
    nome: "Rafaela"
};

fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(novoItem)
})
.then(resposta => resposta.json())
.then(confirmacao => console.log("O servidor salvou isto:", confirmacao));