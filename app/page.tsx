"use client";

import { Button } from "@nextui-org/button";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

import Navbar from "@/components/Navbar";
import Carrousel from "@/components/Carrousel";
import ImagesGalery from "./ImagesGalery";
import GetAService from "./GetAService";
import {
  Link,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";

export default function Component() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="min-h-screen bg-white">
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="light"
        size="2xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <GetAService isModal={true} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="h-screen z-0 bg-white pb-[88px] px-1 sm:px-8 lg:px-6 xl:px-8 2xl:px-16 ">
        <div className="grid lg:grid-cols-2 gap-8 h-full py-4 sm:py-12 md:py-24 ">
          <div className="items-center lg:items-start space-y-6 text-start px-0 lg:px-0 xl:px-8 2xl:px-16 py-12 flex  justify-center w-full flex-col relative">
            <div className="absolute right-[25px] top-[20px] sm:right-[50px] sm:top-[65px] md:right-[120px] md:top-[35px] lg:right-[0px] lg:top-[145px] xl:right-[55px] xl:top-[145px] text-3xl sm:text-5xl text-[#363636]">
              <BsStars />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tighter text-[#363636]">
              MAQUILLAJE
              <br />
              <span className="text-[#FF8B8B]">PROFESIONAL</span>
            </h1>
            <Button
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 sm:px-6 py-2 sm:py-3 text-sm font-medium text-white hover:bg-gray-800"
              color="secondary"
              type="submit"
              onPress={onOpen}
            >
              SOLICITAR SERVICIO
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row lg:hidden items-center justify-center w-full gap-4">
            <div className=" bg-[#363636] rounded-2xl w-full h-[250px] overflow-hidden">
              <div className="w-full h-full relative">
                <div className="absolute top-[50px] left-[15px]">
                  <p className="text-[16px] sm:text-[20px]">EXPRESS</p>
                </div>
                <div className="absolute top-[80px] left-0 h-px w-[120px] bg-white" />
                <div className="absolute top-[77px] left-[120px] h-2 w-2 rounded-full bg-white" />
                <Image
                  alt="Maquillaje profesional"
                  className="absolute -right-2 bottom-0"
                  src="/img/maquillaje-1-sin-fondo.png"
                  height={200}
                  width={200}
                />
              </div>
            </div>
            <div className=" bg-[#FA8072] rounded-2xl w-full h-[250px] overflow-hidden">
              <div className="w-full h-full relative">
                <div className="absolute top-[50px] left-[15px]">
                  <p className="text-[16px] sm:text-[20px]">SOCIAL</p>
                </div>
                <div className="absolute top-[80px] left-0 h-px w-[120px] bg-white" />
                <div className="absolute top-[77px] left-[120px] h-2 w-2 rounded-full bg-white" />
                <Image
                  alt="Maquillaje profesional"
                  className="absolute -right-2 bottom-0"
                  src="/img/maquillaje-2-sin-fondo.png"
                  height={200}
                  width={180}
                />
              </div>
            </div>
          </div>

          <div className=" hidden lg:flex text-start w-full relative">
            <div className=" bg-[#363636] absolute right-[50px] sm:right-[200px] md:right-[350px] lg:right-[265px] xl:right-[365px] 2xl:right-[400px] bottom-0 rounded-2xl w-[250px] h-[380px] sm:w-[300px] sm:h-[430px] md:w-[350px] md:h-[480px] lg:w-[250px] lg:h-[330px] xl:w-[320px] xl:h-[450px] overflow-hidden">
              <div className="w-full h-full relative">
                <div className="absolute top-[100px] sm:top-[130px] left-[15px]">
                  <p className="text-[16px] sm:text-[20px]">EXPRESS</p>
                </div>
                <div className="absolute top-[130px] sm:top-[160px] left-0 h-px w-[80px] sm:w-[120px] bg-white" />
                <div className="absolute top-[127px] sm:top-[157px] left-[80px] sm:left-[120px] h-2 w-2 rounded-full bg-white" />
                <Image
                  alt="Maquillaje profesional"
                  className="absolute -right-8 sm:-right-16 bottom-0"
                  src="/img/maquillaje-1-sin-fondo.png"
                  height={350}
                  width={350}
                />
              </div>
            </div>
            <div className=" bg-[#FA8072] absolute right-0 top-0 rounded-2xl  w-[250px] h-[380px] sm:w-[300px] sm:h-[430px] md:w-[350px] md:h-[480px] lg:w-[250px] lg:h-[330px] xl:w-[320px] xl:h-[450px] overflow-hidden">
              <div className="w-full h-full relative">
                <div className="absolute top-[100px] sm:top-[130px] left-[25px]">
                  <p className="text-[16px] sm:text-[20px]">SOCIAL</p>
                </div>
                <div className="absolute top-[130px] sm:top-[160px] left-0 h-px w-[80px] sm:w-[120px] bg-white" />
                <div className="absolute top-[127px] sm:top-[157px] left-[80px] sm:left-[120px] h-2 w-2 rounded-full bg-white" />
                <Image
                  alt="Maquillaje profesional"
                  className="absolute -right-8 sm:-right-16 bottom-0"
                  src="/img/maquillaje-2-sin-fondo.png"
                  height={350}
                  width={350}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* deltalle servicio */}
      <section
        className="w-full flex flex-col items-center text-[#363636] gap-12"
        id="detalles-servicios"
      >
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl text-[#363636]">
          DETALLES DE LOS SERVICIOS
        </h2>
        {/* Maquillaje social */}
        <div className="w-screen lg:w-auto items-center justify-evenly flex-col lg:flex-row flex gap-10 relative h-auto lg:h-[670px]">
          <div className="flex flex-col px-4 w-full md:w-[50%] h-full justify-start items-start text-start gap-4">
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
              <h3 className="text-3xl text-center font-bold leading-tight tracking-tighter text-[#FF8B8B]">
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
                className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
                color="secondary"
                type="submit"
                onPress={onOpen}
              >
                SOLICITAR SERVICIO
              </Button>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-[50%] md:max-w-[500px] h-full max-h-full justify-start items-center">
            <div className="flex w-full h-full relative">
              <Carrousel />
            </div>
          </div>
        </div>
        {/* Maquillaje express */}
        <div className="w-screen lg:w-auto items-center justify-evenly flex-col-reverse lg:flex-row flex gap-10 relative h-auto lg:h-[670px]">
          <div className="flex flex-col w-full md:w-[50%] md:max-w-[500px] h-full max-h-full justify-start items-center">
            <div className="flex w-full h-full relative">
              <Carrousel />
            </div>
          </div>
          <div className="flex flex-col px-4 w-full md:w-[50%] h-full justify-start items-start text-start gap-4">
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
              <h3 className="text-3xl text-center font-bold leading-tight tracking-tighter text-[#FF8B8B]">
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
                className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
                color="secondary"
                type="submit"
                onPress={onOpen}
              >
                SOLICITAR SERVICIO
              </Button>
            </div>
          </div>
        </div>
      </section>

      <GetAService isModal={false} />
      <ImagesGalery />

      {/* Footer */}
      <footer id="footer" className="bg-[#FF8B8B] py-8 px-2 md:px-4">
        <div className="container mx-auto text-center">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex space-x-4">
              <Link
                className="text-white hover:text-gray-100"
                href="#detalles-servicios"
              >
                Precios
              </Link>
              <Link
                className="text-white hover:text-gray-100"
                href="#servicios"
              >
                Agenda
              </Link>
              <Link
                className="text-white hover:text-gray-100 hidden md:inline"
                href="#mis-trabajos"
              >
                Trabajos realizados
              </Link>
              <Link
                className="text-white hover:text-gray-100"
                href="https://www.instagram.com/ailen.mkp/"
                target="_blank"
              >
                <FaInstagram className="inline-block mr-1" /> Instagram
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link
                className="text-white hover:text-gray-100"
                href="https://devsoul.vercel.app/"
                target="_blank"
              >
                Creado por DevSoul
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
