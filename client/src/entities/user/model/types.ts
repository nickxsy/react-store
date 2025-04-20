type UserRole = "ADMIN" | "USER";

export type User = {
  id?: number;
  email?: string;
  role?: UserRole;
};
