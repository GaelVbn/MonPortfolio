import Image from "next/image";
import React from "react";

const Technos = ({ name, img, desc }) => {
  return (
    <div className="flex flex-col w-40 h-52 p-2 items-center md:h-auto md:w-56  ">
      <div className="flex justify-center items-center border border-gray-400 w-10 h-10 rounded-md shadow-md md:hidden">
        <Image
          src={img}
          alt="mongo"
          width={35}
          height={35}
          style={{ padding: "5px" }}
        />
      </div>
      <div className="hidden md:justify-center md:items-center md:border-gray-400 md:border-[3px] md:w-20 md:h-20 md:rounded-[25%] md:shadow-xl md:flex ">
        <Image
          src={img}
          alt="mongo"
          width={100}
          height={100}
          style={{ padding: "10px" }}
        />
      </div>

      <div className="flex flex-col justify-center items-center mt-2 md:mt-4">
        <h1 className="text-xs md:text-lg ">{name}</h1>
      </div>
      <div className="border-l border-black  mt-5">
        <div className="flex items-center h-full text-xs ">
          <p className="pl-3 md:pl-5 text-[9px] md:text-sm ">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Technos;
