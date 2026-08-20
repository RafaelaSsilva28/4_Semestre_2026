const URL = "https://x8ki-letl-twmt.n7.xano.io/api:ijUECDHD/marca";

fetch(URL)
    .then(resposta => resposta.json())
    .then(dados => console.log(dados));

