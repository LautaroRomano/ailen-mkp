"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-16 py-4 md:px-6 h-[88px] overflow-hidden z-50 bg-white">
      <div className="flex items-center gap-2">
        <Image
          alt="Logo"
          className="h-10 w-10"
          height={60}
          src="/img/logo.png"
          width={60}
        />
        <span className="text-xl font-semibold text-gray-600">@AILEN.MKP</span>
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
