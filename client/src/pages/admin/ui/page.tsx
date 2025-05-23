import { Flex } from '@mantine/core';

import { CreateBrandModal } from '@/featured/brand/create';
import { CreateDeviceModal } from '@/featured/device/create';
import { CreateTypeModal } from '@/featured/type/create';

export default function Page() {
  return (
    <Flex direction="column" gap="md">
      <CreateTypeModal trigger={<div>Создать тип</div>} />
      <CreateBrandModal trigger={<div>Создать бренд</div>} />
      <CreateDeviceModal trigger={<div>Создать устройство</div>} />
    </Flex>
  );
}
