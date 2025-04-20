import { Modal } from "@/widgets/modal";
import { Button, Flex } from "@mantine/core";

export default function Page() {
  return (
    <Flex direction="column" gap="md">
      <Modal trigger={<div>Создать тип</div>}>ad</Modal>
      <Modal trigger={<div>Создать бренд</div>}>ad</Modal>
      <Modal trigger={<div>Создать устройство</div>}>ad</Modal>
    </Flex>
  );
}
