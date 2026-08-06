export default function Botao({funcao, classe}) {
    return(
        <button onClick={() => funcao(classe)}
        className="px-3 py-1 bg-pink-500 hover:bg-pink-400 text-white rounded">
            {classe}
        </button>
    )
}