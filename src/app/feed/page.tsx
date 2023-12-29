import { sql } from "@vercel/postgres";

export default async function Feed({ params }: { params: { user: string } }): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from TEST`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.val}
        </div>
      ))}
    </div>
  );
}
