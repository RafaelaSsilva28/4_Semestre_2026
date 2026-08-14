import React, {useState, useEffect} from "react";
import { enderecoServidor } from "../utils";



export default function TelaLed() {
    const [statusLed, setStatusLed] = useState("Desconhecido");

    const buscarDados = async() => {
        try{
            const resposta = await fetch(`${enderecoServidor}/controleLed/status`)
            const dados = await resposta.json();
            setStatusLed(dados.status);
        }catch(error){
            console.log("Erro ao buscar dados");
            
        }
    };

    const enviarComando = async(comando) => {
        try{
            const resposta = await fetch(`${enderecoServidor}/controleLed/comando`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({comando})
            })
            console.log(resposta.message);
            buscarStatus()
        }
        catch(error){
            console.log("Erro ao enviar comando");
            
        }
    }

    useEffect(() =>{
        buscarDados();
        const intervalo = setInterval(buscarDados, 5000)
        return () => clearInterval(intervalo)
    })
    return (
        
        <div className="min-h-screen bg-linear-to-br from-blue-300 via-indigo-300 to-violet-300 text-white font-sans selection:bg-violet-200 selection:text-indigo-900 flex flex-col items-center">

            <h1 className="text-center text-4xl md:text-6xl font-black tracking-tight max-w-4xl leading-tight mt-10 text-white drop-shadow-md [text-shadow:0_4px_12px_rgba(59,130,246,0.8)]">

                Espaço do Projeto{" "}

                <span className="block underline decoration-blue-100 underline-offset-8 text-purple-200 mt-4">
                    Controle do LED via MQTT
                </span>

            </h1>
            
        <div className="flex items-center gap-4 mt-10 bg-purple-300 p-5 rounded-3xl">

    <p className="text-3xl font-black tracking-tight text-blue-100 drop-shadow-md [text-shadow:0_4px_12px_rgba(59,13,246,0.8)]">
        StatusLed: {statusLed}
    </p>

    <button onClick={() => enviarComando('LIGADO')} className="px-5 py-2 bg-gradient-to-tr from-purple-400 to-blue-400 text-white rounded-lg shadow-lg shadow-pink-500/40 transition-all duration-300 hover:scale-105 hover:shadow-xl">
        Ligar
    </button>

    <button onClick={() => enviarComando('DESLIGADO')} className="px-5 py-2 bg-gradient-to-tr from-purple-400 to-blue-400 text-white rounded-lg shadow-lg shadow-pink-500/40 transition-all duration-300 hover:scale-105 hover:shadow-xl">
        Desligar
    </button>
    </div>
        
            
        </div>
    );
}