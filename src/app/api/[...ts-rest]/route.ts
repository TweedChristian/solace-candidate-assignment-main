import db from "@/db";
import { advocates, advocateSpecialties, specialties } from "@/db/schema";
import { appContract } from "@/lib";
import { createNextHandler } from "@ts-rest/serverless/next";
import { seed } from "@/db/seed/seed";
import { eq } from "drizzle-orm";

const handler = createNextHandler(
  appContract,
  {
    getAdvocates: async () => {
      //Normally I'd use the drizzle query syntax here, but wanted to use sql queries to demonstrate familiarity
      const advocateData = await db.select().from(advocates);

      const advocateSpecialtyData = await db
        .select({
          advocateId: advocateSpecialties.advocateId,
          specialty: specialties,
        })
        .from(advocateSpecialties)
        .innerJoin(
          specialties,
          eq(advocateSpecialties.specialtyId, specialties.id)
        );

      const advocateSpecialtyIndex = Object.groupBy(
        advocateSpecialtyData,
        (data) => data.advocateId
      );

      return {
        status: 200,
        body: advocateData.map((advocate) => ({
          ...advocate,
          specialties: (advocateSpecialtyIndex[advocate.id] ?? []).map(
            ({ specialty }) => specialty
          ),
        })),
      };
    },
    seed: async () => {
      const { advocateSpecialties, advocates, specialties } = await seed();

      const body = advocates.map((advocate) => ({
        ...advocate,
        specialties: advocateSpecialties
          .filter(({ advocateId }) => advocateId === advocate.id)
          .map(({ specialtyId }) =>
            specialties.filter((specialty) => specialty.id === specialtyId)
          )
          .flat(),
      }));

      return {
        status: 200,
        body,
      };
    },
  },
  { handlerType: "app-router", responseValidation: true }
);

export {
  handler as GET,
  handler as POST,
  handler as PUT,
  handler as PATCH,
  handler as DELETE,
  handler as OPTIONS,
};
