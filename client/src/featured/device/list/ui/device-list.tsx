import { SimpleGrid } from '@mantine/core';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import { deviceRepository } from '@/entities/device';

import { useDeviceDeps } from '../../deps';

import { DeviceItem } from './device-item';

function DeviceListLayout() {
  const devices = useDeviceDeps();

  useEffect(() => {
    deviceRepository
      .getAll({
        typeId: devices.selectedType.id,
        brandId: devices.selectedBrand.id,
        page: devices.page,
        limit: devices.limit
      })
      .then(data => {
        devices.setDevices(data.rows);
        devices.setTotalCount(data.count);
      });
  }, [devices.page, devices.selectedType, devices.selectedBrand]);

  return (
    <SimpleGrid cols={3}>
      {devices.devices.map(device => (
        <DeviceItem device={device} key={device.id} />
      ))}
    </SimpleGrid>
  );
}

export const DeviceList = observer(DeviceListLayout);
