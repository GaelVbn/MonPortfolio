import React from "react";

const CarbyInfos = () => {
  return (
    <div className="flex flex-col w-full h-full gap-4 justify-center items-center text-black md:mr-40">
      <div className="md:flex md:flex-col md:w-[70%] md:h-full md:gap-4 md:items-center">
        <h1 className="hidden md:flex md:text-6xl p-14">Carby</h1>
        <h2 className="text-base text-center md:text-xl md:font-semibold ">
          Adopter un mode de vie plus durable
        </h2>
        <p className="text-xs text-justify mt-5 md:text-sm ">
          Carby veut informer et accompagner les utilisateurs sur les enjeux
          climatiques tout en rendant l'expérience fun et motivante. L'appli
          s'adresse à ceux qui veulent réduire leur impact sur l'environnement,
          adopter des habitudes plus écolo et mieux gérer leur empreinte carbone
          au quotidien.
        </p>
        <div className="flex ring-offset-blue-gray-600 w-full mt-1">
          <a
            href="https://github.com/GaelVbn/Carby.git"
            target="_blank"
            style={{
              color: "black",
              alignItems: "start",
              width: "fit-content",
              textDecoration: "underline",
              fontSize: "16px",
            }}
          >
            Lien github
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarbyInfos;
