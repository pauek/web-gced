import { db } from "@/lib/db";

export default async function Home() {
  const alumniList = await db.alumni.findMany();
  return (
    <main className="p-4">
      <h1>Estudiants:</h1>
      {alumniList.map((alumn) => (
        <p key={alumn.id}>
          {alumn.firstName} {alumn.lastName}
        </p>
      ))}
    </main>
  );
}
