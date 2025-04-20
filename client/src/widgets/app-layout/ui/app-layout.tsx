import { useUserDeps } from "@/featured/user/deps";
import { UiLayout } from "@/shared/ui/ui-layout";
import { observer } from "mobx-react-lite";

function AppLayoutComponent() {
  const { isAuth } = useUserDeps();

  // let [opened, { toggle }] = useDisclosure(false);

  return <UiLayout isAuth={isAuth} />;
}

export const AppLayout = observer(AppLayoutComponent);
