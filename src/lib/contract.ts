import { advocates, specialties } from "@/db/schema";
import { initContract } from "@ts-rest/core";
import { createSelectSchema } from "drizzle-zod";

const c = initContract();

const specialtySchema = createSelectSchema(specialties);
const advocateSchema = createSelectSchema(advocates).extend({
  specialties: specialtySchema.array(),
});

export const appContract = c.router({
  getAdvocates: {
    method: "GET",
    path: "/advocates",
    responses: {
      200: advocateSchema.array(),
    },
    summary: "Get many advocates",
  },
  seed: {
    method: "POST",
    path: "/seed",
    responses: {
      200: advocateSchema.array(),
    },
    body: null,
    summary: "Initialize list of advocates",
  },
});
