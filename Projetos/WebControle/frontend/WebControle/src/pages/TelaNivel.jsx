import React, { useState, useEffect } from "react";
import { enderecoServidor } from "../utils";
import { FaLifeRing } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

export default function TelaNivel() {

    const [nivelBoia, setNivelBoia] = useState("Desconhecido");

    const buscarDados = async () => {
        try {

            const resposta = await fetch(
                `${enderecoServidor}/controleNivel/nivel`
            );

            const dados = await resposta.json();

            console.log("DADOS RECEBIDOS:", dados);

            setNivelBoia(dados.nivelBoia);

        } catch (error) {

            console.log("Erro ao buscar nível da boia:", error);

        }
    };

    const estiloBoia = () => {

        if (nivelBoia === "BAIXO") {
            return "text-blue-100 translate-y-5";

        } else if (nivelBoia === "MEDIO") {
            return "text-cyan-100 translate-y-2";

        } else if (nivelBoia === "ALTO") {
            return "text-white -translate-y-2 scale-110";

        } else if (nivelBoia === "ALTISSIMO") {
            return "text-yellow-100 -translate-y-5 scale-125 animate-pulse";

        } else {
            return "text-white/70";
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
                    Monitoramento do Nível da Boia
                </span>

            </h1>

            <div className="flex flex-col items-center gap-5 mt-10 bg-purple-300/70 backdrop-blur-md p-7 rounded-3xl shadow-xl border border-white/30">

                <p className="text-3xl font-black tracking-tight text-blue-100 drop-shadow-md [text-shadow:0_4px_12px_rgba(59,13,246,0.8)]">
                    Nível da Boia: {nivelBoia}
                </p>

                <div className="flex flex-col items-center">

                    <div className="h-32 flex items-center justify-center">

                        <FaLifeRing
                            className={`text-8xl drop-shadow-lg transition-all duration-700 ease-in-out ${estiloBoia()}`}
                        />

                    </div>

                    <div className="flex gap-2 mt-1">

                        <span className="w-12 h-1.5 bg-white/70 rounded-full"></span>

                        <span className="w-6 h-1.5 bg-white/50 rounded-full"></span>

                        <span className="w-10 h-1.5 bg-white/70 rounded-full"></span>

                    </div>

                    <p className="text-blue-50 text-sm mt-3 font-medium">
                        Monitoramento em tempo real
                    </p>

                </div>

                <a
                    href="https://wokwi.com/projects/472890911194052609"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center gap-3 px-6 py-3 rounded-xl border border-white/40 bg-white/10 backdrop-blur-md text-white font-semibold shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl"
                >
                    <FaLifeRing className="text-xl" />

                    <span>
                        Visualizar e testar no Wokwi
                    </span>

                    <LuExternalLink className="text-lg" />
                </a>

            </div>

        </div>
    );
}