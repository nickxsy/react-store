import { deviceStore } from "@/entities/device";
import { userStore } from "@/entities/user";
import { deviceDepsContext } from "@/featured/device/deps";
import { userDepsContext } from "@/featured/user/deps";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <userDepsContext.Provider value={userStore}>
      <deviceDepsContext.Provider value={deviceStore}>
        {children}
      </deviceDepsContext.Provider>
    </userDepsContext.Provider>
  );
}
