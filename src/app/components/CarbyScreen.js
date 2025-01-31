import React from "react";
import CarbyInfos from "./CarbyInfos";
import Carby from "./Carby";

const CarbyScreen = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center  md:w-[100%] md:h-[100%]  ">
      <h1 className="text-3xl text-black md:hidden">Carby</h1>
      <div className="flex flex-col md:flex-col justify-center items-center  md:w-[45%] md:h-full">
        <Carby />
      </div>
      <div className="flex flex-col justify-center items-center md:w-[45%] md:h-full ">
        <CarbyInfos />
      </div>
    </div>
  );
};

export default CarbyScreen;
