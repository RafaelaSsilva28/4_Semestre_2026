import React, { useState, useEffect } from "react";
import { enderecoServidor } from "../utils";

import { GiPlantRoots } from "react-icons/gi";
import { LuDroplets, LuExternalLink } from "react-icons/lu";

export default function TelaUmid() {

    const [umidadeSolo, setUmidadeSolo] = useState("Desconhecido");

    const buscarDados = async () => {

        try {

            const resposta = await fetch(
                `${enderecoServidor}/controleUmid/umidade`
            );

            const dados = await resposta.json();

            console.log("DADOS RECEBIDOS:", dados);

            setUmidadeSolo(dados.umidadeSolo);

        } catch (error) {

            console.log("Erro ao buscar umidade do solo:", error);

        }
    };

    const verificarCondicao = () => {

        const umidade = Number(umidadeSolo);

        if (umidade >= 80) {
            return "Muito Umido";

        } else if (umidade >= 50) {
            return "Ideal";

        } else if (umidade >= 20) {
            return "Seco";

        } else {
            return "Muito Seco";
        }
    };

    const estiloPlanta = () => {

        const umidade = Number(umidadeSolo);

        if (umidade >= 80) {
            return "text-blue-100 scale-110";

        } else if (umidade >= 50) {
            return "text-white scale-110";

        } else if (umidade >= 20) {
            return "text-white/70 scale-95";

        } else {
            return "text-white/40 scale-90";
        }
    };

    const estiloGotas = () => {

        const umidade = Number(umidadeSolo);

        if (umidade >= 80) {
            return "text-blue-100 scale-125 animate-pulse";

        } else if (umidade >= 50) {
            return "text-cyan-100 scale-110";

        } else if (umidade >= 20) {
            return "text-white/60 scale-90";

        } else {
            return "text-white/30 scale-75";
        }
    };

    useEffect(() => {

        buscarDados();

        const intervalo = setInterval(buscarDados, 5000);

        return () => clearInterval(intervalo);

    }, []);

    return (

        <div className="min-h-screen bg-linear-to-br from-blue-300 via-indigo-300 to-violet-300 text-white font-sans flex flex-col items-center">

            <h1 className="text-center text-4xl md:text-6xl font-black tracking-tight max-w-4xl leading-tight mt-10 text-white drop-shadow-md [text-shadow:0_4px_12px_rgba(59,130,246,0.8)]">

                Espaço do Projeto{" "}

                <span className="block underline decoration-blue-100 underline-offset-8 text-purple-200 mt-4">
                    Monitoramento da Umidade do Solo
                </span>

            </h1>

            <div className="flex flex-col items-center gap-5 mt-10 bg-purple-300/70 backdrop-blur-md p-7 rounded-3xl shadow-xl border border-white/30">

                <p className="text-3xl font-black tracking-tight text-blue-100 drop-shadow-md [text-shadow:0_4px_12px_rgba(59,13,246,0.8)]">
                    Umidade do Solo: {umidadeSolo}%
                </p>

                <p className="text-2xl font-bold text-white">
                    Condição: {verificarCondicao()}
                </p>

                <div className="relative flex items-center justify-center mt-2">

                    <GiPlantRoots
                        className={`text-9xl drop-shadow-lg transition-all duration-700 ${estiloPlanta()}`}
                    />

                    <LuDroplets
                        className={`absolute -right-7 top-2 text-5xl drop-shadow-md transition-all duration-700 ${estiloGotas()}`}
                    />

                </div>

                <div className="flex gap-2 mt-1">

                    <span className="w-14 h-1.5 bg-white/70 rounded-full"></span>

                    <span className="w-8 h-1.5 bg-white/50 rounded-full"></span>

                    <span className="w-12 h-1.5 bg-white/70 rounded-full"></span>

                </div>

                <p className="text-blue-50 text-sm font-medium">
                    Monitoramento em tempo real
                </p>

                <a
                    href="https://wokwi.com/projects/472979502310558721"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center gap-3 px-6 py-3 rounded-xl border border-white/40 bg-white/10 backdrop-blur-md text-white font-semibold shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl"
                >
                    <GiPlantRoots className="text-xl" />

                    <span>
                        Visualizar e testar no Wokwi
                    </span>

                    <LuExternalLink className="text-lg" />
                </a>

            </div>

        </div>
    );
}