import { useUserDeps } from "@/featured/user/deps";
import { PUBLIC_ROUTES_PATH } from "@/shared/const";

import { UiLayout } from "@/shared/ui/ui-layout";
import { Navigate } from "react-router";

export function ProtectedLayout() {
  const { isAuth } = useUserDeps();

  if (!isAuth) {
    return <Navigate to={PUBLIC_ROUTES_PATH.SIGNIN} replace />;
  }

  return <UiLayout isAuth={isAuth} />;
}
