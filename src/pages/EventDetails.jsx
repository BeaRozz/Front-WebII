import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import PlushGallery from "../components/PlushGallery";
import Footer from "../components/Footer";

function formatEventDates(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const startDay = startDate.getDate();
  const startMonth = startDate.getMonth();
  const startYear = startDate.getFullYear();

  const endDay = endDate.getDate();
  const endMonth = endDate.getMonth();
  const endYear = endDate.getFullYear();

  const pad = (n) => n.toString().padStart(2, "0");

  if (startYear === endYear && startMonth === endMonth && startDay === endDay) {
    // Same exact date
    return `${pad(startDay)} de ${months[startMonth]}, ${startYear}`;
  }

  if (startYear === endYear && startMonth === endMonth) {
    // Same month and year but different days
    return `${startDay}-${endDay} de ${months[startMonth]}, ${startYear}`;
  }

  // Different month or year
  return `${pad(startDay)}-${months[startMonth]}-${startYear} - ${pad(
    endDay
  )}-${months[endMonth]}-${endYear}`;
}

export default function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/"); // Redirect immediately if no token
    return;
  }

  useEffect(() => {
    fetch(`http://localhost:8000/api/eventos/${id}`, {
      headers: {
        Authorization: token, // Replace with your actual token
      },
    })
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, [id]);

  if (!event) return <div className="p-8">Cargando...</div>;

  const {
    nombre,
    descripcion,
    imagen,
    fecha_inicial,
    fecha_final,
    hora_inicial,
    hora_final,
    lugar,
    categoria,
    fundacion,
  } = event;

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

  return (
    <div className="bg-[#f3ece7] min-h-screen text-[#102e21]">
      <div className="px-6 py-4">
        <p className="text-sm text-gray-600">Home - Eventos - Fundaciones</p>
        <h1 className="text-3xl font-bold mt-10">{nombre}</h1>
        <span className="inline-block mt-2 bg-[#102e21] text-white px-3 py-1 text-sm rounded mb-10">
          {categoria.nombre}
        </span>
      </div>

      <div className="bg-[#102e21] p-6 text-white">
        <img
          src={imagen.link}
          alt={imagen.nombre}
          className="w-full rounded-xl object-cover max-h-[400px] mb-6"
        />
        <h2 className="text-2xl font-bold">{nombre}</h2>
        <p className="mt-2">{descripcion}</p>

        <div className="flex items-center mt-4 gap-2">
          {fundacion.link_logo && (
            <img
              src={fundacion.link_logo}
              alt={fundacion.nombre}
              className="h-8 w-8 object-contain"
            />
          )}
          <span>{fundacion.nombre}</span>
        </div>

        <div className="mt-4 space-y-2 text-sm text-white">
          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4" />
            {formatEventDates(fecha_inicial, fecha_final)}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {hora_inicial.slice(0, 5)} AM - {hora_final.slice(0, 5)} PM
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {lugar.nombre}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Peluches disponibles</h3>
          <PlushGallery />
        </div>

        <button
          className="mt-6 border border-white px-4 py-2 rounded hover:bg-white hover:text-[#102e21] transition"
          onClick={() => navigate(`/eventos/${id}/edit`)}
        >
          Editar Evento
        </button>
      </div>

      <Footer />
    </div>
  );
}
