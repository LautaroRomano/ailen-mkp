"use client";

import Carrousel from "@/components/Carrousel";
import Navbar from "@/components/Navbar";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  AiOutlineInstagram as Instagram,
  AiOutlineFacebook as Facebook,
} from "react-icons/ai";
import { BsStars } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

export default function Component() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "Social",
    address: "",
    message: "",
  });

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    alert(
      "Tu solicitud ha sido enviada con éxito. ¡Nos pondremos en contacto pronto!"
    );
    setFormData({
      name: "",
      email: "",
      serviceType: "Social",
      message: "",
      address: "",
      phone: "",
    });
  };

  const galleryImages = [
    "/img/maquillajes/1.jpg",
    "/img/maquillajes/2.jpg",
    "/img/maquillajes/3.jpg",
    "/img/maquillajes/4.jpg",
    "/img/maquillajes/5.jpg",
    "/img/maquillajes/6.jpg",
    "/img/maquillajes/7.jpg",
    "/img/maquillajes/8.jpg",
    "/img/maquillajes/9.jpg",
    // "/img/maquillajes/10.jpg",
    // "/img/maquillajes/11.jpg",
    // "/img/maquillajes/12.jpg",
    // "/img/maquillajes/13.jpg",
    // "/img/maquillajes/14.jpg",
    // "/img/maquillajes/15.jpg",
    // "/img/maquillajes/16.jpg",
    // "/img/maquillajes/17.jpg",
    // "/img/maquillajes/18.jpg",
    // "/img/maquillajes/19.jpg",
    // "/img/maquillajes/20.jpg",
    // "/img/maquillajes/21.jpg",
    // "/img/maquillajes/22.jpg",
    // "/img/maquillajes/23.jpg",
    // "/img/maquillajes/24.jpg",
    // "/img/maquillajes/25.jpg",
    // "/img/maquillajes/26.jpg",
    // "/img/maquillajes/27.jpg",
    // "/img/maquillajes/28.jpg",
    // "/img/maquillajes/29.jpg",
    // "/img/maquillajes/30.jpg",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="h-screen z-0 bg-white pb-[88px] px-16">
        <div className="grid md:grid-cols-2 gap-8  h-full py-24">
          <div className="space-y-6 text-start  px-6 py-12 md:px-16 flex items-start justify-center w-full flex-col relative">
            <div className="absolute right-[100px] top-[225px] text-5xl text-[#363636]">
              <BsStars />
            </div>
            <h1 className="text-7xl font-bold leading-tight tracking-tighter md:text-7xl text-[#363636]">
              MAQUILLAJE
              <br />
              <span className="text-[#FF8B8B]">PROFESIONAL</span>
            </h1>
            <Button
              type="submit"
              color="secondary"
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              SOLICITAR SERVICIO
            </Button>
          </div>
          <div className="text-start w-full relative">
            <div className="bg-[#363636] absolute right-[400px] bottom-0 rounded-2xl w-[350px] h-[480px] overflow-hidden">
              <div className="w-full h-full relative">
                <div className="absolute top-[130px] left-[15px]">
                  <p className="text-[20px]">EXPRESS</p>
                </div>
                <div className="absolute top-[160px] left-0 h-px w-[120px] bg-white" />
                <div className="absolute top-[157px] left-[120px] h-2 w-2 rounded-full bg-white" />
                <Image
                  src="/img/maquillaje-1-sin-fondo.png"
                  alt="Maquillaje profesional"
                  width={350}
                  height={350}
                  className=" absolute -right-16 bottom-0"
                />
              </div>
            </div>
            <div className="bg-[#FA8072] absolute right-0 top-0 rounded-2xl w-[350px] h-[480px] overflow-hidden">
              <div className="w-full h-full relative">
                <div className="absolute top-[130px] left-[25px]">
                  <p className="text-[20px]">SOCIAL</p>
                </div>
                <div className="absolute top-[160px] left-0 h-px w-[120px] bg-white" />
                <div className="absolute top-[157px] left-[120px] h-2 w-2 rounded-full bg-white" />
                <Image
                  src="/img/maquillaje-2-sin-fondo.png"
                  alt="Maquillaje profesional"
                  width={300}
                  height={300}
                  className=" absolute -right-16 bottom-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* deltalle servicio */}
      <section
        className="w-full flex flex-col justify-start items-center text-[#363636] gap-12"
        id="detalles-servicios"
      >
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl text-[#363636]">
          DETALLES DE LOS SERVICIOS
        </h2>
        {/* Maquillaje social */}
        <div className="w-[1300px] flex gap-20 relative h-[800px]">
          <div className="flex flex-col w-full justify-start items-start text-start gap-4">
            <div className="flex">
              <h2 className="text-4xl font-bold leading-tight tracking-tighter text-[#FF8B8B]">
                MAQUILLAJE SOCIAL
              </h2>
            </div>
            <div className="flex flex-col">
              <p>Tiene una duracion de 1 hora y 15 min aproximadamente.</p>
              <p>
                Se pueden realizar tecnicas elaboradas en los ojos según
                asesoramiento y preferencias del cliente.
              </p>
            </div>
            <div className="flex flex-col">
              <strong className="text-[#FF8B8B]">INCLUYE</strong>
              <ul>
                <li>
                  Pestañas postizas en grupito, pegadas con pegamento de primera
                  marca libre de látex.
                </li>
                <li>Piedritas de strass/gemas o perlas.</li>
                <li>
                  Kit de retoque de maquillaje súper completo para que puedas
                  retocar tu maquillaje durante el evento.
                </li>
              </ul>
            </div>

            <div className="flex flex-col my-12 gap-4 justify-center items-center w-full">
              <h3 className="text-3xl font-bold leading-tight tracking-tighter text-[#FF8B8B]">
                PRECIO MAQUILLAJE SOCIAL
              </h3>

              <p className="text-2xl font-semibold leading-tight tracking-tighter line-through">
                $21.000
              </p>
              <p className="text-4xl font-semibold leading-tight tracking-tighter ">
                $18.000
              </p>
              <p>Descuento hasta fin de año!</p>
              <Button
                type="submit"
                color="secondary"
                className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
              >
                SOLICITAR SERVICIO
              </Button>
            </div>
          </div>
          <div className="flex flex-col w-full justify-end items-center">
            <div className="flex w-full h-auto relative">
              <Carrousel />
            </div>
          </div>
        </div>
        {/* Maquillaje express */}
        <div className="w-[1300px] flex gap-20">
          <div className="flex flex-col w-full justify-end items-center">
            <div className="flex w-full h-auto relative">
              <Carrousel />
            </div>
          </div>
          <div className="flex flex-col w-full justify-start items-start text-start gap-4">
            <div className="flex">
              <h2 className="text-4xl font-bold leading-tight tracking-tighter text-[#FF8B8B]">
                MAQUILLAJE EXPRESS
              </h2>
            </div>
            <div className="flex flex-col">
              <p>Tiene una duracion de 45 min aproximadamente.</p>
              <p>
                Este servicio es ideal para cuando buscas un maquillaje casual.
              </p>
              <p>
                Se pretende un resultado natural por lo que no incluye pestañas
                postizas.
              </p>
              <p>(No incluye kit de retoque)</p>
            </div>
            <div className="flex flex-col">
              <strong className="text-[#FF8B8B]">NIÑAS</strong>
              <p>
                Es una exelente opción para egresaditas, ya que no necesitan
                mucho maquillaje en la piel se pueden realizar algo elaborado en
                los ojos con gemas/strass o perlas.
              </p>
            </div>
            <div className="flex flex-col">
              <strong className="text-[#FF8B8B]">ADULTAS</strong>
              <p>Enfocado en piel y un difuminado simple en los ojos.</p>
            </div>
            <div className="flex flex-col my-12 gap-4 justify-center items-center w-full">
              <h3 className="text-3xl font-bold leading-tight tracking-tighter text-[#FF8B8B]">
                PRECIO MAQUILLAJE EXPRESS
              </h3>

              <p className="text-2xl font-semibold leading-tight tracking-tighter line-through">
                $21.000
              </p>
              <p className="text-4xl font-semibold leading-tight tracking-tighter ">
                $18.000
              </p>
              <p>Descuento hasta fin de año!</p>
              <Button
                type="submit"
                color="secondary"
                className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
              >
                SOLICITAR SERVICIO
              </Button>
            </div>
          </div>
          
        </div>
      </section>

      {/* Solicitar servicio */}
      <section
        id="servicios"
        className="w-full flex flex-col justify-start items-center text-[#363636] gap-12 mt-24"
      >
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl text-[#363636]">
          SOLICITAR SERVICIO
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-xl">
          {/* Nombre */}
          <div className="mb-4">
            <Input
              label="Nombre completo"
              className="w-full rounded-lg"
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <Input
              label="Telefono"
              className="w-full rounded-lg"
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Correo */}
          <div className="mb-4">
            <Input
              label="Correo electronico"
              className="w-full rounded-lg"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <Input
              label="Direccion"
              className="w-full rounded-lg"
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          {/* Tipo de Servicio */}
          <div className="mb-4">
            <label
              htmlFor="serviceType"
              className="block text-gray-700 font-medium mb-2"
            >
              Tipo de servicio
            </label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChangeSelect}
              required
              className="w-full border px-4 py-2 rounded-lg "
            >
              <option value="Social">Social</option>
              <option value="Express">Express</option>
              <option value="Evento Especial">Evento Especial</option>
            </select>
          </div>

          {/* Mensaje */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Mensaje adicional (opcional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              placeholder="Déjanos un mensaje si tienes alguna preferencia específica"
            />
          </div>

          {/* Botón de envío */}
          <Button
            type="submit"
            color="secondary"
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
          >
            ENVIAR SOLICITUD
          </Button>
        </form>
      </section>

      {/* Services Section */}
      <section
        id="mis-trabajos"
        className="w-full flex flex-col justify-start items-center text-[#363636] gap-4 mt-24"
      >
        <h2 className="text-2xl font-bold text-[#363636]">
          UNA MUESTRA DE MIS TRABAJOS A CONTINUACION
        </h2>
        <FaArrowDown size={24} className=" text-[#FF8B8B] " />
      </section>

      {/* Gallery Section */}
      <section className="w-full  text-[#363636] gap-4 my-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="relative h-[600px] cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Enlarged gallery image"
              width={800}
              height={600}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-2 right-2 text-white"
              onClick={() => setSelectedImage(null)}
            >
              <MdClose className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 py-8 md:px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-semibold">AILEN MKP</span>
            <p className="text-sm mt-2">Maquillaje Profesional</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF8B8B]"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF8B8B]"
            >
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
