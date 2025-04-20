import { Flex, Title } from "@mantine/core";
import { Typebar } from "./typebar";
import { Brandbar } from "./brandbar";
import { DeviceList } from "@/featured/device/list";

export default function Page() {
  return (
    <>
      <Title>Магазин</Title>
      <Flex gap="lg">
        <Typebar />
        <Brandbar />
      </Flex>
      <DeviceList />
    </>
  );
}
