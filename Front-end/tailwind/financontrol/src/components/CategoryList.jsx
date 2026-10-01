export default function CategoryList({
    categories,
    onEdit,
    onDelete,
    loading,
}) {
    if (loading) {
        return (
            <div className="p-6 text-center text-slate-500">
                Carregando categorias...
            </div>
        );
    }

    if (!categories || categories.length === 0) {
        return (
            <div className="p-6 text-center text-slate-400">
                Nenhuma categoria cadastrada
            </div>
        );
    }
    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-slate-500 uppercase text-xs">
                    <tr>
                        <th className="px-5 py-3">ID</th>
                        <th className="px-5 py-3">Nome</th>
                        <th className="px-5 py-3">Tipo</th>
                        <th className="px-5 py-3 text-right">Ações</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {categories.map((cat) => {
                        // Garante a leitura do ID correto vindo da API do Vercel
                        const catId = cat.id_categoria || cat.id;
                        const isReceita = cat.tipo === "R";

                        return (
                            <tr key={catId} className="hover:bg-slate-50">
                                <td className="px-5 py-3 font-medium text-slate-400">
                                    #{catId}
                                </td>
                                <td className="px-5 py-3 font-semibold text-slate-800">
                                    {cat.nome}
                                </td>
                                <td className="px-5 py-3">
                                    <span
                                        className={`px-2.5 py-1 rounded-full text-xs font-semibold ${isReceita
                                                ? "bg-emerald-100 text-emerald-800"
                                                : "bg-rose-100 text-rose-800"
                                            }`}
                                    >
                                        {isReceita ? "Receita" : "Despesa"}
                                    </span>
                                </td>
                                <td className="px-5 py-3 text-right space-x-2">
                                    <button
                                        onClick={() => onEdit(cat)}
                                        className="px-2.5 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded hover:bg-blue-100 transition"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => onDelete(catId)}
                                        className="px-2.5 py-1 text-xs font-medium text-rose-600 bg-rose-50 rounded hover:bg-rose-100 transition"
                                    >
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
