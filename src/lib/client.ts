import { initClient } from "@ts-rest/core";
import { appContract } from "./contract";
import { initTsrReactQuery } from "@ts-rest/react-query/v5";

export const tsr = initTsrReactQuery(appContract, {
  baseUrl: "http://localhost:3000",
});
