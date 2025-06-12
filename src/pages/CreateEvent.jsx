import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const logo = new URL("../assets/DinoFoundationLogo.png", import.meta.url).href;

export default function CreateEvent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    fecha_inicial: "",
    hora_inicial: "",
    fecha_final: "",
    hora_final: "",
    fundacion: "",
    lugar: "",
    categoria: "",
    imagen: "",
  });

  const [lugares, setLugares] = useState([]);
  const [fundaciones, setFundaciones] = useState([]);
  const [imagenes, setImagenes] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [error, setError] = useState(""); // General API or form error
  const [fieldErrors, setFieldErrors] = useState({}); // Individual field errors

  const token = localStorage.getItem("token");
  if (!token) return null;

  useEffect(() => {
    fetch("http://localhost:8000/api/lugares", {
      headers: { Authorization: token },
    })
      .then((res) => res.json())
      .then(setLugares);

    fetch("http://localhost:8000/api/fundaciones", {
      headers: { Authorization: token },
    })
      .then((res) => res.json())
      .then(setFundaciones);

    fetch("http://localhost:8000/api/img_promocionales", {
      headers: { Authorization: token },
    })
      .then((res) => res.json())
      .then(setImagenes);

    fetch("http://localhost:8000/api/categorias", {
      headers: { Authorization: token },
    })
      .then((res) => res.json())
      .then(setCategorias);
  }, [token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFieldErrors({ ...fieldErrors, [e.target.name]: "" });
    setError("");
  };

  const validateForm = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) newErrors[key] = "Este campo es obligatorio.";
    });

    setFieldErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      setError("Por favor, complete todos los campos.");
      return;
    }
    console.log(formData);

    fetch("http://localhost:8000/api/eventos/crear/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(formData),
    })
      .then(async (res) => {
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.message || "Error al crear evento.");
        }
        return res.json();
      })
      .then(() => {
        alert("Evento creado con éxito");
        navigate("/eventos")
        setFormData({
          nombre: "",
          descripcion: "",
          fecha_inicial: "",
          hora_inicial: "",
          fecha_final: "",
          hora_final: "",
          fundacion: "",
          lugar: "",
          categoria: "",
          imagen: "",
        });
        setError("");
        setFieldErrors({});
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const renderError = (field) =>
    fieldErrors[field] && (
      <p className="text-red-600 text-sm mt-1">{fieldErrors[field]}</p>
    );

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f3ece7]">
      <div className="flex-1 p-4 md:p-6 flex flex-col gap-2 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Nuevo Evento</h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
            {error}
          </div>
        )}

        <input
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre del Evento"
          className="w-full p-2 mb-1 border rounded"
        />
        {renderError("nombre")}

        <input
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          placeholder="Descripción"
          className="w-full p-2 mb-1 border rounded"
        />
        {renderError("descripcion")}

        <div className="flex gap-2 mb-1">
          <input
            type="date"
            name="fecha_inicial"
            value={formData.fecha_inicial}
            onChange={handleChange}
            className="w-1/2 p-2 border rounded"
          />
          <input
            type="time"
            name="hora_inicial"
            value={formData.hora_inicial}
            onChange={handleChange}
            className="w-1/2 p-2 border rounded"
          />
        </div>
        {renderError("fecha_inicial")}
        {renderError("hora_inicial")}

        <div className="flex gap-2 mb-1">
          <input
            type="date"
            name="fecha_final"
            value={formData.fecha_final}
            onChange={handleChange}
            className="w-1/2 p-2 border rounded"
          />
          <input
            type="time"
            name="hora_final"
            value={formData.hora_final}
            onChange={handleChange}
            className="w-1/2 p-2 border rounded"
          />
        </div>
        {renderError("fecha_final")}
        {renderError("hora_final")}

        <select
          name="lugar"
          value={formData.lugar}
          onChange={handleChange}
          className="w-full p-2 mb-1 border rounded"
        >
          <option value="">Lugar del Evento</option>
          {lugares.map((l) => (
            <option key={l.id} value={l.nombre}>
              {l.nombre}
            </option>
          ))}
        </select>
        {renderError("lugar")}

        <select
          name="fundacion"
          value={formData.fundacion}
          onChange={handleChange}
          className="w-full p-2 mb-1 border rounded"
        >
          <option value="">Fundación</option>
          {fundaciones.map((f) => (
            <option key={f.id} value={f.nombre}>
              {f.nombre}
            </option>
          ))}
        </select>
        {renderError("fundacion")}

        <select
          name="imagen"
          value={formData.imagen}
          onChange={handleChange}
          className="w-full p-2 mb-1 border rounded"
        >
          <option value="">Imagen Promocional</option>
          {imagenes.map((img) => (
            <option key={img.id} value={img.nombre}>
              {img.nombre}
            </option>
          ))}
        </select>
        {renderError("imagen")}

        <select
          name="categoria"
          value={formData.categoria}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        >
          <option value="">Categoría</option>
          {categorias.map((c) => (
            <option key={c.id} value={c.nombre}>
              {c.nombre}
            </option>
          ))}
        </select>
        {renderError("categoria")}
      </div>

      {/* Right side */}
      <div className="flex-1 flex flex-col justify-center items-center bg-[#102e21] p-6 gap-10 md:gap-20">
        <img
          src={logo}
          alt="Foundation Logo"
          className="w-20 h-20 md:w-32 md:h-32 object-contain"
        />

        <button
          onClick={handleSubmit}
          className="border border-white text-white px-6 py-3 text-lg font-semibold w-full max-w-xs hover:bg-white hover:text-black transition rounded"
        >
          Crear Evento
        </button>
      </div>
    </div>
  );
}
