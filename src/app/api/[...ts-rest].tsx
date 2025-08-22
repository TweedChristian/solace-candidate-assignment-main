import { createNextRoute, createNextRouter } from "@ts-rest/next";
import db from "@/db";
import { advocates } from "@/db/schema";
import { appContract } from "@/lib";

const router = createNextRoute(appContract, {
  getAdvocates: async () => {
    const data = await db.select().from(advocates);

    return {
      status: 200,
      body: data,
    };
  },
});

export default createNextRouter(appContract, router);
