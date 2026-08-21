export function InputTexto({label, value, onChange, placeholder}) {
    return (
        <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
                {label}
            </label>
            <input
                type="text" 
                value={value} 
                onChange={onChange} 
                placeholder={placeholder} 
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
        </div>
    );
}
