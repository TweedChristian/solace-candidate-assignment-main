import { initClient } from "@ts-rest/core";
import { appContract } from "./contract";

export const client = initClient(appContract, {
  baseUrl: "http://localhost:3000",
});
