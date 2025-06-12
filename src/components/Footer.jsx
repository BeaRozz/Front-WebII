import { Link } from "react-router-dom";

const logo = new URL("../assets/DinoFoundationLogo.png", import.meta.url);

export default function Footer() {
  return (
    <div className="bg-[#072c1b] text-white shadow-md p-6 flex flex-col items-center w-full mx-auto space-y-4 mt-5">
      {/* Top row: Clickable Logo and Dino Foundations */}
      <Link to="/" className="flex items-center w-full hover:opacity-80 transition-opacity duration-200">
        <img
          src={logo}
          alt="Foundation Logo"
          className="w-12 h-12 md:w-20 md:h-20 object-contain mr-4"
        />
        <h2 className="font-bold text-start text-3xl md:text-7xl leading-tight">
          Dino <br /> Foundations
        </h2>
      </Link>

      {/* Bottom row: Cow's association */}
      <p className="text-lg md:text-2xl w-full text-end">Cow's association</p>
    </div>
  );
}
