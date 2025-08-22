import { advocates } from "@/db/schema";
import { initContract } from "@ts-rest/core";
import { createSelectSchema } from "drizzle-zod";

const c = initContract();

const advocateSchema = createSelectSchema(advocates);

export const appContract = c.router({
  getAdvocates: {
    method: "GET",
    path: "/api/advocates",
    responses: {
      200: advocateSchema.array(),
    },
    summary: "Get many advocates",
  },
});
