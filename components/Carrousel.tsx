"use client";

import { Image } from "@nextui-org/react";
import { useState } from "react";

const images = [
  "/img/maquillajes/4.jpg",
  "/img/maquillajes/12.jpg",
  "/img/maquillajes/15.jpg",
  "/img/maquillajes/22.jpg",
  "/img/maquillajes/42.jpg",
];

export default function Carrousel() {
  const [imgSelected, setImgSelected] = useState(0);

  const handleNextImg = () => {
    if (imgSelected >= images.length - 1) return setImgSelected(0);
    if (imgSelected < images.length - 1) return setImgSelected(imgSelected + 1);
  };
  const handlePrevImg = () => {
    if (imgSelected === 0) return setImgSelected(images.length - 1);
    if (imgSelected <= images.length - 1)
      return setImgSelected(imgSelected - 1);
  };

  return (
    <div
      data-twe-carousel-init
      className="relative"
      data-twe-ride="carousel"
      id="carouselExampleCaptions"
    >
      {/*  <!--Carousel controls - prev item--> */}
      <button
        className="absolute bottom-0 left-0 top-0 z-50 flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        data-twe-slide="prev"
        data-twe-target="#carouselExampleCaptions"
        type="button"
        onClick={handlePrevImg}
      >
        <span className="inline-block h-8 w-8">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.75 19.5L8.25 12l7.5-7.5" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>
      {/* <!--Carousel controls - next item--> */}
      <button
        className="absolute bottom-0 right-0 top-0 z-50 flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        data-twe-slide="next"
        data-twe-target="#carouselExampleCaptions"
        type="button"
        onClick={handleNextImg}
      >
        <span className="inline-block h-8 w-8">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>

      {/*  <!--Carousel items--> */}
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <div
          data-twe-carousel-active
          data-twe-carousel-item
          className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            removeWrapper
            alt="..."
            className="w-full"
            src={images[imgSelected]}
          />
        </div>
      </div>
    </div>
  );
}
