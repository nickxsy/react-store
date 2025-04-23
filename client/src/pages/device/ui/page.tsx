import { Button, Flex, Image, SimpleGrid, Text, Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { Device, deviceRepository } from '@/entities/device';

export default function Page() {
  const [device, setDevice] = useState<Device>();
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  useEffect(() => {
    deviceRepository.getById(id).then(data => {
      setDevice(data);
      console.log({});
    });
  }, []);
  return (
    <SimpleGrid cols={2}>
      <div>
        <Image
          src={`http://localhost:5000/${device?.img}`}
          height="auto"
          width="100%"
          alt={device?.name}
        />
      </div>
      <Flex direction="column" gap="xl">
        <div>
          <Title order={1}>{device?.name}</Title>
          <Text>{device?.rating}</Text>
          <Text>От {device?.price} руб.</Text>
        </div>
        <div>
          <Button size="xl">Добавить в корзину</Button>
        </div>
      </Flex>
    </SimpleGrid>
  );
}
