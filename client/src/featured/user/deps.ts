import { createStrictContext, useStrictContext } from '@/shared/lib/react';

import type { IUserStore } from '@/entities/user';

export const userDepsContext = createStrictContext<IUserStore>();

export const useUserDeps = () => {
  return useStrictContext(userDepsContext);
};
