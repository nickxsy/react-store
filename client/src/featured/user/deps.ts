import { IUserStore, User, userStore } from "@/entities/user";
import { createStrictContext, useStrictContext } from "@/shared/lib/react";

export const userDepsContext = createStrictContext<IUserStore>();

export const useUserDeps = () => {
  return useStrictContext(userDepsContext);
};
