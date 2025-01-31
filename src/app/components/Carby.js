"use client";
import { Carousel } from "@material-tailwind/react";
import CarbyData from "../constants/Carby";
import Image from "next/image";

const CarouselDefault = () => {
  return (
    <Carousel className="md:w-[40%] md:h-[100%] rounded-xl">
      {CarbyData.map((data, index) => (
        <Image
          key={index}
          src={data.image}
          alt={`image ${index + 1}`}
          className="h-full w-full object-cover "
        />
      ))}
    </Carousel>
  );
};

export default CarouselDefault;
