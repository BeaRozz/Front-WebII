import { useNavigate } from "react-router-dom";
import { CalendarDays, MapPin, Trash2 } from "lucide-react";

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

export default function EventCard({ event }) {
  const navigate = useNavigate();
  const { id, nombre, fecha_inicial, fecha_final, fundacion, imagen, lugar } =
    event;

  const handleClick = () => {
    navigate(`/eventos/${id}`);
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 max-w-sm">
      <img
        src={imagen.link}
        alt={imagen.nombre}
        className="h-40 w-full object-cover rounded-md"
      />
      <h3 className="font-semibold text-lg mt-3">{nombre}</h3>
      <p className="text-sm text-gray-600">{fundacion.nombre}</p>
      <div className="flex items-center text-sm text-gray-600 mt-2">
        <CalendarDays className="w-4 h-4 mr-1" />
        {formatEventDates(fecha_inicial, fecha_final)}
      </div>

      <div className="flex items-center text-sm text-gray-600 mt-1">
        <MapPin className="w-4 h-4 mr-1" />
        {lugar.nombre}
      </div>
      <div className="w-full flex justify-center">
        <button
          onClick={handleClick}
          className="border border-black px-4 py-2 w-fit text-sm font-medium hover:bg-black hover:text-white transition mt-2 rounded"
        >
          Más información
        </button>
      </div>
    </div>
  );
}
