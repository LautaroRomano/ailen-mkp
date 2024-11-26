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
  ModalHeader,
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
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
              color="secondary"
              type="submit"
              onPress={onOpen}
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
                  alt="Maquillaje profesional"
                  className=" absolute -right-16 bottom-0"
                  height={350}
                  src="/img/maquillaje-1-sin-fondo.png"
                  width={350}
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
                  alt="Maquillaje profesional"
                  className=" absolute -right-16 bottom-0"
                  height={300}
                  src="/img/maquillaje-2-sin-fondo.png"
                  width={300}
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
                className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
                color="secondary"
                type="submit"
                onPress={onOpen}
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
      <footer
        id="footer"
        className="bg-gradient-to-b from-white to-[#FF8B8B] -mt-[800px]"
      >
        <div className="flex h-[1000px] justify-evenly items-end pb-16">
          <div className="flex flex-col">
            <Link href="https://www.instagram.com/ailen.mkp/" target="_blank">
              <Image
                alt="Logo"
                className="h-10 w-10"
                height={60}
                src="/img/logo.png"
                width={60}
              />
            </Link>
          </div>
          <div className="flex flex-col">
            <Image
              alt="Logo"
              className="h-10 w-10"
              height={60}
              src="/img/logo.png"
              width={60}
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
