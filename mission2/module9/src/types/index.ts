export const USER_ROLES = {
  admin: "admin",
  user: "user",
  agent: "agent",
} as const;

export type ROLES = "admin" | "agent" | "user";
