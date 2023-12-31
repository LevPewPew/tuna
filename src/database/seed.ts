import { sql } from "@vercel/postgres";
import { db } from "~/database";
import { UsersTable, User, NewUser } from "~/database/schema";
import { faker } from "@faker-js/faker";

function createBlankArray(length: number) {
  const blankArray = Array(length).fill(undefined);

  return blankArray;
}

// TODO use faker unique to ensure no dupes as email
const newUsers: NewUser[] = createBlankArray(20).map(() => {
  const fakeUser: NewUser = {
    name: faker.internet.userName(),
    email: faker.internet.email(),
  };

  return fakeUser;
});

export async function seed() {
  const dropTable = await sql.query(`
    DROP TABLE users;
  `);

  // Create table with raw SQL
  const createTable = await sql.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        image VARCHAR(255),
        "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
  `);
  console.log(`Created "users" table`);

  const insertedUsers: User[] = await db.insert(UsersTable).values(newUsers).returning();
  console.log(`Seeded ${insertedUsers.length} users`);

  return {
    dropTable,
    createTable,
    insertedUsers,
  };
}
