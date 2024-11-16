import CompanyLogo from "@/components/CompanyLogo";
import BannerMainStats from "@/components/BannerMainStats";

export default function Home() {
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
      
      <section className="text-center py-6">
        <h2>Nuestros estudiantes trabajan en:</h2>
        <div className="flex flex-row gap-4 justify-center py-2">
          <CompanyLogo image="/google.png" />
		      <CompanyLogo image="/google.png" />
		      <CompanyLogo image="/google.png" />
		      <CompanyLogo image="/google.png" />
        </div>
      </section>
    </main>
  );
}
