import { typeRepository } from "@/entities/type";
import { useDeviceDeps } from "@/featured/device/deps";
import { Box, Chip, Flex, Group, Title } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";

function TypebarLayout() {
  const devices = useDeviceDeps();

  useEffect(() => {
    typeRepository.getAll().then((types) => {
      devices.setTypes(types);
    });
  }, []);

  return (
    <Flex px="md" w={300} variant="outline" gap="md" direction="column">
      <Title order={3}>Выберите тип</Title>
      <Chip.Group multiple={false}>
        <Flex direction="column" gap="xs">
          {devices.types.map((type) => (
            <Chip
              checked={type.id === devices.selectedType.id}
              value={type.name}
              onClick={() => devices.setSelectedType(type)}
              key={type.id}
            >
              {type.name}
            </Chip>
          ))}
        </Flex>
      </Chip.Group>
    </Flex>
  );
}

export const Typebar = observer(TypebarLayout);
