import React from "react";
import Image from "next/image";

const StepWorkflow = () => {
  return (
    <main className="flex flex-col w-fit h-full justify-evenly items-center mx-4 md:w-[65%] md:gap-40 md:mt-24 md:mb-40">
      <div className="flex w-full h-fit gap-4 ">
        <div className="flex text-2xl font-semibold items-center md:text-4xl md:font-thin">
          <span>1</span>
        </div>
        <div className="border-l border-black h-full  md:h-auto"></div>
        <div className="flex flex-col gap-3 md:gap-6">
          <div className="flex ">
            <h1 className="text-xs  md:text-lg  font-medium ">
              Conception et prototypage de l’application
            </h1>
          </div>
          <div className="flex flex-col  gap-0.5 md:gap-2 md:ml-5 ">
            <p className="text-[10px] md:text-sm ">🔍 Description du Produit</p>
            <p className="text-[10px] md:text-sm ">
              🎯 Analyse du Client Cible
            </p>
            <p className="text-[10px] md:text-sm ">
              🎬 Storyboard & User Journey
            </p>
            <p className="text-[10px] md:text-sm ">
              ✏️ Wireframes & Mockups avec Figma
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full h-fit gap-4 md:justify-end ">
        <div className="hidden md:flex md:w-fit md:h-fit  md:mr-80 md:mt-5">
          <Image src="/arrow.png" alt="arrow" width={70} height={70} />
        </div>

        <div className="flex text-2xl font-semibold items-center md:text-4xl md:font-thin">
          <span>2</span>
        </div>
        <div className="border-l border-black h-full md:h-auto"></div>
        <div className="flex flex-col gap-3 md:gap-6">
          <div className="flex ">
            <h1 className="text-xs  md:text-lg  font-medium ">
              Préparation du projet de développement
            </h1>
          </div>
          <div className="flex flex-col  gap-0.5 md:gap-2 md:ml-5 ">
            <p className="text-[10px] md:text-sm ">
              📌 Sprint de Développement & Organisation
            </p>
            <p className="text-[10px] md:text-sm ">
              🛠 Listing des Technologies Nécessaires
            </p>
            <p className="text-[10px] md:text-sm ">
              🗄 Schéma de la Base de Données
            </p>
            <p className="text-[10px] md:text-sm ">
              🌐 Analyse des Routes du Backend
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full h-fit gap-4  ">
        <div className="flex text-2xl font-semibold items-center md:text-4xl md:font-thin">
          <span>3</span>
        </div>
        <div className="border-l border-black h-full md:h-auto"></div>
        <div className="flex flex-col gap-3 md:gap-6">
          <div className="flex ">
            <h1 className="text-xs  md:text-lg  font-medium ">
              Pilotage du développement de l’application
            </h1>
          </div>
          <div className="flex flex-col gap-0.5 md:gap-2 md:ml-5 ">
            <p className="text-[10px] md:text-sm ">
              🔄 Collaboration et Organisation autour des Sprints
            </p>
            <p className="text-[10px] md:text-sm ">
              🗄 Modélisation de la Base de Données
            </p>
            <p className="text-[10px] md:text-sm ">
              🏗 Réflexion sur l’Architecture de l’Application
            </p>
            <p className="text-[10px] md:text-sm ">
              🎨 Architecture SPA (Single Page Application)
            </p>
          </div>
        </div>
        <div className="hidden md:flex md:w-fit md:h-fit  md:ml-80 md:mt-5">
          <Image src="/arrowL.png" alt="arrow" width={70} height={70} />
        </div>
      </div>
      <div className="flex w-full h-fit gap-4 md:justify-end">
        <div className="hidden md:flex md:w-fit md:h-fit  md:mr-80 md:mt-5">
          <Image src="/arrow.png" alt="arrow" width={70} height={70} />
        </div>
        <div className="flex text-2xl font-semibold items-center md:text-4xl md:font-thin">
          <span>4</span>
        </div>
        <div className="border-l border-black h-full md:h-auto"></div>
        <div className="flex flex-col gap-3 md:gap-6">
          <div className="flex ">
            <h1 className="text-xs  md:text-lg  font-medium">
              Mise en Production de l’Application
            </h1>
          </div>
          <div className="flex flex-col gap-0.5 md:gap-2 md:ml-5 ">
            <p className="text-[10px] md:text-sm ">
              🔐 Processus d’Authentification sécurisé
            </p>
            <p className="text-[10px] md:text-sm ">
              📌 Schéma de l’Environnement de Déploiement
            </p>
            <p className="text-[10px] md:text-sm ">
              🧪 TDD (Test Driven Development)
            </p>
            <p className="text-[10px] md:text-sm ">✅ Déploiement</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StepWorkflow;
