import React from "react";

import Navbar from "../components/Navbar";
import CarbyScreen from "../components/CarbyScreen";

const page = () => {
  return (
    <main className="flex flex-col justify-between w-screen h-full md:h-screen bg-[#F0EBE2] md:items-center">
      <header className="w-full h-24 md:h-64">
        <Navbar />
      </header>

      <section
        className="flex flex-col gap-8 md:flex-row justify-center items-center p-10 w-full md:h-[70%]
       text-black md:p-0"
      >
        <CarbyScreen />
      </section>

      <footer className="flex items-center justify-center  w-full text-[9px] h-14 text-neutral-600 text-black">
        © {new Date().getFullYear()} Gaël Vanbeveren - Tous droits réservés
      </footer>
    </main>
  );
};

export default page;
