import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    
    return (
        // 1. O Elemento Pai agora centraliza tudo na tela (horizontal e vertical)
        <div className="min-h-screen bg-linear-to-br from-pink-500 to-purple-600 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-pink-600 p-8 rounded-2xl shadow-2xl flex flex-col items-center gap-6">
        <h2 className="text-2xl font-bold text-white">Login</h2>
        <button onClick={() => navigate('/')} 
        className="w-full bg-pink-600 hover:bg-pink-200 text-white font-medium py-2 px-4 rounded transition-colors">
        Entrar</button>
            </div>
        </div>
    );
}