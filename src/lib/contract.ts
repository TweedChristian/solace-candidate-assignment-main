import { advocates, specialties } from "@/db/schema";
import { initContract } from "@ts-rest/core";
import { createSelectSchema } from "drizzle-zod";
import z from "zod/v4";

const c = initContract();

const specialtySchema = createSelectSchema(specialties);
const advocateSchema = createSelectSchema(advocates).extend({
  specialties: specialtySchema.array(),
});

export type Advocate = z.infer<typeof advocateSchema>;

export const appContract = c.router({
  getAdvocates: {
    method: "GET",
    path: "/api/advocates",
    responses: {
      200: advocateSchema.array(),
    },
    summary: "Get many advocates",
  },
  seed: {
    method: "POST",
    path: "/api/seed",
    responses: {
      200: advocateSchema.array(),
    },
    body: null,
    summary: "Initialize list of advocates",
  },
});
