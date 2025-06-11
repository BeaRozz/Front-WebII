import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="bg-[#f0e9e4] min-h-screen flex items-center justify-center font-sans px-6 py-20">
      <div className="text-center max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 p-12">
        <h1 className="text-8xl font-extrabold text-[#023121] mb-6">404</h1>
        <p className="text-2xl font-semibold text-[#023121] mb-4">
          Página no encontrada.
        </p>
        <p className="text-base text-[#023121] mb-8 leading-relaxed">
          Lo sentimos, no podemos encontrar esa página. Explora mucho contenido
          en la página principal.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 text-lg font-semibold rounded-2xl bg-[#023121] text-white shadow-md shadow-gray-400 transition 
                     hover:bg-[#03482c] focus:outline-none focus:ring-4 focus:ring-[#023121aa]"
          aria-label="Volver a la página principal"
        >
          Volver a Inicio
        </Link>
      </div>
    </section>
  );
}
