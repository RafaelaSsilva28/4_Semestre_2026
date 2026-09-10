import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/authService";

export default function LoginPage({ onLoginSuccess }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await authService.login(email, password);
            onLoginSuccess();
            navigate("/");
        } catch (err) {
            setError(err.message || "Falha ao realizar Login. Verifique suas credenciais");
        } finally {
            setLoading(false);
        }
    };
    return(
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-md p-6 space-y-4">
                <h2 className="text-2xl font-bold text-slate-800 text-center">FinanControl</h2>

                {error && <div className="p-3 bg-red-100 text-red-700 text-sm rounded-lg">{error}</div>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">E-mail</label>
                        <input
                            type="email"
                            required
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">Senha</label>
                        <input
                            type="password"
                            required
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                    >
                        {loading ? 'Entrando...' : 'Entrar'}
                    </button>
                </form>
                <div className="text-center pt-2">
                    <p className="text-xs text-slate-500">
                        Ainda não tem conta?{' '}
                        <Link to="/register" className="text-blue-600 font-semibold hover:underline">
                            Cadastre-se aqui
                        </Link>
                    </p>
                </div>
            </div>

        </div>
    )
}