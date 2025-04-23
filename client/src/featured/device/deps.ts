import { createStrictContext, useStrictContext } from '@/shared/lib/react';

import { IDeviceStore } from '@/entities/device/model/device-store';

export const deviceDepsContext = createStrictContext<IDeviceStore>();

export const useDeviceDeps = () => {
  return useStrictContext(deviceDepsContext);
};
