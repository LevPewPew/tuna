import { UsersTable } from "~/database/schema";
import { db, seed } from "~/database";

export default async function Feed(): Promise<JSX.Element> {
  let users;
  try {
    users = await db.select().from(UsersTable);
  } catch (e: any) {
    if (e.message === `relation "users" does not exist`) {
      console.log("Table does not exist, creating and seeding it with dummy data now...");
      // Table is not created yet
      await seed();
      users = await db.select().from(UsersTable);
    } else {
      throw e;
    }
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          {user.id} - {user.email}
        </div>
      ))}
    </div>
  );
}
