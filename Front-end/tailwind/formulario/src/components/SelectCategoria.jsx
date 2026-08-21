export function SelectCategoria({ value, onChange }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-300 mb-1">
        Categoria do Curso
      </label>
      <select
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
      >
        <option value="" disabled>Selecione uma opção...</option>
        <option value="frontend">Front-end (React / Tailwind)</option>
        <option value="backend">Back-end (Node / SQL)</option>
        <option value="mobile">Desenvolvimento Mobile</option>
      </select>
    </div>
  );
}
