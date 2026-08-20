import React, { useState, useEffect } from "react";
import { enderecoServidor } from "../utils";

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

            <div className="flex items-center gap-4 mt-10 bg-purple-300 p-5 rounded-3xl">

                <p className="text-3xl font-black tracking-tight text-blue-100 drop-shadow-md [text-shadow:0_4px_12px_rgba(59,13,246,0.8)]">
                    Nível da Boia: {nivelBoia}
                </p>

            </div>

        </div>
    );
}