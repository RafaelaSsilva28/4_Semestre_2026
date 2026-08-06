import { useState } from "react"
import Botao from "../components/Botao"
export default function Aula02() {
    const [corFundo, setCorFundo] = useState('bg-white')
    const [degrade, setDegrade] = useState('')
    const [tamanhoFundo, setTamanhoFundo] = useState('')
    const [posicaoFundo, setPosicaoFundo] = useState('')
    const [repeticaoFundo, setRepeticaoFundo] = useState('')
    return(
        <div className="min-h-screen bg-linear-to-br from-pink-500 to-purple-600">
            <div className="text-4xl text-pink-600 text-center  bg-fuchsia-300 p-2">
            <h1>Aula 02 ultimo dia da aulinha do Douglas ❤️</h1>
            <h2 className="text-3xl font-bold bg-fuchsia-300 text-pink-400  mb-4">2° Backgrounds, gradientes, imagens e responsividade</h2>
            </div>
            <div className="mb-8 p-4 bg-pink-300 rounded mt-4">
                <p className=" text-pink-600 font-bold m-2">Use bg-* para cores solidas</p>
                <div className={`${corFundo} p-8`}>{corFundo}</div>
                <h3 className=" text-pink-600 font-bold mt-5">Cores de Fundo</h3>
                <div className="flex flex-wrap gap-2 my-4">
                    <Botao funcao={setCorFundo} classe='bg-pink-600 '/>
                    <Botao funcao={setCorFundo} classe='bg-purple-600 '/>
                    <Botao funcao={setCorFundo} classe='bg-[#036F8A]'/>
                    <Botao funcao={setCorFundo} classe='bg-[#038F8B]'/>
                    <Botao funcao={setCorFundo} classe='bg-pink-400'/>
                </div>
                <div className={`${degrade} p-8`}>{degrade}</div>
                <h3 className=" text-pink-600 font-bold mt-5">Gradientes interativos (degradês)</h3>
                <div className="flex flex-wrap gap-2 my-4">
                    <Botao funcao={setDegrade} classe='bg-gradient-to-r from-purple-400 to-pink-500'/>
                    <Botao funcao={setDegrade} classe='bg-gradient-to-l from-blue-200 to-purple-600'/>
                    <Botao funcao={setDegrade} classe='bg-gradient-to-tr from-green-400 to-red-500'/>
                    <Botao funcao={setDegrade} classe='bg-gradient-to-b from-purple-600 to-pink-600'/>
                    <Botao funcao={setDegrade} classe='bg-gradient-to-bl from-purple-400 to-pink-500'/>
                    <Botao funcao={setDegrade} classe='bg-gradient-to-t from-blue-500 via-blue-200 to-black'/>
                    <Botao funcao={setDegrade} classe='bg-gradient-to-tl from-yellow-500 to-red-200'/>
                </div>

                <h3 className=" text-pink-600 font-bold m-3">Imagens e seus controles</h3>
                <div className={`h-80 bg-pink-200 bg-[url(https://picsum.photos/150)] 
                    ${tamanhoFundo} ${posicaoFundo} ${repeticaoFundo}`}>
                </div>
                <h4 className=" text-pink-600 font-bold m-3">Tamanho (background-size)</h4>
                <div className="flex flex-wrap gap-2 my-4">
                    <Botao funcao={setTamanhoFundo} classe='bg-auto'/>
                    <Botao funcao={setTamanhoFundo} classe='bg-cover'/>
                    <Botao funcao={setTamanhoFundo} classe='bg-contain'/>
                </div>
                <h4 className=" text-pink-600 font-bold m-3">Posição (background-position)</h4>
                <div className="flex flex-wrap gap-2 my-4">
                    <Botao funcao={setPosicaoFundo} classe='bg-left-top'/>
                    <Botao funcao={setPosicaoFundo} classe='bg-center'/>
                    <Botao funcao={setPosicaoFundo} classe='bg-right-bottom'/>
                </div>
                <h4 className=" text-pink-600 font-bold m-3">Repetição (background-repeat)</h4>
                <div className="flex flex-wrap gap-2 my-4">
                    <Botao funcao={setRepeticaoFundo} classe='bg-repeat'/>
                    <Botao funcao={setRepeticaoFundo} classe='bg-no-repeat'/>
                    <Botao funcao={setRepeticaoFundo} classe='bg-repeat-x'/>
                    <Botao funcao={setRepeticaoFundo} classe='bg-repeat-y'/>
                </div>

            </div>
        </div>
    )
}