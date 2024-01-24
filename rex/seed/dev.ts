import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function dev() {
  await prisma.user.create({
    data: {
      name: "Raven Girl",
      email: "crrcrr@prisma.io",
    },
  });

  const allUsers = await prisma.user.findMany();
  console.dir(allUsers, { depth: null });
}
