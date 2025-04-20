import {
  Button,
  Flex,
  Group,
  Modal as MantineModal,
  TextInput,
} from "@mantine/core";
import { Form, useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";

export function CreateDeviceModal({
  children,
  trigger,
}: {
  children: React.ReactNode;
  trigger: React.ReactNode;
}) {
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
    },

    validate: {
      name: (value) =>
        value.length < 2 ? "Название должно быть больше 2 символов" : null,
    },
  });

  return (
    <>
      <MantineModal opened={opened} onClose={close} title="Добавить бренд">
        <Form form={form}>
          <Flex direction="column" gap="md">
            <TextInput
              withAsterisk
              label="Название бренда"
              placeholder="Введите название бренда"
              key={form.key("name")}
              {...form.getInputProps("name")}
            />
            <Group gap="xs">
              <Button variant="light" type="button" onClick={close}>
                Закрыть
              </Button>
              <Button type="submit">Добавить бренд</Button>
            </Group>
          </Flex>
        </Form>
      </MantineModal>

      <Button type="button" variant="filled" onClick={open}>
        {trigger}
      </Button>
    </>
  );
}
