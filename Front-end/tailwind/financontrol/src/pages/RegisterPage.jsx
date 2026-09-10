import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { authService } from '../services/authService';

export default function RegisterPage({ onRegisterSucess }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await authService.signup(name, email, password);
            onRegisterSucess();
            navigate('/');
        } catch (err) {
            setError(err.message || 'Falha ao criar conta. Verifique os dados informados');
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-md p-6 space-y-4">
                <h2 className="text-2xl font-bold text-slate-800 text-center">Criar Nova Conta</h2>
                <p className="text-sm text-slate-500 text-center">Cadastre-se para acessar o FinanControl</p>

                {error && (
                    <div className="p-3 bg-red-100 border border-red-200 text-red-700 text-sm rounded-lg">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">Nome Completo</label>
                        <input
                            type="text"
                            required
                            placeholder="Ex: Maria Silva"
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">E-mail</label>
                        <input
                            type="email"
                            required
                            placeholder="seu@email.com"
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
                            placeholder="••••••••"
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
                        {loading ? 'Cadastrando...' : 'Cadastrar'}
                    </button>
                </form>

                <div className="text-center pt-2">
                    <p className="text-xs text-slate-500">
                        Já possui uma conta?{' '}
                        <Link to="/login" className="text-blue-600 font-semibold hover:underline">
                            Fazer Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}