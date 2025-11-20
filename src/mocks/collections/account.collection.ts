import { Collection } from "@msw/data";
import z from "zod";

export const accountCollection = new Collection({
  schema: z.object({
    id: z.number(),
    username: z.string(),
    password: z.string()
  })
})
