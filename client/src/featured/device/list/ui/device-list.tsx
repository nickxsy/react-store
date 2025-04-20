import { SimpleGrid } from "@mantine/core";
import { useDeviceDeps } from "../../deps";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { deviceRepository } from "@/entities/device";
import { DeviceItem } from "./device-item";

function DeviceListLayout() {
  const devices = useDeviceDeps();

  useEffect(() => {
    deviceRepository.getAll().then((device) => {
      console.log(device.data.rows);
      devices.setDevices(device.data.rows);
    });
  }, []);

  console.log(devices.devices);

  return (
    <SimpleGrid cols={3}>
      {devices.devices.map((device) => (
        <DeviceItem device={device} key={device.id} />
      ))}
    </SimpleGrid>
  );
}

export const DeviceList = observer(DeviceListLayout);
