import { Flex, Title } from "@mantine/core";
import { Typebar } from "./typebar";
import { Brandbar } from "./brandbar";
import { DeviceList } from "@/featured/device/list";

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
      </Flex>
    </Flex>
  );
}
