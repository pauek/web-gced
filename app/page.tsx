"use client";

import { useState } from "react";
import AlumniCard from "@/components/alumni_card/AlumniCard";
import AlumniReview from "@/components/AlumniReview";
import CompanyLogo from "@/components/CompanyLogo";
import BannerMainStats from "@/components/BannerMainStats";

export default function Home() {
  const alumniData = [
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

  const [visibleIndex, setVisibleIndex] = useState(2);

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

      <section className="py-4">
        <h2 className="text-center text-xl font-semibold mb-6">
          Coneix als nostres estudiants
        </h2>
        <div className="flex gap-[35px] justify-center items-center">
          {alumniData.map((alumni, index) => {
            const isCenterGroup =
              index === visibleIndex ||
              index === visibleIndex + 1 ||
              index === visibleIndex - 1;

            return (
              <div
                key={index}
                className={`snap-center flex-shrink-0 transition-transform duration-300 w-[320px] ${
                  isCenterGroup
                    ? "opacity-100 translate-y-0 scale-105"
                    : "opacity-30 translate-y-6 scale-95"
                }`}
              >
                <AlumniCard
                  name={alumni.name}
                  surname={alumni.surname}
                  generation={alumni.generation}
                  internship={alumni.internship}
                  finalDegreeThesis={alumni.finalDegreeThesis}
                  master={alumni.master}
                  work={alumni.work}
                />
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-40">
        <div className = "bg-gray-100 py-4">
          <h2 className="text-center text-xl font-semibold mb-6">
          Opinions dels nostres estudiants
          </h2>
          <div className="flex flex-wrap gap-10 justify-center">
            {reviewsData.map((review, index) => (
              <AlumniReview
                key={index}
                name={review.name}
                surname={review.surname}
                generation={review.generation}
                description={review.description}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
