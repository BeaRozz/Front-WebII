import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EventCard from "../components/EventCard";

const logo = new URL("../assets/DinoFoundationLogo.png", import.meta.url);

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/"); // Redirect immediately if no token
      return;
    }

    fetch("http://localhost:8000/api/eventos", {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        if (res.status === 401) {
          // Unauthorized, redirect to main page
          navigate("/");
          return; // Stop further processing
        }
        if (!res.ok) {
          const text = await res.text();
          throw new Error("Error al obtener los eventos: " + text);
        }
        return res.json();
      })
      .then((data) => {
        setEvents(Array.isArray(data) ? data : data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#f3ece7]">
      <div className="w-full md:w-1/2 p-6 md:pl-8 flex flex-col justify-center gap-4">
        <p className="text-sm text-gray-600">
          Home - <span className="font-semibold text-green-700">Eventos</span> -
          Fundaciones
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-[#023121] leading-snug my-10">
          Nuestros Eventos
        </h1>
        <button className="border border-black px-4 py-2 w-fit text-sm font-medium hover:bg-black hover:text-white transition">
          Agregar evento
        </button>
      </div>

      {loading && <p>Cargando eventos...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#102e21] p-6 w-full mx-auto shadow-lg justify-items-center">
        {Array.isArray(events) &&
          events.map((event) => <EventCard key={event.id} event={event} />)}
      </div>

      <div className="bg-[#072c1b] text-white shadow-md p-6 flex flex-col items-center w-full mx-auto space-y-4 mt-5">
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
    </div>
  );
}
