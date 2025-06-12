import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; // <-- add useParams
import Footer from "../components/Footer";
import NavLinks from "../components/NavLinks";

export default function FoundationDetails() {
  const { id } = useParams(); // <-- get id from URL params
  const [fundacion, setFundacion] = useState(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  useEffect(() => {
    if (id) {
      // safeguard to avoid fetch with undefined id
      fetch(`http://localhost:8000/api/fundaciones/${id}`, {
        headers: { Authorization: token },
      })
        .then((res) => res.json())
        .then(setFundacion);
    }
  }, [id, token]);

  if (!fundacion) return <div className="p-6">Cargando...</div>;

  const proyectos = fundacion.proyectos_destacados.split(",").map((p, i) => (
    <li key={i} className="flex items-start gap-2 text-white">
      🦕 {p.trim()}
    </li>
  ));

  return (
    <div className="w-full pt-6 flex flex-col justify-center gap-4 bg-[#f3ece7]">
      <div className="px-6">
        <NavLinks active="Fundaciones" />
      </div>
      <h1 className="px-6 text-2xl md:text-3xl font-bold text-[#023121] leading-snug my-10">
        {fundacion.nombre}
      </h1>

      <div className="flex-1 gap-6 bg-[#102e21] p-6 w-full mx-auto shadow-lg justify-items-center">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center w-full">
          <img
            src={fundacion.link_logo}
            alt={fundacion.nombre}
            className="w-64 h-64 object-contain"
          />
          <div className="w-full text-start">
            <h2 className="text-white text-2xl font-bold mb-10">
              {fundacion.nombre}
            </h2>
            <p className="text-white mb-10">{fundacion.mision}</p>
            <p className="text-white text-xs">
              <span className="font-semibold">Áreas de enfoque:</span>{" "}
              <span className="font-normal">{fundacion.areas_enfoque}</span>
            </p>
          </div>
        </div>

        <div className="mt-6 w-full">
          <h3 className="text-white text-lg font-bold mb-2">
            Proyectos destacados:
          </h3>
          <ul className="list-none space-y-2">{proyectos}</ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}
