import React, { useState, useEffect } from "react";
import { enderecoServidor } from "../utils";

import {
    LuCloudRain,
    LuCloudDrizzle,
    LuSun,
    LuExternalLink,
    LuCloud,
    LuHouse
} from "react-icons/lu";

export default function TelaChuva() {

    const [statusChuva, setStatusChuva] = useState("Desconhecido");

    const buscarDados = async () => {

        try {

            const resposta = await fetch(
                `${enderecoServidor}/controleChuva/status`
            );

            const dados = await resposta.json();

            console.log("DADOS DA CHUVA:", dados);

            setStatusChuva(dados.statusChuva);

        } catch (error) {

            console.log("Erro ao buscar status da chuva:", error);

        }
    };


    const verificarMensagem = () => {

        if (statusChuva === "Chuva Forte") {

            return "Chuva intensa detectada";

        } else if (statusChuva === "Chuva Fraca") {

            return "Chuva leve detectada";

        } else if (statusChuva === "Garoa") {

            return "Garoa detectada";

        } else if (statusChuva === "Tempo Seco") {

            return "Nenhuma chuva detectada";

        } else {

            return "Aguardando informações do sensor";
        }
    };


    const verificarTeto = () => {

        if (statusChuva === "Tempo Seco") {

            return "Aberto";

        } else if (
            statusChuva === "Chuva Forte" ||
            statusChuva === "Chuva Fraca" ||
            statusChuva === "Garoa"
        ) {

            return "Fechado";

        } else {

            return "Aguardando";
        }
    };


    const desenhoClima = () => {

        if (statusChuva === "Chuva Forte") {

            return (

                <div className="relative flex items-center justify-center">

                    <LuCloudRain
                        className="text-[150px] text-blue-100 drop-shadow-xl animate-pulse"
                    />

                    <LuCloud
                        className="absolute -top-4 -left-7 text-6xl text-white/40"
                    />

                </div>
            );

        } else if (statusChuva === "Chuva Fraca") {

            return (

                <LuCloudRain
                    className="text-[150px] text-blue-50 drop-shadow-xl"
                />

            );

        } else if (statusChuva === "Garoa") {

            return (

                <LuCloudDrizzle
                    className="text-[150px] text-white drop-shadow-xl"
                />

            );

        } else if (statusChuva === "Tempo Seco") {

            return (

                <div className="relative flex items-center justify-center">

                    <LuSun
                        className="text-[150px] text-yellow-200 drop-shadow-xl animate-pulse"
                    />

                    <LuCloud
                        className="absolute -bottom-1 -right-8 text-6xl text-white/70"
                    />

                </div>
            );

        } else {

            return (

                <LuCloud
                    className="text-[150px] text-white/50 drop-shadow-xl"
                />

            );
        }
    };


    useEffect(() => {

        buscarDados();

        const intervalo = setInterval(buscarDados, 5000);

        return () => clearInterval(intervalo);

    }, []);


    return (

        <div className="min-h-screen bg-linear-to-br from-blue-300 via-indigo-300 to-violet-300 text-white font-sans flex flex-col items-center pb-10">

            <h1 className="text-center text-4xl md:text-6xl font-black tracking-tight max-w-4xl leading-tight mt-10 text-white drop-shadow-md [text-shadow:0_4px_12px_rgba(59,130,246,0.8)]">

                Espaço do Projeto{" "}

                <span className="block underline decoration-blue-100 underline-offset-8 text-purple-200 mt-4">
                    Radar Chuva
                </span>

            </h1>


            <div className="flex flex-col items-center gap-5 mt-10 bg-purple-300/70 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-xl border border-white/30">

                <p className="text-lg text-blue-50 font-medium">
                    Condição atual
                </p>


                <p className="text-3xl md:text-4xl font-black tracking-tight text-blue-100 drop-shadow-md [text-shadow:0_4px_12px_rgba(59,13,246,0.8)]">
                    {statusChuva}
                </p>


                <div className="min-h-[180px] flex items-center justify-center transition-all duration-700">

                    {desenhoClima()}

                </div>


                <p className="text-2xl font-bold text-white text-center">
                    {verificarMensagem()}
                </p>


                <div className="flex gap-2 mt-1">

                    <span className="w-14 h-1.5 bg-white/70 rounded-full"></span>

                    <span className="w-8 h-1.5 bg-white/50 rounded-full"></span>

                    <span className="w-12 h-1.5 bg-white/70 rounded-full"></span>

                </div>


                <div className="mt-2 w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 flex items-center justify-between gap-6 backdrop-blur-md">

                    <div className="flex items-center gap-3">

                        <div className="bg-white/20 p-3 rounded-xl">

                            <LuHouse className="text-3xl" />

                        </div>


                        <div>

                            <p className="text-sm text-blue-50">
                                Teto retrátil
                            </p>

                            <p className="text-xl font-bold">
                                {verificarTeto()}
                            </p>

                        </div>

                    </div>


                    <div
                        className={`w-4 h-4 rounded-full ${
                            verificarTeto() === "Aberto"
                                ? "bg-yellow-200 animate-pulse"
                                : verificarTeto() === "Fechado"
                                ? "bg-blue-200 animate-pulse"
                                : "bg-white/50"
                        }`}
                    ></div>

                </div>


                <p className="text-blue-50 text-sm font-medium">
                    Monitoramento em tempo real
                </p>


                <a
                    href="https://wokwi.com/projects/474155553599349761"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center gap-3 px-6 py-3 rounded-xl border border-white/40 bg-white/10 backdrop-blur-md text-white font-semibold shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl"
                >

                    <LuCloudRain className="text-xl" />

                    <span>
                        Visualizar e testar no Wokwi
                    </span>

                    <LuExternalLink className="text-lg" />

                </a>

            </div>

        </div>
    );
}