"use client";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

export default function ImagesGalery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [viewImages, setViewImages] = useState(6);

  return (
    <>
      {/* Services Section */}
      <section
        className="w-full flex flex-col justify-start items-center text-[#363636] gap-4 mt-24"
        id="mis-trabajos"
      >
        <h2 className="text-2xl font-bold text-[#363636]">
          UNA MUESTRA DE MIS TRABAJOS A CONTINUACION
        </h2>
        <FaArrowDown className=" text-[#FF8B8B] " size={24} />
      </section>

      {/* Gallery Section */}
      <section className="w-full  text-[#363636] gap-4 my-4">
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map(
            (src, index) =>
              index < viewImages && (
                <button
                  key={index}
                  className="relative h-[600px] cursor-pointer"
                  onClick={() => setSelectedImage(src)}
                >
                  <Image
                    fill
                    alt={`Gallery image ${index + 1}`}
                    className="object-cover rounded-lg"
                    src={src}
                    loading="lazy"
                  />
                </button>
              )
          )}
        </div>
        {galleryImages.length > viewImages && (
          <Button
            className="inline-flex mt-6 items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
            color="secondary"
            type="submit"
            onClick={() => setViewImages((prev) => prev + 3)}
          >
            Ver mas
          </Button>
        )}
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <button
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <Image
              alt="Enlarged gallery image"
              className="max-w-full max-h-[90vh] object-contain"
              height={600}
              src={selectedImage}
              width={800}
            />
            <button
              className="absolute top-2 right-2 text-white"
              onClick={() => setSelectedImage(null)}
            >
              <MdClose className="h-6 w-6" />
            </button>
          </div>
        </button>
      )}
    </>
  );
}

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
  "/img/maquillajes/10.jpg",
  "/img/maquillajes/11.jpg",
  "/img/maquillajes/12.jpg",
  "/img/maquillajes/13.jpg",
  "/img/maquillajes/14.jpg",
  "/img/maquillajes/15.jpg",
  "/img/maquillajes/16.jpg",
  "/img/maquillajes/17.jpg",
  "/img/maquillajes/18.jpg",
  "/img/maquillajes/19.jpg",
  "/img/maquillajes/20.jpg",
  "/img/maquillajes/21.jpg",
  "/img/maquillajes/22.jpg",
  "/img/maquillajes/23.jpg",
  "/img/maquillajes/24.jpg",
  "/img/maquillajes/25.jpg",
  "/img/maquillajes/26.jpg",
  "/img/maquillajes/27.jpg",
  "/img/maquillajes/28.jpg",
  "/img/maquillajes/29.jpg",
  "/img/maquillajes/30.jpg",
];
