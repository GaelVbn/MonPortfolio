"use client";
import React from "react";
import Navbar from "../components/Navbar";
import technos from "../data/technos";
import Technos from "../components/Technos";

const page = () => {
  return (
    <main className="flex flex-col justify-between w-screen h-auto md:h-auto bg-[#F0EBE2] md:items-center md:w-auto">
      <header className="w-full h-24 md:h-64">
        <Navbar />
      </header>
      <section className="flex flex-wrap gap-5 py-5 justify-center  items-center md:flex-row  w-full  h-auto md:h-full  text-black md:w-[80%]  md:gap-x-28 md:gap-y-10 md:pb-20">
        {technos.map((techno) => (
          <Technos key={techno.name} {...techno} />
        ))}
      </section>

      <footer className="flex items-center justify-center w-full h-12 text-[9px] text-black">
        © {new Date().getFullYear()} Gaël Vanbeveren - Tous droits réservés
      </footer>
    </main>
  );
};

export default page;
