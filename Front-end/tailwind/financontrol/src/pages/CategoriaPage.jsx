import { useState, useEffect } from "react";
import { categoryService } from "../services/categoryService.js";
import CategoryForm from "../components/CategoryForm";
import CategoryList from "../components/CategoryList";

export default function CategoriesPage() {
    const [categories, setCategories] = useState([]);
    const [editingCategory, setEditingCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const reloadData = async () => {
        try {
            const data = await categoryService.getAll();
            setCategories(Array.isArray(data) ? data : []);
            setError("");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        let ignore = false;

        async function startFetching() {
            try {
                const data = await categoryService.getAll();
                if (!ignore) {
                    setCategories(Array.isArray(data) ? data : []);
                    setError("");
                }
            } catch (err) {
                if (!ignore) setError(err.message);
            } finally {
                if (!ignore) setLoading(false);
            }
        }

        startFetching();

        return () => {
            ignore = true;
        };
    }, []);

    const handleSave = async (formData) => {
        setLoading(true);
        try {
            if (editingCategory) {
                const targetId = editingCategory.id_categoria || editingCategory.id;
                await categoryService.update(targetId, formData);
                setEditingCategory(null);
            } else {
                await categoryService.create(formData);
            }
            await reloadData();
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Deseja realmente excluir esta categoria?")) return;

        setLoading(true);
        try {
            await categoryService.delete(id);
            await reloadData();
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-slate-800">
                    Gerenciar Categorias
                </h1>
            </div>

            {error && (
                <div className="p-3 bg-red-100 border border-red-200 text-red-700 text-sm rounded-lg">
                    {error}
                </div>
            )}

            <CategoryForm
                key={editingCategory ? (editingCategory.id_categoria || editingCategory.id) : "new"}
                onSubmit={handleSave}
                initialData={editingCategory}
                onCancel={() => setEditingCategory(null)}
            />

            <CategoryList
                categories={categories}
                onEdit={setEditingCategory}
                onDelete={handleDelete}
                loading={loading}
            />
        </div>
    );
}