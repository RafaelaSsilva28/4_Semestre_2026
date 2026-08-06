import { Routes, Route, Link } from "react-router-dom";
import Aula01 from "./Aula01";
import Aula02 from "./Aula02";
import Aula03 from "./Aula03";
import Inicial from "./Inicial";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { PiHouseBold } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";

export default function Principal() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <div className="flex min-h-screen font-sans">

            {/* Fundo escuro no celular */}
            {menuAberto && (
                <div
                    onClick={() => setMenuAberto(false)}
                    className="fixed inset-0 bg-black/40 z-[55] md:hidden"
                ></div>
            )}

            {/* Sidebar Responsivo */}
            <div
                className={`fixed z-[60] inset-y-0 left-0 transform md:relative md:translate-x-0 w-64 bg-pink-700 text-white p-4 transition-transform duration-300 ease-in-out
                ${menuAberto ? "translate-x-0" : "-translate-x-full"}
                `}
            >
                <div className="flex justify-between items-center mb-6">
                    <span className="text-xl font-bold">Menu</span>

                    <button
                        onClick={() => setMenuAberto(false)}
                        className="md:hidden"
                    >
                        <MdClose className="w-5 h-5" />
                    </button>
                </div>

                <nav className="space-y-4">
                    <Link
                        onClick={() => setMenuAberto(false)}
                        to="/"
                        className="flex items-center gap-4 hover:bg-pink-800 p-2 rounded"
                    >
                        <PiHouseBold />
                        <span>Home</span>
                    </Link>

                    <Link
                        onClick={() => setMenuAberto(false)}
                        to="/aula01"
                        className="flex items-center gap-4 hover:bg-pink-800 p-2 rounded"
                    >
                        <SiGoogleclassroom />
                        <span>Aula01</span>
                    </Link>

                    <Link
                        onClick={() => setMenuAberto(false)}
                        to="/aula02"
                        className="flex items-center gap-4 hover:bg-pink-800 p-2 rounded"
                    >
                        <SiGoogleclassroom />
                        <span>Aula02</span>
                    </Link>

                    <Link
                        onClick={() => setMenuAberto(false)}
                        to="/aula03"
                        className="flex items-center gap-4 hover:bg-pink-800 p-2 rounded"
                    >
                        <SiGoogleclassroom />
                        <span>Aula03</span>
                    </Link>
                </nav>
            </div>

            {/* Conteúdo tela principal */}
            <div className="flex-1 bg-pink-200 text-black w-full overflow-auto">
                <button
                    onClick={() => setMenuAberto(true)}
                    className="md:hidden m-4 text-pink-900"
                >
                    <MdMenu className="w-6 h-6" />
                </button>

                <Routes>
                    <Route path="/" element={<Inicial />} />
                    <Route path="/Aula01" element={<Aula01 />} />
                    <Route path="/Aula02" element={<Aula02 />} />
                    <Route path="/Aula03" element={<Aula03 />} />
                </Routes>
            </div>
        </div>
    );
}