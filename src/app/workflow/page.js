"use client";
import React from "react";
import Navbar from "../components/Navbar";
import StepWorkflow from "../components/StepWorkflow";
import Image from "next/image";

const page = () => {
  return (
    <main className="flex flex-col justify-between w-screen h-screen md:h-auto bg-[#F0EBE2] md:items-center md:w-auto">
      <header className="w-full h-24 md:h-64">
        <Navbar />
      </header>
      <section className="flex flex-col justify-center items-center md:flex-row  w-full  h-full md:h-auto  text-black  ">
        <StepWorkflow />
      </section>
      <div className="flex items-center justify-center w-full h-5 pb-10 md:mb-16  ">
        <button
          className="flex hover:bg-gray-400 border text-black bg-gray-300 items-center justify-center gap-2 px-4 py-2 2xl:px-8 2xl:py-4 rounded-md bg-zinc-50 shadow-md"
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://drive.google.com/file/d/1oqkzqImNkOR0CR2oBKohH6afI82L7zuy/view?usp=sharing",
              "_blank"
            );
          }}
        >
          <Image src="/dl.png" alt="dl" width={35} height={35} />
          <p className="text-xs 2xl:text-lg text-neutral-600">Carby Workflow</p>
        </button>
      </div>
      <footer className="flex items-center justify-center w-full h-12 text-[9px] text-black">
        © {new Date().getFullYear()} Gaël Vanbeveren - Tous droits réservés
      </footer>
    </main>
  );
};

export default page;
