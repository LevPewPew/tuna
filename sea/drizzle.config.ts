// TODO use env var
import type { Config } from "drizzle-kit";
// import * as dotenv from "dotenv";
// dotenv.config();

export default {
  schema: "./src/database/schema/index.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString:
      "postgres://default:7xqfbDQO1WzZ@ep-royal-mode-66208660-pooler.ap-southeast-1.postgres.vercel-storage.com/verceldb" +
      "?sslmode=require",
  },
  verbose: true,
  strict: true,
} satisfies Config;
