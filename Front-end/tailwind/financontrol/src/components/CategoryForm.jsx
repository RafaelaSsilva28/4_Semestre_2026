import { useState } from "react";

export default function CategoryForm({ onSubmit, initialData = null, onCancel }) {
    const [nome, setNome] = useState(initialData?.nome || '');
    const [tipo, setTipo] = useState(initialData?.tipo || 'D');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nome.trim()) return;

        onSubmit({ nome, tipo});

        if (!initialData){
            setNome('');
            setTipo('D')
        }
    };
    return(
        <form onSubmit={handleSubmit} className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 space-y-4">
      <h3 className="text-lg font-semibold text-slate-800">
        {initialData ? 'Editar Categoria' : 'Nova Categoria'}
      </h3>

      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">Nome da Categoria</label>
        <input
          type="text"
          required
          placeholder="Ex: Alimentação, Salário"
          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">Tipo</label>
        <select
          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        >
          <option value="D">Despesa</option>
          <option value="R">Receita</option>
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