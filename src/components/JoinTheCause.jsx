import React from "react";

const logo = new URL("../assets/DinoFoundationLogo.png", import.meta.url);

export default function JoinTheCauseSection() {
  return (
    <section className="bg-white text-center py-20 px-6">
      {/* Title */}
      <div className="text-3xl mb-4 text-[#023121] font-bold">❤️ Únete a la causa</div>

      {/* Subtitle */}
      <p className="text-[#023121] text-base md:text-lg max-w-2xl mx-auto mb-10">
        Haz clic en Donar ahora y forma parte de un movimiento que combina ciencia, campo y ternura.
      </p>

      {/* Green rectangle */}
      <div className="bg-[#072c1b] text-white rounded-xl shadow-md p-6 flex flex-col items-center max-w-3xl mx-auto space-y-4">
        {/* Top row: Logo and Dino Foundations side by side */}
        <div className="flex items-center w-full">
          <img
            src={logo}
            alt="Foundation Logo"
            className="w-12 h-12 md:w-20 md:h-20 object-contain mr-4"
          />
          <h2 className="font-bold text-start text-3xl md:text-7xl leading-tight">
            Dino <br /> Foundations
          </h2>
        </div>

        {/* Bottom row: Cow's association */}
        <p className="text-lg md:text-2xl w-full text-end">Cow's association</p>
      </div>
    </section>
  );
}
