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
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

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

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 3,
        title: "Unit 1",
        description: "Learn the basics",
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        order: 1,
        title: "Getting Started",
      },
      {
        id: 2,
        unitId: 1,
        order: 2,
        title: "Nouns",
      },
      {
        id: 3,
        unitId: 1,
        order: 3,
        title: "Verbs",
      },
      {
        id: 4,
        unitId: 1,
        order: 4,
        title: "Adverbs",
      },
      {
        id: 5,
        unitId: 1,
        order: 5,
        title: "Pronouns",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        order: 1,
        question: "Which one of these is 'man'?",
      },
      {
        id: 2,
        lessonId: 1,
        type: "ASSIST",
        order: 2,
        question: "'woman'?",
      },
      {
        id: 3,
        lessonId: 1,
        type: "SELECT",
        order: 3,
        question: "Which one of these is 'child'",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1,
        imageSrc: "/man.svg",
        correct: true,
        text: "man",
        audioSrc: "/swe_man.mp3",
      },
      {
        challengeId: 1,
        imageSrc: "/woman.svg",
        correct: false,
        text: "kvinna",
        audioSrc: "/swe_woman.mp3",
      },
      {
        challengeId: 1,
        imageSrc: "/child.svg",
        correct: false,
        text: "barn",
        audioSrc: "/swe_child.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 2,
        correct: false,
        text: "man",
        audioSrc: "/swe_man.mp3",
      },
      {
        challengeId: 2,
        correct: true,
        text: "kvinna",
        audioSrc: "/swe_woman.mp3",
      },
      {
        challengeId: 2,
        correct: false,
        text: "barn",
        audioSrc: "/swe_child.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 3,
        imageSrc: "/man.svg",
        correct: false,
        text: "man",
        audioSrc: "/swe_man.mp3",
      },
      {
        challengeId: 3,
        imageSrc: "/woman.svg",
        correct: false,
        text: "kvinna",
        audioSrc: "/swe_woman.mp3",
      },
      {
        challengeId: 3,
        imageSrc: "/child.svg",
        correct: true,
        text: "barn",
        audioSrc: "/swe_child.mp3",
      },
    ]);

    console.log("Seeding Finished!");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed db");
  }
};

main();
