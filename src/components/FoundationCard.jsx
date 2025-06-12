import React from "react";
import { useNavigate } from "react-router-dom";

export default function FoundationCard({ fundacion }) {
  const navigate = useNavigate();
  return (
    <div className="bg-[#e7dfd7] border border-[#102e21] rounded-md p-4 text-center shadow-md hover:shadow-lg transition duration-300 max-w-xs w-full flex flex-col justify-between h-full">
      <div>
        <img
          src={fundacion?.link_logo}
          alt={fundacion?.nombre}
          className="h-24 mx-auto mb-4 object-contain"
        />
        <h3 className="font-semibold text-[#023121] mb-2">
          {fundacion?.nombre}
        </h3>
        <p className="text-sm text-[#023121] mb-4">{fundacion?.mision}</p>
      </div>
      <button
        onClick={() => navigate(`/fundaciones/${fundacion.id}`)}
        className="px-4 py-1 border border-[#023121] text-[#023121] font-semibold text-sm rounded hover:bg-[#023121] hover:text-white transition w-auto min-w-[9rem] mx-auto"
      >
        Más información
      </button>
    </div>
  );
}
