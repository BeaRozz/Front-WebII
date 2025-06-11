import React from "react";

export default function DonateAndRecieveSection() {
  return (
    <section className="bg-[#f0e9e4] text-center py-20 px-6">
      {/* Title */}
      <h2 className="text-3xl font-bold text-[#023121] mb-10">Dona y Recibe</h2>

      {/* Boxes */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch mb-12">
        {[
          "APORTA DESDE $10 MNX",
          "ELIGE TU PELUCHE 🦕🐮",
          "¡TE LO ENVIAMOS CON MUCHO CARIÑO!",
        ].map((text, idx) => (
          <div
            key={idx}
            className="bg-white px-8 py-10 rounded-2xl shadow-lg border border-gray-200 w-full md:w-1/3 font-semibold text-[#023121] transition-transform hover:scale-105 flex justify-center items-center text-center"
          >
            {text}
          </div>
        ))}
      </div>

      {/* Footer text */}
      <p className="text-[#023121] font-light w-full max-w-2xl mx-auto">
        Por cada donación, te enviamos un adorable peluche de dinosaurio 🦕 o
        vaca 🐄 como símbolo de tu apoyo.
      </p>
    </section>
  );
}
