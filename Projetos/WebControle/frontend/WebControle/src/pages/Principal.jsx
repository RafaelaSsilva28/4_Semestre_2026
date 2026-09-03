import { Routes, Route, Link } from "react-router-dom";

import TelaLed from "./TelaLed";
import Inicial from "./Inicial";
import TelaNivel from "./TelaNivel";
import TelaUmid from "./TelaUmid";
import TelaChuva from "./TelaChuva";
import { useState } from "react";

import { MdClose, MdMenu } from "react-icons/md";
import { HiOutlineHome } from "react-icons/hi2";
import { PiLightbulbFilament } from "react-icons/pi";
import { LuWaves, LuCloudRain } from "react-icons/lu";
import { GiPlantRoots } from "react-icons/gi";

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
                        <MdClose className="w-6 h-6" />
                    </button>

                </div>


                <nav className="space-y-4">

                    {/* HOME */}

                    <Link
                        onClick={() => setMenuAberto(false)}
                        to="/"
                        className="flex items-center gap-4 hover:bg-white/10 p-2 rounded-lg transition-colors"
                    >

                        <HiOutlineHome className="text-2xl shrink-0" />

                        <span>
                            Home
                        </span>

                    </Link>


                    {/* CONTROLE DO LED */}

                    <Link
                        onClick={() => setMenuAberto(false)}
                        to="/telaLed"
                        className="flex items-center gap-4 hover:bg-white/10 p-2 rounded-lg transition-colors"
                    >

                        <PiLightbulbFilament className="text-2xl shrink-0" />

                        <span>
                            Controle do LED
                        </span>

                    </Link>


                    {/* NÍVEL DA ÁGUA */}

                    <Link
                        onClick={() => setMenuAberto(false)}
                        to="/telaNivel"
                        className="flex items-center gap-4 hover:bg-white/10 p-2 rounded-lg transition-colors"
                    >

                        <LuWaves className="text-2xl shrink-0" />

                        <span>
                            Nível da Água
                        </span>

                    </Link>


                    {/* UMIDADE DO SOLO */}

                    <Link
                        onClick={() => setMenuAberto(false)}
                        to="/telaUmid"
                        className="flex items-center gap-4 hover:bg-white/10 p-2 rounded-lg transition-colors"
                    >

                        <GiPlantRoots className="text-2xl shrink-0" />

                        <span>
                            Umidade do Solo
                        </span>

                    </Link>


                    {/* SENSOR DE CHUVA */}

                    <Link
                        onClick={() => setMenuAberto(false)}
                        to="/telaChuva"
                        className="flex items-center gap-4 hover:bg-white/10 p-2 rounded-lg transition-colors"
                    >

                        <LuCloudRain className="text-2xl shrink-0" />

                        <span>
                            Sensor de Chuva
                        </span>

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

                    <Route
                        path="/"
                        element={<Inicial />}
                    />

                    <Route
                        path="/telaLed"
                        element={<TelaLed />}
                    />

                    <Route
                        path="/telaNivel"
                        element={<TelaNivel />}
                    />

                    <Route
                        path="/telaUmid"
                        element={<TelaUmid />}
                    />

                    <Route
                        path="/telaChuva"
                        element={<TelaChuva />}
                    />

                </Routes>

            </div>

        </div>
    );
}