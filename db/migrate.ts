import { db } from "db";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";

migrate(db, { migrationsFolder: "drizzle" });
