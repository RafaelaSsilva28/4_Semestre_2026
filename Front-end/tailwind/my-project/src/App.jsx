import { useState, useEffect } from 'react';

export default function App() {
  const [personagens, setPersonagens] = useState([]);
 
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch(`https://x8ki-letl-twmt.n7.xano.io/api:115Iu2S9/xpto`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setPersonagens(dados);
        setCarregando(false);          
      })
      .catch((erro) => {
        console.error('Erro ao buscar dados:', erro);
        setCarregando(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-emerald-400">
        Galeria de Personagens
      </h1>

      {carregando ? (
        <p className="text-center text-xl text-slate-400">Carregando personagens...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {personagens.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-emerald-500 transition-all shadow-lg"
            >
              <img
                src={item.url_imagem}
                alt={item.nome}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold truncate">{item.nome}</h2>
                <div className="flex items-center gap-2 mt-2">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      item.status === 'Alive' ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  />
                  <span className="text-sm text-slate-300">
                    {item.status} - {item.especie}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}