import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { EventType } from "@/types";
import { createCita, getCitas } from "./actions/calendar";

export default function GetAService({ isModal }: { isModal: boolean }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "Social",
    address: "",
    message: "",
    eventId: "",
  });
  const [meeting, setMeeting] = useState<EventType[] | null>(null);
  const [loading, setLoading] = useState(false);

  const listCitas = async () => {
    const res = await getCitas();

    if (res && res.length > 0) setMeeting(res);
    else setMeeting(null);
  };

  useEffect(() => {
    listCitas();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const event = meeting?.find((m) => m.id === formData.eventId);

    if (
      formData.eventId === "" ||
      formData.eventId === "no seleccionado" ||
      !event
    ){
      setLoading(false)
      return alert("Debes seleccionar una fecha!");
    }

    const res = await createCita(event, {
      ...formData,
      name: `${formData.name} - Maquillaje`,
    });

    setLoading(false)

    if (res.success) {
      alert("Cita agendada con exito!");
    } else {
      return alert("Ocurrio un error inesperado!");
    }

    setFormData({
      name: "",
      email: "",
      serviceType: "Social",
      message: "",
      address: "",
      phone: "",
      eventId: "no seleccionado",
    });

    listCitas();
  };

  return (
    <section
      className={`w-full flex flex-col justify-start items-center text-[#363636] gap-12 ${isModal?'my-6' : "mt-24"}`}
      id="servicios"
    >
      <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl text-[#363636]">
        SOLICITAR SERVICIO
      </h2>
      <form className="flex flex-col w-full max-w-xl" onSubmit={handleSubmit}>
        {/* Nombre */}
        <div className="mb-4">
          <Input
            required
            className="w-full rounded-lg"
            id="name"
            label="Nombre completo"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <Input
            required
            className="w-full rounded-lg"
            id="phone"
            label="Telefono"
            name="phone"
            type="text"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* Correo */}
        <div className="mb-4">
          <Input
            className="w-full rounded-lg"
            id="email"
            label="Correo electronico"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <Input
            required
            className="w-full rounded-lg"
            id="address"
            label="Direccion"
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        {/* Tipo de Servicio */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="serviceType"
          >
            Tipo de servicio
          </label>
          <select
            required
            className="w-full border px-4 py-2 rounded-lg "
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChangeSelect}
          >
            <option value="Social">Social</option>
            <option value="Express">Express</option>
            <option value="Evento Especial">Evento Especial</option>
          </select>
        </div>

        {/* Fecha de Servicio */}
        {meeting && meeting.length > 0 ? (
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="serviceType"
            >
              Fecha y hora
            </label>
            <select
              required
              className="w-full border px-4 py-2 rounded-lg "
              id="datetime"
              name="eventId"
              value={formData.eventId}
              onChange={handleChangeSelect}
            >
              <option value="no seleccionado">No seleccionado</option>
              {meeting.map((meet, i) => {
                return (
                  <option key={meet.id} value={meet.id}>
                    {new Date(meet.start.dateTime).toLocaleDateString()},{" "}
                    {new Date(meet.start.dateTime)
                      .toISOString()
                      .split("T")[1]
                      .slice(0, 5)}
                  </option>
                );
              })}
            </select>
          </div>
        ) : (
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="serviceType"
            >
              No hay citas disponibles
            </label>
          </div>
        )}

        {/* Mensaje */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="message"
          >
            Mensaje adicional (opcional)
          </label>
          <textarea
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            id="message"
            name="message"
            placeholder="Déjanos un mensaje si tienes alguna preferencia específica"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        {/* Botón de envío */}
        <Button
          className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
          color="secondary"
          type="submit"
          isLoading={loading}
        >
          ENVIAR SOLICITUD
        </Button>
      </form>
    </section>
  );
}
