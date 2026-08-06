import {Routes, Route, Link} from 'react-router-dom'
import Aula01 from './Aula01'
import Aula02 from './Aula02'
import Aula03 from './Aula03'
import Inicial from './Inicial'
import { useState } from 'react'
import {MdClose} from "react-icons/md"
import {PiHouseBold} from "react-icons/pi"
import { SiGoogleclassroom } from "react-icons/si";

export default function Principal(){
    const [menuAberto, setMenuAberto] = useState(false);
    return(
        <div className='flex-h-screen font-sans'>
            {/*Sidebar Responsivo */}
            <div className='fixed z-30 inset-y-0 left-0 transform md:relative md:translate-x-0 w-64 bg-pink-700 text-white p-4 transition-transform duration-300 ease-in-out'>

                <div className='flex justify-between items-center mb-6'>
                    <span className='text-xl font-bold'>Menu</span>
                    <button>
                        <MdClose className='w-5 h-5'/>
                    </button>
                </div>
                    <nav className='space-y-4'>
                        <Link className='flex items-center gap-4 hover:bg-pink-800 p-2 rounded'>
                            <PiHouseBold/> 
                            <span>Home</span>                       
                        </Link>
                        <Link className='flex items-center gap-4 hover:bg-pink-800 p-2 rounded'>
                            <SiGoogleclassroom /> 
                            <span>Aula01</span>                       
                        </Link>
                        <Link className='flex items-center gap-4 hover:bg-pink-800 p-2 rounded'>
                            <SiGoogleclassroom /> 
                            <span>Aula02</span>                       
                        </Link>
                        <Link className='flex items-center gap-4 hover:bg-pink-800 p-2 rounded'>
                            <SiGoogleclassroom /> 
                            <span>Aula03</span>                       
                        </Link>
                    </nav>
                

            </div>
            {/*Conteudo tela principal */}
            <div>
            <Routes>
                <Route path='/' element={<Inicial/>}/>
                <Route path='/Aula01' element={<Aula01/>}/>
                <Route path='/Aula02' element={<Aula02/>}/>
                <Route path='/Aula03' element={<Aula03/>}/>
            </Routes>
            </div>
        </div>
    )
}