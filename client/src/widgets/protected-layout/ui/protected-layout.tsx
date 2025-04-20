import { useUserDeps } from "@/featured/user/deps";
import { PUBLIC_ROUTES_PATH } from "@/shared/const";

import { UiLayout } from "@/shared/ui/ui-layout";
import { Navigate } from "react-router";

export function ProtectedLayout() {
  const user = useUserDeps();

  if (!user.isAuth) {
    return <Navigate to={PUBLIC_ROUTES_PATH.SIGNIN} replace />;
  }

  if (user.user?.role !== "ADMIN") {
    return <Navigate to={PUBLIC_ROUTES_PATH.SHOP} replace />;
  }

  return <UiLayout />;
}
