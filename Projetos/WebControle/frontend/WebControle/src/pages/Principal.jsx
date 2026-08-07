import { Routes, Route, Link } from "react-router-dom";
import TelaLed from "./TelaLed";
import Inicial from "./Inicial";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { PiHouseBold } from "react-icons/pi";
import { FaRegLightbulb } from "react-icons/fa";

export default function Principal() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <div className="flex min-h-screen font-sans">

            {menuAberto && (
                <div
                    onClick={() => setMenuAberto(false)}
                    className="fixed inset-0 bg-black/40 z-[55] md:hidden"
                ></div>
            )}

            <div
                className={`fixed z-[60] inset-y-0 left-0 transform md:relative md:translate-x-0 w-64 bg-linear-to-b from-blue-500 via-indigo-500 to-violet-500 text-white p-4 transition-transform duration-300 ease-in-out
                ${menuAberto ? "translate-x-0" : "-translate-x-full"}
                `}
            >
                <div className="flex justify-between items-center mb-6">
                    <span className="text-xl font-bold">
                        Menu
                    </span>

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
                        className="flex items-center gap-4 hover:bg-white/15 p-2 rounded-lg transition-colors"
                    >
                        <PiHouseBold />
                        <span>Home</span>
                    </Link>

                    <Link
                        onClick={() => setMenuAberto(false)}
                        to="/telaLed"
                        className="flex items-center gap-4 hover:bg-white/15 p-2 rounded-lg transition-colors"
                    >
                        <FaRegLightbulb />
                        <span>Controle do LED</span>
                    </Link>

                </nav>
            </div>

            <div className="flex-1 text-black w-full overflow-auto relative">

                <button
                    onClick={() => setMenuAberto(true)}
                    className="md:hidden fixed top-5 left-4 z-50 text-white"
                >
                    <MdMenu className="w-7 h-7" />
                </button>

                <Routes>
                    <Route path="/" element={<Inicial />} />
                    <Route path="/telaLed" element={<TelaLed />} />
                </Routes>

            </div>

        </div>
    );
}