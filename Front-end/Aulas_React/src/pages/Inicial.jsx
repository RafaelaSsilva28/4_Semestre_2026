import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Inicial() {
    const navigate = useNavigate();

    // Estado para controlar qual grupo de aulas está visível
    const [pagina, setPagina] = useState(1);

    // Alterna entre a página 1 e a página 2
    const alternarPagina = () => {
        setPagina((paginaAtual) => (paginaAtual === 1 ? 2 : 1));
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-pink-500 to-purple-600 text-white font-sans selection:bg-pink-300 selection:text-pink-900 flex flex-col">

            {/* NAVBAR */}
            <nav className="w-full bg-pink-600/30 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between sticky top-0 z-50">

                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

                    <span className="font-bold tracking-wide text-sm md:text-base">
                        Painel do Aluno
                    </span>
                </div>

                {/* ATALHOS DAS AULAS */}
                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-pink-100">
                    <button
                        type="button"
                        onClick={() => navigate("/aula01")}
                        className="hover:text-white transition-colors cursor-pointer"
                    >
                        Aula 01
                    </button>

                    <button
                        type="button"
                        onClick={() => navigate("/aula02")}
                        className="hover:text-white transition-colors cursor-pointer"
                    >
                        Aula 02
                    </button>

                    <button
                        type="button"
                        onClick={() => navigate("/aula03")}
                        className="hover:text-white transition-colors cursor-pointer"
                    >
                        Aula 03
                    </button>
                </div>

                {/* BOTÃO SAIR */}
                <button
                    type="button"
                    onClick={() => navigate("/login")}
                    className="bg-white/10 hover:bg-white/20 text-xs md:text-sm font-medium py-1.5 px-4 rounded-lg border border-white/10 transition-all cursor-pointer"
                >
                    Sair da Conta
                </button>
            </nav>

            {/* CONTEÚDO PRINCIPAL */}
            <div className="flex-1 flex flex-col justify-center">

                {/* BOAS-VINDAS */}
                <header className="max-w-5xl mx-auto px-6 pt-12 pb-16 text-center flex flex-col items-center justify-center gap-4">

                    <span className="bg-pink-600 text-white text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
                        Login efetuado com sucesso!
                    </span>

                    <h1 className="text-4xl md:text-6xl font-black tracking-tight max-w-3xl leading-tight mt-2">
                        Bem-vinda ao Espaço{" "}
                        <span className="underline decoration-pink-300 underline-offset-8">
                            Tailwind CSS
                        </span>
                    </h1>

                    <p className="text-pink-100 text-base md:text-lg max-w-2xl leading-relaxed font-light mt-2">
                        Seu ambiente de estudos do 4º Semestre está pronto.
                        Aqui você pode navegar pelos conceitos integrados de
                        estilização utilitária e componentização React.
                    </p>
                </header>

                {/* SEÇÃO DAS AULAS */}
                <main className="max-w-7xl mx-auto px-6 pb-12 w-full">

                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold tracking-tight">
                            Selecione o módulo para continuar
                        </h2>

                        <p className="text-pink-100/70 text-sm mt-1 font-light">
                            Clique em um dos blocos abaixo para abrir o conteúdo
                            da aula correspondente.
                        </p>
                    </div>

                    {/* ÁREA DOS CARDS COM SETAS */}
                    <div className="flex items-center justify-between gap-4 w-full">

                        {/* SETA ESQUERDA */}
                        <button
                            type="button"
                            onClick={alternarPagina}
                            className="bg-white/10 hover:bg-white/20 p-3 rounded-full border border-white/20 transition-all cursor-pointer shadow-lg active:scale-95 text-white shrink-0"
                            aria-label="Ver aulas anteriores"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5"
                                />
                            </svg>
                        </button>

                        {/* CARDS */}
                        <div className="flex-1 max-w-6xl">

                            {pagina === 1 ? (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                                    {/* AULA 01 */}
                                    <div
                                        onClick={() => navigate("/aula01")}
                                        className="bg-pink-600/90 p-8 rounded-2xl shadow-xl border border-white/10 hover:scale-[1.03] hover:bg-pink-600 transition-all duration-300 flex flex-col gap-3 cursor-pointer group"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white font-bold group-hover:bg-white group-hover:text-pink-600 transition-colors">
                                            01
                                        </div>

                                        <h3 className="text-xl font-bold">
                                            Aula 01: Tipografia e Cores no Tailwind CSS
                                        </h3>

                                        <p className="text-pink-100 text-sm leading-relaxed font-light">
                                            Demonstração interativa das classes utilitárias do Tailwind CSS para alterar o tamanho e a cor dos textos.
                                            <code className="bg-purple-900/40 px-1.5 py-0.5 rounded text-xs font-mono">
                                                className
                                            </code>
                                            .
                                        </p>
                                    </div>

                                    {/* AULA 02 */}
                                    <div
                                        onClick={() => navigate("/aula02")}
                                        className="bg-pink-600/90 p-8 rounded-2xl shadow-xl border border-white/10 hover:scale-[1.03] hover:bg-pink-600 transition-all duration-300 flex flex-col gap-3 cursor-pointer group"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white font-bold group-hover:bg-white group-hover:text-pink-600 transition-colors">
                                            02
                                        </div>

                                        <h3 className="text-xl font-bold">
                                            Aula 02: Backgrounds e Gradientes no Tailwind CSS
                                        </h3>

                                        <p className="text-pink-100 text-sm leading-relaxed font-light">
                                            Demonstração interativa das classes do Tailwind CSS para alterar cores,
        gradientes, imagens, tamanhos, posições e repetições de fundo.
                                        </p>
                                    </div>

                                    {/* AULA 03 */}
                                    <div
                                        onClick={() => navigate("/aula03")}
                                        className="bg-pink-600/90 p-8 rounded-2xl shadow-xl border border-white/10 hover:scale-[1.03] hover:bg-pink-600 transition-all duration-300 flex flex-col gap-3 cursor-pointer group"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white font-bold group-hover:bg-white group-hover:text-pink-600 transition-colors">
                                            03
                                        </div>

                                        <h3 className="text-xl font-bold">
                                            Aula 03: React Icons e Menu Sidebar
                                        </h3>

                                        <p className="text-pink-100 text-sm leading-relaxed font-light">
                                            Demonstração do uso de ícones em componentes React e introdução à criação
        de um menu lateral utilizando Tailwind CSS.
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                                    {/* AULA 04 */}
                                    <div
                                        onClick={() => navigate("/aula04")}
                                        className="bg-pink-600/90 p-8 rounded-2xl shadow-xl border border-white/10 hover:scale-[1.03] hover:bg-pink-600 transition-all duration-300 flex flex-col gap-3 cursor-pointer group"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white font-bold group-hover:bg-white group-hover:text-pink-600 transition-colors">
                                            04
                                        </div>

                                        <h3 className="text-xl font-bold">
                                            Aula 04: Estado e Hooks
                                        </h3>

                                        <p className="text-pink-100 text-sm leading-relaxed font-light">
                                            Gerenciamento de estados com useState,
                                            eventos, atualizações de componentes e
                                            utilização dos principais Hooks do React.
                                        </p>
                                    </div>

                                    {/* AULA 05 */}
                                    <div
                                        onClick={() => navigate("/aula05")}
                                        className="bg-pink-600/90 p-8 rounded-2xl shadow-xl border border-white/10 hover:scale-[1.03] hover:bg-pink-600 transition-all duration-300 flex flex-col gap-3 cursor-pointer group"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white font-bold group-hover:bg-white group-hover:text-pink-600 transition-colors">
                                            05
                                        </div>

                                        <h3 className="text-xl font-bold">
                                            Aula 05: Consumo de APIs
                                        </h3>

                                        <p className="text-pink-100 text-sm leading-relaxed font-light">
                                            Requisições HTTP assíncronas utilizando
                                            o Hook useEffect e integração com APIs REST.
                                        </p>
                                    </div>

                                    {/* PRÓXIMOS MÓDULOS */}
                                    <div className="bg-white/10 p-8 rounded-2xl shadow-xl border border-dashed border-white/30 flex flex-col gap-3">

                                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white font-bold">
                                            +
                                        </div>

                                        <h3 className="text-xl font-bold">
                                            Próximos Módulos
                                        </h3>

                                        <p className="text-pink-100 text-sm leading-relaxed font-light">
                                            Novas atividades e laboratórios
                                            práticos serão disponibilizados em breve.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* SETA DIREITA */}
                        <button
                            type="button"
                            onClick={alternarPagina}
                            className="bg-white/10 hover:bg-white/20 p-3 rounded-full border border-white/20 transition-all cursor-pointer shadow-lg active:scale-95 text-white shrink-0"
                            aria-label="Ver próximas aulas"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* INDICADOR DE PÁGINA */}
                    <div className="flex items-center justify-center gap-2 mt-8">

                        <button
                            type="button"
                            onClick={() => setPagina(1)}
                            aria-label="Abrir primeira página"
                            className={`h-2 rounded-full transition-all duration-300 ${
                                pagina === 1
                                    ? "w-6 bg-white"
                                    : "w-2 bg-white/40"
                            }`}
                        ></button>

                        <button
                            type="button"
                            onClick={() => setPagina(2)}
                            aria-label="Abrir segunda página"
                            className={`h-2 rounded-full transition-all duration-300 ${
                                pagina === 2
                                    ? "w-6 bg-white"
                                    : "w-2 bg-white/40"
                            }`}
                        ></button>
                    </div>
                </main>
            </div>

            {/* RODAPÉ */}
            <footer className="text-center py-6 px-4 text-sm text-pink-100/70 border-t border-white/10">
                Disciplina de Front-end • Área Restrita do Aluno
            </footer>
        </div>
    );
}