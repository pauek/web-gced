import CompanyLogo from "@/components/CompanyLogo";

export default function Home() {
  return (
    <main>
      <section className="text-center py-10">
        <h1 className="text-5xl font-bold text-blue-600">
          Grau en Ciència i Enginyeria de Dades
        </h1>
        <p className="text-lg text-blue-600">
          Conviértete en líder de la era digital donde los datos crean
          soluciones
        </p>
      </section>
      <section className="bg-blue-600 grid grid-cols-2 grid-rows-2 p-6 gap-x-24 gap-y-6 text-white font-bold">
        <div className="flex flex-col gap-1 text-end">
          <p>Salario medio</p>
          <p className="text-3xl">40K - 80K€</p>
        </div>
        <div className="flex flex-col gap-1">
          <p>Salario medio</p>
          <p className="text-3xl">40K - 80K€</p>
        </div>
        <div className="flex flex-col gap-1 text-end">
          <p>Porcentaje empleabilidad</p>
          <p className="text-3xl">95%</p>
        </div>
        <div className="flex flex-col gap-1">
          <p>Porcentaje mujeres</p>
          <p className="text-3xl">40%</p>
        </div>
      </section>
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
