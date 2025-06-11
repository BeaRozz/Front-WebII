import React from "react";

const logo = new URL("../assets/DinoFoundationLogo.png", import.meta.url).href;

export default function FoundationSection() {
  const handleConoceMasClick = () => {
    const aboutSection = document.getElementById("AboutSection");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-[#f0e9e4] rounded shadow-md overflow-hidden min-h-[20rem]">
      {/* Left section */}
      <div className="w-full md:w-1/2 p-6 md:pl-8 flex flex-col justify-center gap-4">
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-green-700">Home</span> - Eventos - Fundaciones
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-[#023121] leading-snug">
          Dino
          <br />
          Foundations
        </h1>
        <p className="text-[#023121] text-base md:text-lg">Cow’s association</p>
        <button
          onClick={handleConoceMasClick}
          className="border border-black px-4 py-2 w-fit text-sm font-medium hover:bg-black hover:text-white transition"
        >
          Conoce más
        </button>
      </div>

      {/* Right section */}
      <div className="relative w-full md:w-1/2 bg-[#072c1b] flex items-center justify-center p-6 md:p-8">
        {/* Login button positioned absolutely */}
        <button
          type="button"
          className="absolute top-4 right-4 border border-white text-white px-6 py-2 font-medium rounded hover:bg-white hover:text-[#072c1b] transition"
        >
          Login
        </button>

        <img
          src={logo}
          alt="Foundation Logo"
          className="w-20 h-20 md:w-32 md:h-32 object-contain"
        />
      </div>
    </div>
  );
}
