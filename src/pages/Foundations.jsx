import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavLinks from "../components/NavLinks";
import FoundationCard from "../components/FoundationCard";

export default function Foundations() {
  const [fundaciones, setFundaciones] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/fundaciones/`, {
      headers: { Authorization: token },
    })
      .then((res) => res.json())
      .then(setFundaciones);
  }, [token]);

  if (!fundaciones) return <div className="p-6">Cargando...</div>;

  return (
    <div className="w-full pt-6 flex flex-col justify-center gap-4 bg-[#f3ece7]">
      <div className="px-6">
        <NavLinks active="Fundaciones" />
      </div>
      <h1 className="px-6 text-2xl md:text-3xl font-bold text-[#023121] leading-snug my-10">
        Fundaciones Aliadas
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#102e21] p-6 w-full mx-auto shadow-lg justify-items-center">
        {fundaciones.map((fundacion) => (
          <FoundationCard key={fundacion.id} fundacion={fundacion} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
