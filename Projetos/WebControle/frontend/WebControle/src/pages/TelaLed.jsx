import React, { useState, useEffect } from "react";
import { enderecoServidor } from "../utils";
import { PiLightbulbFilament } from "react-icons/pi";
import { LuZap, LuExternalLink } from "react-icons/lu";
import { HiOutlineSignal } from "react-icons/hi2";

export default function TelaLed() {
    const [statusLed, setStatusLed] = useState("Desconhecido");

    const buscarDados = async () => {
        try {
            const resposta = await fetch(
                `${enderecoServidor}/controleLed/status`
            );

            const dados = await resposta.json();

            setStatusLed(dados.status);

        } catch (error) {
            console.log("Erro ao buscar dados");
        }
    };

    const enviarComando = async (comando) => {
        try {
            const resposta = await fetch(
                `${enderecoServidor}/controleLed/comando`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ comando })
                }
            );

            const dados = await resposta.json();

            console.log(dados);

            buscarDados();

        } catch (error) {
            console.log("Erro ao enviar comando");
        }
    };

    useEffect(() => {
        buscarDados();

        const intervalo = setInterval(buscarDados, 5000);

        return () => clearInterval(intervalo);

    }, []);

    return (
        <div className="min-h-screen bg-linear-to-br from-blue-300 via-indigo-300 to-violet-300 text-white font-sans selection:bg-violet-200 selection:text-indigo-900 flex flex-col items-center">

            <h1 className="text-center text-4xl md:text-6xl font-black tracking-tight max-w-4xl leading-tight mt-10 text-white drop-shadow-md [text-shadow:0_4px_12px_rgba(59,130,246,0.8)]">

                Espaço do Projeto{" "}

                <span className="block underline decoration-blue-100 underline-offset-8 text-purple-200 mt-4">
                    Controle do LED via MQTT
                </span>

            </h1>

            <div className="flex flex-col items-center gap-5 mt-10 bg-purple-300/70 backdrop-blur-md p-7 rounded-3xl shadow-xl border border-white/30">

                <p className="text-3xl font-black tracking-tight text-blue-100 drop-shadow-md [text-shadow:0_4px_12px_rgba(59,13,246,0.8)]">
                    Status do LED: {statusLed}
                </p>

                <div className="relative flex items-center justify-center">

                    <LuZap
                        className={`absolute -left-12 top-4 text-4xl transition-all duration-300 ${
                            statusLed === "LIGADO"
                                ? "text-yellow-100"
                                : "text-white/40"
                        }`}
                    />

                    <PiLightbulbFilament
                        className={`text-9xl drop-shadow-lg transition-all duration-300 ${
                            statusLed === "LIGADO"
                                ? "text-yellow-100"
                                : "text-white/70"
                        }`}
                    />

                    <LuZap
                        className={`absolute -right-12 top-4 text-4xl transition-all duration-300 ${
                            statusLed === "LIGADO"
                                ? "text-yellow-100"
                                : "text-white/40"
                        }`}
                    />

                </div>

                <div className="flex items-center gap-4">

                    <button
                        onClick={() => enviarComando("LIGADO")}
                        className="px-6 py-2 bg-gradient-to-tr from-purple-400 to-blue-400 text-white rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        Ligar
                    </button>

                    <button
                        onClick={() => enviarComando("DESLIGADO")}
                        className="px-6 py-2 bg-gradient-to-tr from-purple-400 to-blue-400 text-white rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        Desligar
                    </button>

                </div>

                <div className="flex items-center gap-2 text-blue-50">

                    <HiOutlineSignal className="text-xl" />

                    <p className="text-blue-50 text-sm font-medium">
                        Controle em tempo real
                    </p>

                </div>

                <a
                    href="https://wokwi.com/projects/471709099059570689"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center gap-3 px-6 py-3 rounded-xl border border-white/40 bg-white/10 backdrop-blur-md text-white font-semibold shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl"
                >
                    <PiLightbulbFilament className="text-2xl" />

                    <span>
                        Visualizar e testar no Wokwi
                    </span>

                    <LuExternalLink className="text-lg" />
                </a>

            </div>

        </div>
    );
}