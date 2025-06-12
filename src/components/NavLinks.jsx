import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavLinks({ active }) {
  const navigate = useNavigate();

  // Helper to render each nav item, highlighting the active one
  const renderLink = (name, path) => {
    if (active === name) {
      return <span className="font-semibold text-green-700">{name}</span>;
    }
    return (
      <button
        className="text-gray-600 hover:underline"
        onClick={() => navigate(path)}
      >
        {name}
      </button>
    );
  };

  return (
    <p className="text-sm text-gray-600">
      {renderLink("Home", "/")} - {renderLink("Eventos", "/eventos")} -{" "}
      <span
        className={
          active === "Fundaciones"
            ? "font-semibold text-green-700"
            : "text-gray-600"
        }
      >
        Fundaciones
      </span>
    </p>
  );
}
