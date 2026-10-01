export default function SubcategoriaList({ subcategories, categories, onEdit, onDelete, loading }) {
    if (loading) {
        return <div className="p-6 text-center text-slate-500">Carregando subcategorias...</div>
    }

    if (!subcategories || subcategories.lenght === 0) {
        return <div className="p-6 text-slate-400">Nenhuma Subcategoria</div>
    }

    const categoryMap = new Map(
        categories.map((cat) => [cat.id_categoria || cat.id, cat.nome])
    );
    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-slate-500 uppercase text-xs">
                    <tr>
                        <th className="px-5 py-3">ID</th>
                        <th className="px-5 py-3">Subcategoria</th>
                        <th className="px-5 py-3">Categoria Pai</th>
                        <th className="px-5 py-3 text-right">Ações</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {subcategories.map((sub) => {
                        const subId = sub.id_subcategoria || sub.id;
                        const categoryName = categoryMap.get(sub.id_categoria) || `Categoria #${sub.id_categoria}`;

                        return (
                            <tr key={subId} className="hover:bg-slate-50">
                                <td className="px-5 py-3 font-medium text-slate-400">#{subId}</td>
                                <td className="px-5 py-3 font-semibold text-slate-800">{sub.nome}</td>
                                <td className="px-5 py-3 text-slate-600">
                                    <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium">
                                        {categoryName}
                                    </span>
                                </td>
                                <td className="px-5 py-3 text-right space-x-2">
                                    <button
                                        onClick={() => onEdit(sub)}
                                        className="px-2.5 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded hover:bg-blue-100 transition"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => onDelete(subId)}
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
    )
}