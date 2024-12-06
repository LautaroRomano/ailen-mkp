"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-2 md:px-6 h-[88px] overflow-hidden z-50 bg-white">
      <div className="hidden md:flex items-center gap-2  relative h-full w-36 mt-2">
        <Link
          className="text-gray-600 hover:text-gray-900"
          href="https://www.instagram.com/ailen.mkp/"
          target="_blank"
        >
          <Image
            alt="Logo"
            height={150}
            src="/img/logo-nombre.png"
            width={150}
          />
        </Link>
      </div>
      <div className="flex md:hidden items-center gap-2  relative h-full w-full justify-center mt-2">
        <Image alt="Logo" height={150} src="/img/logo-nombre.png" width={150} />
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <Link
          className="text-gray-600 hover:text-gray-900"
          href="#detalles-servicios"
        >
          Precios
        </Link>
        <Link className="text-gray-600 hover:text-gray-900" href="#servicios">
          Agenda
        </Link>
        <Link
          className="text-gray-600 hover:text-gray-900"
          href="#mis-trabajos"
        >
          Trabajos realizados
        </Link>
        {/* <Link
          className="flex items-center gap-2 rounded-md bg-[#FF8B8B] px-4 py-2 text-white hover:bg-[#ff7272]"
          href="/ingresar"
        >
          INGRESAR
          <LogIn className="h-4 w-4" />
        </Link> */}
      </nav>
    </header>
  );
}
