import { observer } from 'mobx-react-lite';

import { UiLayout } from '@/shared/ui/ui-layout';

function AppLayoutComponent() {
  return <UiLayout />;
}

export const AppLayout = observer(AppLayoutComponent);
