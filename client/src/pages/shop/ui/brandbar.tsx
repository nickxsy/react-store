import { Chip, Flex } from '@mantine/core';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';

import { brandRepository } from '@/entities/brand';

import { useDeviceDeps } from '@/featured/device/deps';

export const Brandbar = observer(() => {
  const devices = useDeviceDeps();
  const [value, setValue] = useState<string | null>(null);
  const handleChipClick = (brand: any) => {
    devices.setSelectedBrand(brand);

    if (brand.id == value) {
      setValue(null);
      devices.setSelectedBrand({});
    }
  };

  useEffect(() => {
    brandRepository.getAll().then(brands => {
      devices.setBrands(brands);
    });
  }, []);

  return (
    <Chip.Group multiple={false} value={value} onChange={setValue}>
      <Flex gap="xs">
        {devices.brands.map(brand => (
          <Chip
            checked={brand.id === devices.selectedBrand.id}
            value={String(brand.id)}
            onClick={() => handleChipClick(brand)}
            key={brand.id}
          >
            {brand.name}
          </Chip>
        ))}
      </Flex>
    </Chip.Group>
  );
});
