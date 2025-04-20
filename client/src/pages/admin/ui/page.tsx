import { CreateBrandModal } from "@/featured/brand/create";
import { CreateDeviceModal } from "@/featured/device/create";
import { CreateTypeModal } from "@/featured/type/create";
import { Flex } from "@mantine/core";

export default function Page() {
  return (
    <Flex direction="column" gap="md">
      <CreateTypeModal trigger={<div>Создать тип</div>}>ad</CreateTypeModal>
      <CreateBrandModal trigger={<div>Создать бренд</div>}>ad</CreateBrandModal>
      <CreateDeviceModal trigger={<div>Создать устройство</div>}>
        ad
      </CreateDeviceModal>
    </Flex>
  );
}
