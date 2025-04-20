import { SimpleGrid } from "@mantine/core";
import { useDeviceDeps } from "../../deps";
import { DeviceItem } from "./device-item";
import { observer } from "mobx-react-lite";

function DeviceListLayout() {
  const devices = useDeviceDeps();

  return (
    <SimpleGrid cols={3}>
      {devices.devices.map((device) => (
        <DeviceItem device={device} key={device.id} />
      ))}
    </SimpleGrid>
  );
}

export const DeviceList = observer(DeviceListLayout);
