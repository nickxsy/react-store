import { ComposeChildren } from '@/shared/lib';

import { deviceStore } from '@/entities/device';
import { userStore } from '@/entities/user';

import { deviceDepsContext } from '@/featured/device/deps';
import { userDepsContext } from '@/featured/user/deps';

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ComposeChildren>
      <deviceDepsContext.Provider value={deviceStore} />
      <userDepsContext.Provider value={userStore} />
      {children}
    </ComposeChildren>
  );
}
