import { Link } from 'react-router-dom';

export default function HomePage() {
    return(
        <div className='max-w-4xl mx-auto p-6 space-y-6'>
            <div className='bg-white p-8 rounded-xl shadow-sm border border-slate-200'>
                <h1 className='text-3xl font-bold text-slate-800 mb-2'>Painel de Controle financeiro</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <Link to="/categorias" className='p-5 border border-slate-200 rounded-lg hover:border-blue-500 hover:shadow-md transition group bg-slate-50' >
                <h2 className='text-lg font-semibold text-slate-800 group-hover:text-blue-600'>Gerenciar Categorias &rarr;</h2>
                <p>Cadastre e organize os tipos de Receitas e Despesas vinculados ao seu usuario</p>
                </Link>
                </div>
            </div>
        </div>
    );
}