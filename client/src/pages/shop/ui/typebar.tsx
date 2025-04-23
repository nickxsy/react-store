import { Box, Chip, Flex, Group, Title } from '@mantine/core';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';

import { typeRepository } from '@/entities/type';

import { useDeviceDeps } from '@/featured/device/deps';

export const Typebar = observer(() => {
  const devices = useDeviceDeps();
  const [value, setValue] = useState<string | null>(null);

  const handleChipClick = (type: any) => {
    devices.setSelectedType(type);

    if (type.id == value) {
      setValue(null);
      devices.setSelectedType({});
    }
  };

  useEffect(() => {
    typeRepository.getAll().then(types => {
      devices.setTypes(types);
    });
  }, []);

  return (
    <Flex px="md" w={300} variant="outline" gap="md" direction="column">
      <Title order={3}>Выберите тип</Title>
      <Chip.Group multiple={false} value={value} onChange={setValue}>
        <Flex direction="column" gap="xs">
          {devices.types.map(type => (
            <Chip
              checked={type.id === devices.selectedType.id}
              value={String(type.id)}
              onClick={() => handleChipClick(type)}
              key={type.id}
            >
              {type.name}
            </Chip>
          ))}
        </Flex>
      </Chip.Group>
    </Flex>
  );
});
