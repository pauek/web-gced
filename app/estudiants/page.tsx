import { db } from "@/lib/db";

import AlumniCard from "@/components/AlumniCard";

export default async function Home() {
  return (
    <main className="p-4">
      <h1>Estudiants:</h1>
      <AlumniCard />
    </main>
  );
}
