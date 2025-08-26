import db from "..";
import { advocates, advocateSpecialties, specialties } from "../schema";
import {
  advocateData,
  advocateSpecialtiesData,
  specialtiesData,
} from "./advocates.data";

export const seed = async () => {
  const specialtiesResult = await db
    .insert(specialties)
    .values(specialtiesData)
    .returning();

  const advocatesResult = await db
    .insert(advocates)
    .values(advocateData)
    .onConflictDoNothing()
    .returning();

  const advocateSpecialtiesResult = await db
    .insert(advocateSpecialties)
    .values(advocateSpecialtiesData)
    .returning();

  return {
    advocates: advocatesResult,
    specialties: specialtiesResult,
    advocateSpecialties: advocateSpecialtiesResult,
  };
};
