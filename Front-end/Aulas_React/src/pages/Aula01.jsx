import { useState } from "react"

export default function Aula01() {
    const [tamanhoFonte, setTamanhoFonte] = useState('text-base')
    const [corFonte, setCorFonte] = useState('text-black')
    return(
        <div className="min-h-screen bg-linear-to-br from-pink-500 to-purple-600">
            <h1 className="text-4xl font-bold text-pink-600 text-center  bg-fuchsia-300 p-2">TAILWIND FUNCIONANDO</h1>
                        <h1 className=" text-pink-600 text-center  bg-fuchsia-300 text-4xl ">Aula 01 aulinha do Douglas ❤️</h1>
            <h2 className="text-3xl font-bold bg-fuchsia-300 text-pink-400 text-center mb-4">1° Demonstração interativa do tamanho das fontes </h2>
            <div className="mb-8 p-4 bg-pink-200 rounded">
                <p className={`${tamanhoFonte} ${corFonte}`}>Texto de Exemplo: {tamanhoFonte} {corFonte}</p>
                <h3 className="text-pink-600 font-bold">Tamanhos do texto</h3>
                <button onClick={() => setTamanhoFonte('text-xs')} className="px-3 py-1 bg-pink-400 text-pink-950 font-bold rounded mr-2 mt-2 border-pink-950">text-xs (12px)</button>
                <button onClick={() => setTamanhoFonte('text-sm')} className="px-3 py-1 bg-pink-400 text-pink-950 font-bold rounded mr-2 mt-2 border-pink-950">text-sm (14px)</button>
                <button onClick={() => setTamanhoFonte('text-base')} className="px-3 py-1 bg-pink-400 text-pink-950 font-bold rounded mr-2 mt-2 border-pink-950">text-base (16px)</button>
                <button onClick={() => setTamanhoFonte('text-lg')} className="px-3 py-1 bg-pink-400 text-pink-950 font-bold rounded mr-2 mt-2 border-pink-950">text-lg (18px)</button>
                <button onClick={() => setTamanhoFonte('text-xl')} className="px-3 py-1 bg-pink-400 text-pink-950 font-bold rounded mr-2 mt-2 border-pink-950">text-xl (20px)</button>
                <button onClick={() => setTamanhoFonte('text-2xl')} className="px-3 py-1 bg-pink-400 text-pink-950 font-bold rounded mr-2 mt-2 border-pink-950">text-2xl (24px)</button>
                <h3 className=" text-pink-600 font-bold mt-5" >Cores das Fontes</h3>
                <button onClick={() => setCorFonte('text-black')} className="px-3 py-1 bg-black text-white font-bold rounded mr-2 mt-2">text-black</button>
                <button onClick={() => setCorFonte('text-purple-600')} className="px-3 py-1 bg-purple-600 text-white font-bold rounded mr-2 mt-2">text-purple</button>
                <button onClick={() => setCorFonte('text-red-800')} className="px-3 py-1 bg-red-800 text-white font-bold rounded mr-2 mt-2">text-red</button>
                <button onClick={() => setCorFonte('text-pink-500')} className="px-3 py-1 bg-pink-500 text-white font-bold rounded mr-2 mt-2">text-pink</button>
            </div>
        </div>
    )
}