"use client";

import { useState } from "react";
import AlumniCard from "@/components/alumni_card/AlumniCard";
import AlumniReview from "@/components/AlumniReview";
import CompanyLogo from "@/components/CompanyLogo";
import BannerMainStats from "@/components/BannerMainStats";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const alumniData = [
  {
    name: "Laura",
    surname: "Smith",
    generation: 2024,
    internship: "StartUpX",
    finalDegreeThesis: "Análisis de datos sociales",
    master: "AI y Machine Learning",
    work: "Científica de datos",
  },
  {
    name: "Ignacio",
    surname: "Gris",
    generation: 2021,
    internship: "AiBall",
    finalDegreeThesis: "No especificado",
    master: "De la vida",
    work: "No especificado",
  },
  {
    name: "Maria",
    surname: "Risques",
    generation: 2025,
    internship: "Mango",
    finalDegreeThesis: "No especificado",
    master: "No especificado",
    work: "Data Scientist",
  },
  {
    name: "Juan",
    surname: "Pérez",
    generation: 2022,
    internship: "Tech Corp",
    finalDegreeThesis: "Optimización de datos",
    master: "Big Data",
    work: "Ingeniero de datos",
  },
  {
    name: "Laura",
    surname: "Smith",
    generation: 2024,
    internship: "StartUpX",
    finalDegreeThesis: "Análisis de datos sociales",
    master: "AI y Machine Learning",
    work: "Científica de datos",
  },
];

export default function Home() {
  const reviewsData = [
    {
      name: "Ignacio",
      surname: "Gris",
      generation: 2021,
      description:
        "Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.",
    },
    {
      name: "Laura",
      surname: "Smith",
      generation: 2024,
      description:
        "Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.",
    },
  ];

  return (
    <main>
      <section className="text-center py-10">
        <h1 className="text-5xl font-bold text-[#007BC0]">
          Grau en Ciència i Enginyeria de Dades
        </h1>
        <p className="py-2 text-lg text-[#007BC0]">
          Converteixte en líder de l'era digital on les dades creen solucions
        </p>
      </section>

      <BannerMainStats />

      <section className="text-center text-xl font-semibold mb-6 py-4">
        <h2>Els nostres estudiants treballen a :</h2>
        <div className="flex flex-row gap-4 justify-center py-2">
          <CompanyLogo image="/google.png" />
          <CompanyLogo image="/google.png" />
          <CompanyLogo image="/google.png" />
          <CompanyLogo image="/google.png" />
        </div>
      </section>

      <section className="py-4 overflow-clip">
        <h2 className="text-center text-xl font-semibold mb-6">
          Coneix als nostres estudiants
        </h2>
        <Carousel>
          <CarouselContent>
            {/* <CarouselItem><div className="w-0"></div></CarouselItem> */}
            {alumniData.map((alumni, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <AlumniCard {...alumni} />
              </CarouselItem>
            ))}
            {/* <CarouselItem></CarouselItem> */}
          </CarouselContent>
        </Carousel>
      </section>

      <section className="py-40">
        <div className="bg-gray-100 py-4">
          <h2 className="text-center text-xl font-semibold mb-6">
            Opinions dels nostres estudiants
          </h2>
          <Carousel>
            <CarouselContent>
              {reviewsData.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <AlumniReview {...review} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex flex-row gap-10 justify-center"></div>
        </div>
      </section>

      {/* <section>
        <Carousel>
          <CarouselContent>
            <CarouselItem className="basis-1/2 lg:basis-1/3">
              <div className="debug h-[10em] flex flex-col justify-center items-center text-3xl">
                1
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 lg:basis-1/3">
              <div className="debug h-[10em] flex flex-col justify-center items-center text-3xl">
                2
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 lg:basis-1/3">
              <div className="debug h-[10em] flex flex-col justify-center items-center text-3xl">
                3
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section> */}

      <section className="h-20"></section>
    </main>
  );
}
