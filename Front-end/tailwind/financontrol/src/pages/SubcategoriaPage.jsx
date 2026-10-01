import { useCallback, useEffect, useState } from "react";
import { subcategoriaService } from "../services/subcategoriaService";
import { categoryService } from "../services/categoryService";

export default function SubcategoriaPage() {
    const [subcategorias, setSubcategorias] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [nome, setNome] = useState("");
    const [categoriaId, setCategoriaId] = useState("");
    const [editandoId, setEditandoId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState("");

    const carregarDados = useCallback(async () => {
        const [dadosSubcategorias, dadosCategorias] = await Promise.all([
            subcategoriaService.getAll(),
            categoryService.getAll(),
        ]);

        setSubcategorias(
            Array.isArray(dadosSubcategorias) ? dadosSubcategorias : []
        );
        setCategorias(Array.isArray(dadosCategorias) ? dadosCategorias : []);
    }, []);

    useEffect(() => {
        async function iniciar() {
            try {
                await carregarDados();
            } catch (error) {
                setErro(error.message || "Erro ao carregar os dados.");
            } finally {
                setLoading(false);
            }
        }

        iniciar();
    }, [carregarDados]);

    function cancelarEdicao() {
        setNome("");
        setCategoriaId("");
        setEditandoId(null);
    }

    function editar(subcategoria) {
        setEditandoId(
            subcategoria.id_subcategoria ?? subcategoria.id
        );
        setNome(subcategoria.nome ?? "");
        setCategoriaId(
            String(subcategoria.id_categoria ?? subcategoria.categoria_id ?? "")
        );
        setErro("");
    }

    async function salvar(event) {
        event.preventDefault();

        if (!nome.trim() || !categoriaId) {
            setErro("Preencha o nome e selecione uma categoria.");
            return;
        }

        setLoading(true);
        setErro("");

        try {
            const dados = {
                nome: nome.trim(),
                id_categoria: Number(categoriaId),
            };

            if (editandoId !== null) {
                await subcategoriaService.update(editandoId, dados);
            } else {
                await subcategoriaService.create(dados);
            }

            await carregarDados();
            cancelarEdicao();
        } catch (error) {
            setErro(error.message || "Erro ao salvar a subcategoria.");
        } finally {
            setLoading(false);
        }
    }

    async function excluir(subcategoria) {
        const id = subcategoria.id_subcategoria ?? subcategoria.id;

        if (!window.confirm("Deseja realmente excluir esta subcategoria?")) {
            return;
        }

        setLoading(true);
        setErro("");

        try {
            await subcategoriaService.delete(id);
            await carregarDados();

            if (editandoId === id) {
                cancelarEdicao();
            }
        } catch (error) {
            setErro(error.message || "Erro ao excluir a subcategoria.");
        } finally {
            setLoading(false);
        }
    }

    function nomeDaCategoria(subcategoria) {
        const id = subcategoria.id_categoria ?? subcategoria.categoria_id;

        const categoria = categorias.find(
            (item) => String(item.id_categoria ?? item.id) === String(id)
        );

        return categoria?.nome ?? "Categoria não encontrada";
    }

    return (
        <main className="mx-auto max-w-4xl space-y-6 p-6">
            <h1 className="text-3xl font-bold text-slate-800">
                Gerenciar Subcategorias
            </h1>

            {erro && (
                <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-red-700">
                    {erro}
                </div>
            )}

            <form
                onSubmit={salvar}
                className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
                <div>
                    <label
                        htmlFor="nome-subcategoria"
                        className="mb-2 block font-semibold text-slate-700"
                    >
                        Nome da Subcategoria
                    </label>
                    <input
                        id="nome-subcategoria"
                        type="text"
                        value={nome}
                        onChange={(event) => setNome(event.target.value)}
                        placeholder="Ex.: Mercado, Transporte"
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="categoria"
                        className="mb-2 block font-semibold text-slate-700"
                    >
                        Categoria
                    </label>
                    <select
                        id="categoria"
                        value={categoriaId}
                        onChange={(event) => setCategoriaId(event.target.value)}
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                        required
                    >
                        <option value="">Selecione uma categoria</option>
                        {categorias.map((categoria) => {
                            const id = categoria.id_categoria ?? categoria.id;

                            return (
                                <option key={id} value={id}>
                                    {categoria.nome}
                                </option>
                            );
                        })}
                    </select>
                </div>

                <div className="flex justify-end gap-3">
                    {editandoId !== null && (
                        <button
                            type="button"
                            onClick={cancelarEdicao}
                            disabled={loading}
                            className="rounded-lg border border-slate-300 px-4 py-2 text-slate-700 disabled:opacity-50"
                        >
                            Cancelar
                        </button>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
                    >
                        {editandoId !== null ? "Salvar alterações" : "Cadastrar"}
                    </button>
                </div>
            </form>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 text-sm uppercase text-slate-600">
                        <tr>
                            <th className="px-5 py-4">ID</th>
                            <th className="px-5 py-4">Nome</th>
                            <th className="px-5 py-4">Categoria</th>
                            <th className="px-5 py-4 text-right">Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {subcategorias.map((subcategoria) => {
                            const id =
                                subcategoria.id_subcategoria ?? subcategoria.id;

                            return (
                                <tr key={id} className="border-t border-slate-100">
                                    <td className="px-5 py-4 text-slate-500">#{id}</td>
                                    <td className="px-5 py-4 font-medium text-slate-800">
                                        {subcategoria.nome}
                                    </td>
                                    <td className="px-5 py-4 text-slate-600">
                                        {nomeDaCategoria(subcategoria)}
                                    </td>
                                    <td className="space-x-2 px-5 py-4 text-right">
                                        <button
                                            type="button"
                                            onClick={() => editar(subcategoria)}
                                            disabled={loading}
                                            className="rounded bg-blue-50 px-3 py-2 text-blue-700 disabled:opacity-50"
                                        >
                                            Editar
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => excluir(subcategoria)}
                                            disabled={loading}
                                            className="rounded bg-red-50 px-3 py-2 text-red-700 disabled:opacity-50"
                                        >
                                            Excluir
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}

                        {!loading && subcategorias.length === 0 && (
                            <tr>
                                <td
                                    colSpan="4"
                                    className="px-5 py-8 text-center text-slate-500"
                                >
                                    Nenhuma subcategoria cadastrada.
                                </td>
                            </tr>
                        )}

                        {loading && subcategorias.length === 0 && (
                            <tr>
                                <td
                                    colSpan="4"
                                    className="px-5 py-8 text-center text-slate-500"
                                >
                                    Carregando...
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </main>
    );
}