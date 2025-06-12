import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavLinks({ active }) {
  const navigate = useNavigate();

  const renderLink = (name, path) => {
    const isActive = active === name;
    return (
      <button
        onClick={() => navigate(path)}
        className={
          isActive
            ? "font-semibold text-green-700 underline" // active style
            : "text-gray-600 hover:underline"
        }
      >
        {name}
      </button>
    );
  };

  return (
    <p className="text-sm text-gray-600 space-x-2">
      {renderLink("Home", "/")} - {renderLink("Eventos", "/eventos")} - {renderLink("Fundaciones", "/fundaciones")}
    </p>
  );
}
