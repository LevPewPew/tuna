import { parseArgs } from "node:util";
import { PrismaClient } from "@prisma/client";
import { dev } from "./dev";

const prisma = new PrismaClient();

const options = {
  environment: { type: "string" as const },
};

async function main() {
  const {
    values: { environment },
  } = parseArgs({ options });

  switch (environment) {
    case "dev":
      dev();
      break;
    case "test":
      console.log("🟡 No test specific data exists yet 🟡");
      /** data for your test environment */
      break;
    default:
      break;
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
