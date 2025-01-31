import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

const page = () => {
  return (
    <main className="flex flex-col justify-between w-screen h-screen bg-[#F0EBE2] md:items-center">
      <header className="w-full h-24 md:h-64">
        <Navbar />
      </header>
      <section className="flex flex-col md:flex-row justify-center items-center p-10 w-full md:w-4/5 h-full text-black ">
        <div className="flex flex-col w-full h-fit md:w-3/4  text-start  gap-6 2xl:pt-20 md:items-center  md:pb-24">
          <h1 className="text-xl md:text-3xl 2xl:text-6xl ">
            gael.vanbeveren98@gmail.com
          </h1>
          <div className="flex flex-row w-full items-center gap-4 justify-center md:flex">
            <div className="flex  border-t border-black w-36 2xl:w-80"></div>
            <Image
              src="/send.png"
              alt="qend"
              width={40}
              height={40}
              className="2xl:hidden"
            />
            <Image
              src="/send.png"
              alt="qend"
              width={80}
              height={80}
              className="2xl:flex hidden"
            />
            <div className="flex border-t border-black w-36 2xl:w-80"></div>
          </div>
        </div>
      </section>

      <footer className="flex items-center justify-center w-full h-12 text-[9px] text-black">
        © {new Date().getFullYear()} Gaël Vanbeveren - Tous droits réservés
      </footer>
    </main>
  );
};

export default page;
