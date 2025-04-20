import { UiLayout } from "@/shared/ui/ui-layout";
import { observer } from "mobx-react-lite";

function AppLayoutComponent() {
  return <UiLayout />;
}

export const AppLayout = observer(AppLayoutComponent);
