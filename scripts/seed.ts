import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding DB...");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Spanish",
        imageSrc: "/es.svg",
      },
      {
        id: 2,
        title: "English",
        imageSrc: "/us.svg",
      },
      {
        id: 3,
        title: "Swedish",
        imageSrc: "/swe.svg",
      },
      {
        id: 4,
        title: "German",
        imageSrc: "/ger.svg",
      },
      {
        id: 5,
        title: "Italian",
        imageSrc: "/it.svg",
      },
    ]);

    console.log("Seeding Finished!");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed db");
  }
};

main();
