export function RadioTurno({ value, onChange }) {
  const opcoes = [
    { id: "manha", label: "Manhã" },
    { id: "tarde", label: "Tarde" },
    { id: "noite", label: "Noite" },
  ];

  return (
    <div>
      <label className="block text-xs font-semibold text-slate-300 mb-2">
        Turno de Preferência
      </label>
      <div className="flex gap-2">
        {opcoes.map((op) => (
          <label
            key={op.id}
            className="flex-1 flex items-center justify-center gap-2 p-2 rounded-lg bg-slate-800 border border-slate-700 hover:bg-slate-750 cursor-pointer text-xs text-slate-200"
          >
            <input
              type="radio"
              name="turno"
              value={op.id}
              checked={value === op.id}
              onChange={onChange}
              className="accent-indigo-600 cursor-pointer"
            />
            {op.label}
          </label>
        ))}
      </div>
    </div>
  );
}
