export const API_URL = "https://apifinancontrol-phi.vercel.app";

export async function apiFetch(baseUrl, endpoint, method = "GET", body = null) {
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const response = await fetch(`${baseUrl}${endpoint}`, {
    method,
    headers,
    ...(body !== null ? { body: JSON.stringify(body) } : {}),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message ||
        errorData.error ||
        `Erro ${response.status}: falha na requisição`
    );
  }

  if (response.status === 204) return null;

  return response.json();
}