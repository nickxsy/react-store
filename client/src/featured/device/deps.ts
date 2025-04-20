import { IDeviceStore } from "@/entities/device/model/device-store";
import { createStrictContext, useStrictContext } from "@/shared/lib/react";

export const deviceDepsContext = createStrictContext<IDeviceStore>();

export const useDeviceDeps = () => {
  return useStrictContext(deviceDepsContext);
};
