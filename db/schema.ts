import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const courses = pgTable("courses", {
  // serial allows the id to auto-increment
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  imageSrc: text("image_src").notNull(),
});
