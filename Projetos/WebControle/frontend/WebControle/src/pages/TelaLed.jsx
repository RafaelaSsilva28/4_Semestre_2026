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

            <p className=" text-3xl md:text-3xl font-black tracking-tight max-w-4xl leading-tight mt-10 text-blue-100 drop-shadow-md [text-shadow:0_4px_12px_rgba(59,13,246,0.8)]">
                StatusLed: {statusLed}
            </p>

        </div>
    );
}