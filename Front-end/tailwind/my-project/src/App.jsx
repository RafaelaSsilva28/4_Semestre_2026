export default function App() {
  return (
    <div className="flex gap-4 p-5 mt-15">

      <button className="group relative px-5 py-2 bg-gradient-to-tr from-purple-400 to-pink-500 text-white rounded-lg shadow-lg shadow-pink-500/40 transition-all duration-300 hover:scale-105 hover:shadow-xl">
        Clique aqui

        <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Roxo/Rosa
        </span>
      </button>


      <button className="group relative px-5 py-2 bg-gradient-to-tr from-blue-500 to-blue-900 text-white rounded-lg shadow-lg shadow-blue-500/40 transition-all duration-300 hover:scale-105 hover:shadow-xl">
        Clique aqui

        <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Azul
        </span>
      </button>


      <button className="group relative px-5 py-2 bg-gradient-to-tr from-red-600 to-red-950 text-white rounded-lg shadow-lg shadow-red-500/40 transition-all duration-300 hover:scale-105 hover:shadow-xl">
        Clique aqui

        <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-red-600 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Vermelho
        </span>
      </button>

    </div>
  );
}