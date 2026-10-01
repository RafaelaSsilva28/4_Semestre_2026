import { useState } from "react";

export default function SubcategoriaForm({ onSubmit, initialData = null, onCancel, categories = [] }) {

    const defaultCategoryId = categories.length > 0 ? (categories[0].id_categoria || categories[0].id) : '';

    const [nome, setNome] = useState(initialData?.nome || '');
    const [idCategoria, setIdCategoria] = useState(initialData?.categoria || initialData?.id_categoria_pai || defaultCategoryId);

    const handleSubmit = (e) => {
        e.preventDefault();

        const selectedCategory = idCategoria || defaultCategoryId;

        if (!nome.trim() || !selectedCategory) return;

        onSubmit({
            nome,
            id_categoria: Number(selectedCategory),
        });

        if (!initialData) {
            setNome('');
        }
    };
    return (
        <form onSubmit={handleSubmit} className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 space-y-4">
            <h3 className="text-lg font-semibold text-slate-800">
                {initialData ? 'Editar Subcategoria' : 'Nova Subcategoria'}
            </h3>

            <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Nome da Subcategoria</label>
                <input
                    type="text"
                    required
                    placeholder="Ex: Consulta Médica, Exames"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Categoria Pai</label>
                <select
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                    value={idCategoria || defaultCategoryId}
                    onChange={(e) => setIdCategoria(e.target.value)}
                >
                    <option value="" disabled>Selecione uma Categoria</option>
                    {categories.map((cat) => {
                        const catId = cat.id_categoria || cat.id;
                        return (
                            <option key={catId} value={catId}>
                                {cat.nome} ({cat.tipo === 'R' ? 'Receita' : 'Despesa'})
                            </option>
                        );
                    })}
                </select>
            </div>

            <div className="flex justify-end gap-2 pt-2">
                {initialData && (
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-4 py-2 text-sm text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 transition"
                    >
                        Cancelar
                    </button>
                )}
                <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                >
                    {initialData ? 'Salvar Alterações' : 'Cadastrar'}
                </button>
            </div>
        </form>
    )
}