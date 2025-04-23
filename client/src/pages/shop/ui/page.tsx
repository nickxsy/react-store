import { Flex, Title } from '@mantine/core';

import { Pages } from '@/widgets/pages';

import { Brandbar } from './brandbar';
import { Typebar } from './typebar';
import { DeviceList } from '@/featured/device/list';

export default function Page() {
  return (
    <Flex gap="xl">
      <Typebar />
      <Flex gap="xl" direction="column">
        <Title>Магазин</Title>

        <Flex gap="lg">
          <Brandbar />
        </Flex>
        <DeviceList />
        <Pages />
      </Flex>
    </Flex>
  );
}
