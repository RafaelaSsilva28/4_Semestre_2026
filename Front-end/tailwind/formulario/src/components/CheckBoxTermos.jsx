export function CheckboxTermos({ checked, onChange }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer pt-1">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 accent-indigo-600 rounded cursor-pointer"
      />
      <span className="text-xs text-slate-300 select-none">
        Li e aceito os termos do curso
      </span>
    </label>
  );
}
