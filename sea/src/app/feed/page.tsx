import { UsersTable } from "~/database/schema";
import { db } from "~/database";

export default async function Feed(): Promise<JSX.Element> {
  const users = await db.select().from(UsersTable);

  return (
    <div>
      {users ? (
        users.map((user) => (
          <div key={user.name}>
            {user.name} - {user.email}
          </div>
        ))
      ) : (
        <div>ERROR NO USERS</div>
      )}
    </div>
  );
}
