import { DiAndroid } from "react-icons/di";
import { DiAtom } from "react-icons/di";
import { HiAcademicCap } from "react-icons/hi";
import { VscCopilotSnooze } from "react-icons/vsc";


export default function Aula03(){
    return(
        <div className="min-h-screen bg-linear-to-br from-pink-500 to-purple-600">
        <div className="text-4xl text-pink-600 text-center  bg-fuchsia-300 p-2">
            <h1>Aula 03 do Ricardo ❤️</h1>
            <h2 className="text-3xl font-bold bg-fuchsia-300 text-pink-400  mb-4">3° Trabalhando com icones e criando o menu sidebar</h2>
        </div>
            <div className="mb-8 p-4 bg-pink-300 rounded mt-4">
            <p className=" text-pink-600 font-bold m-2">Aqui tem alguns icones</p>
            <p>
            <DiAndroid className="inline w-10 h-10 text-purple-600"/>
            <DiAtom className="inline w-10 h-10 text-blue-600"/>
            <HiAcademicCap className="inline w-10 h-10 text-pink-500"/>
            <VscCopilotSnooze className="inline w-10 h-10 text-red-500"/>
            </p>
        </div>
        </div>
        
    )
}