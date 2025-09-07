import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, "user name is required"),
  password: z.string().min(6, "password must be at least 6 characters"),
  rememberMe: z.boolean().optional(),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
