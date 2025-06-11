import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const logo = new URL("../assets/DinoFoundationLogo.png", import.meta.url).href;

export default function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (usuario, contrasena) => {
    setLoading(true); // disable button
    try {
      const response = await fetch("http://localhost:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: usuario,
          password: contrasena,
        }),
      });

      if (!response.ok) {
        throw new Error("Credenciales inválidas.");
      }

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/eventos");
      } else {
        throw new Error("Token no recibido del servidor.");
      }
    } catch (err) {
      setError(err.message || "Error al iniciar sesión.");
    } finally {
      setLoading(false); // re-enable button
    }
  };

  return (
    <div className="flex min-h-screen bg-[#f0e9e4] rounded shadow-md overflow-hidden">
      {/* Left 1/3 - Logo */}
      <div className="w-1/3 bg-[#072c1b] flex items-center justify-center p-8">
        <img
          src={logo}
          alt="Foundation Logo"
          className="w-32 h-32 md:w-40 md:h-40 object-contain"
        />
      </div>

      {/* Right 2/3 - Login form */}
      <div className="relative w-2/3 p-12 flex flex-col bg-[#f0e9e4]">
        {/* "Log In" top-left */}
        <div className="absolute top-8 left-8 font-bold text-2xl text-[#023121]">
          Log In
        </div>

        {/* Form container centered vertically */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const user = e.target.usuario.value.trim();
            const password = e.target.contrasena.value.trim();

            if (!user || !password) {
              setError("Por favor, complete todos los campos.");
            } else {
              setError("");
              handleLogin(user, password);
            }
          }}
          className="flex flex-col justify-center flex-grow w-full mx-auto gap-6"
        >
          {/* Show error to user */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
              {error}
            </div>
          )}

          <div>
            <label
              htmlFor="usuario"
              className="block mb-2 text-[#023121] font-semibold"
            >
              Usuario
            </label>
            <input
              id="usuario"
              type="text"
              className="w-full px-4 py-2 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Ingrese su usuario"
            />
          </div>

          <div>
            <label
              htmlFor="contrasena"
              className="block mb-2 text-[#023121] font-semibold"
            >
              Contraseña
            </label>
            <input
              id="contrasena"
              type="password"
              className="w-full px-4 py-2 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Ingrese su contraseña"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`bg-[#023121] text-white px-6 py-3 rounded font-semibold transition max-w-md self-center ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700"
            }`}
          >
            {loading ? "Iniciando..." : "Iniciar sesión"}
          </button>
        </form>
      </div>
    </div>
  );
}
