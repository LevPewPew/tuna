import { UsersTable } from "~/database/schema";
import { db, seed } from "~/database";

export default async function Feed(): Promise<JSX.Element> {
  await seed();
  const users = await db.select().from(UsersTable);

  return (
    <div>
      {users.map((user) => (
        <div key={user.name}>
          {user.name} - {user.email}
        </div>
      ))}
    </div>
  );
}
