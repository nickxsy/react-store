import { typeRepository } from "@/entities/type";
import {
  Button,
  Flex,
  Group,
  Modal as MantineModal,
  TextInput,
} from "@mantine/core";
import { Form, useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";

export function CreateTypeModal({
  children,
  trigger,
}: {
  children: React.ReactNode;
  trigger: React.ReactNode;
}) {
  const [opened, { open, close }] = useDisclosure(false);

  const typeCreate = async (name: string) => {
    try {
      await typeRepository.create(name);
    } catch (error) {
      console.log(error);
    }
  };

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
    },

    validate: {
      name: (value: string) =>
        value.length < 2 ? "Название должно быть больше 2 символов" : null,
    },
  });

  return (
    <>
      <MantineModal opened={opened} onClose={close} title="Добавить тип">
        <Form form={form} onSubmit={({ name }) => typeCreate(name)}>
          <Flex direction="column" gap="md">
            <TextInput
              withAsterisk
              label="Название типа"
              placeholder="Введите название типа"
              key={form.key("name")}
              {...form.getInputProps("name")}
            />
            <Group gap="xs">
              <Button variant="light" type="button" onClick={close}>
                Закрыть
              </Button>
              <Button type="submit">Добавить тип</Button>
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
