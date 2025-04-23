import { Badge, Button, Card, Group, Image, Text } from '@mantine/core';
import { Link } from 'react-router';

import { Device } from '@/entities/device';

export function DeviceItem({ device }: { device: Device }) {
  return (
    <Link to={`/device/${device.id}`}>
      <Card padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src={`http://localhost:5000/${device.img}`}
            height={160}
            alt={device.name}
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{device.name}</Text>
          <Badge color="pink">On Sale</Badge>
        </Group>

        <Text size="sm" c="dimmed">
          {device.price}
          {device.rating}
        </Text>

        <Button color="blue" fullWidth mt="md" radius="md">
          Подробнее
        </Button>
      </Card>
    </Link>
  );
}
