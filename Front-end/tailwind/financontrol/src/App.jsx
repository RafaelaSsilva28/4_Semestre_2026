import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import CategoriaPage from "./pages/CategoriaPage";
import SubcategoriaPage from "./pages/SubcategoriaPage";
import { authService } from "./services/authService";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem("token"))
  );

  const handleLogout = () => {
    authService.logout();
    setIsAuthenticated(false);
  };

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <BrowserRouter>
      {!isAuthenticated ? (
        <Routes>
          <Route
            path="/login"
            element={<LoginPage onLoginSuccess={handleAuthSuccess} />}
          />
          <Route
            path="/register"
            element={<RegisterPage onRegisterSuccess={handleAuthSuccess} />}
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      ) : (
        <div className="min-h-screen bg-slate-50 text-slate-800">
          <header className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <Link to="/" className="text-xl font-bold text-slate-800">
                FinanControl
              </Link>

              <nav className="flex gap-4">
                <Link to="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">
                  Início
                </Link>
                <Link to="/categorias" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">
                  Categorias
                </Link>
                <Link to="/subcategorias" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">
                  Subcategorias
                </Link>
              </nav>
            </div>

            <button
              onClick={handleLogout}
              className="text-sm bg-slate-100 hover:bg-slate-200 text-slate-600 px-3 py-1.5 rounded-lg transition"
            >
              Sair
            </button>
          </header>

          <main className="py-6">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/categorias" element={<CategoriaPage />} />
              <Route path="/subcategorias" element={<SubcategoriaPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      )}
    </BrowserRouter>
  );
}