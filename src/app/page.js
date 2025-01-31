"use client";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex flex-col justify-between w-screen h-screen bg-[#F0EBE2] md:items-center ">
      <header className="w-full h-24 md:h-64 ">
        <Navbar />
      </header>
      <section className="flex flex-col md:flex-row justify-evenly p-10 w-full md:w-4/5 h-full text-black md:pt-32  md:ml-24 md:gap-40 ">
        <div className="flex flex-col w-full h-fit md:w-3/4  text-start  gap-6 ">
          <h1 className="text-5xl md:text-6xl ">Gael Vanbeveren</h1>
          <h2 className=" text-2xl md:text-3xl ">Développeur FullStack</h2>
          <h3 className="text-xs  md:text-xl  italic text-neutral-400">
            "Passionné par la création d'applications innovantes et par
            l'apprentissage continu, je me spécialise dans la Stack MERN pour
            concevoir des solutions performantes."
          </h3>
        </div>
        <div className="flex flex-col w-fit md:w-2/5 h-fit text-start gap-6 text-base md:pt-20 md:pl-16 ">
          <h1 className="md:text-xl md:pb-4 2xl:text-2xl 2xl:pb-8">Projets</h1>
          <a href="/carby" target="_blank" className="hover:scale-105">
            <li>
              Carby
              <span className="text-[11px] text-neutral-600"> - FullStack</span>
            </li>
          </a>
          <a
            href="https://my-hackatweet-frontend.vercel.app/"
            target="_blank"
            className="hover:scale-105"
          >
            <li>
              Twitter
              <span className="text-[11px] text-neutral-600"> - FullStack</span>
            </li>
          </a>
          <a
            href="https://github.com/GaelVbn/user-management-api"
            target="_blank"
            className="hover:scale-105"
          >
            <li>
              user-managment
              <span className="text-[11px] text-neutral-600"> - BackEnd</span>
            </li>
          </a>
          <a
            href="https://verse-versed.netlify.app/"
            target="_blank"
            className="hover:scale-105"
          >
            <li>
              Blog
              <span className="text-[11px] text-neutral-600"> - FullStack</span>
            </li>
          </a>
          <a
            href="https://my-moviz-frontend-fawn.vercel.app/"
            target="_blank"
            className="hover:scale-105"
          >
            <li>
              MyMovizz
              <span className="text-[11px] text-neutral-600"> - FrontEnd</span>
            </li>
          </a>
        </div>
      </section>

      <footer className="flex items-center justify-center w-full h-16 text-[9px] text-black md:bg-[#F0EBE2] ">
        © {new Date().getFullYear()} Gaël Vanbeveren - Tous droits réservés
      </footer>
    </main>
  );
}
