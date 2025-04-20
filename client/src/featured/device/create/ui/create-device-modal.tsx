import {
  Button,
  FileInput,
  Flex,
  Group,
  Modal as MantineModal,
  NumberInput,
  Select,
  TextInput,
} from "@mantine/core";
import { Form, useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { useDeviceDeps } from "../../deps";

export function CreateDeviceModal({
  children,
  trigger,
}: {
  children: React.ReactNode;
  trigger: React.ReactNode;
}) {
  const [opened, { open, close }] = useDisclosure(false);
  const device = useDeviceDeps();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      brand: "",
      type: "",
      price: 0,
      img: "",
    },

    validate: {
      name: (value) =>
        value.length < 2
          ? "Название устройства должно быть больше 2 символов"
          : null,
      brand: (value) =>
        value.length < 2
          ? "Название устройства должно быть больше 2 символов"
          : null,
      type: (value) =>
        value.length < 2
          ? "Название устройства должно быть больше 2 символов"
          : null,
      price: (value) =>
        value < 0 ? "Стоимость устройства должна быть больше 0" : null,
      img: (value) => (value.length < 2 ? "Изображение не выбрано" : null),
    },
  });

  return (
    <>
      <MantineModal opened={opened} onClose={close} title="Добавить устройство">
        <Form form={form}>
          <Flex direction="column" gap="md">
            <TextInput
              withAsterisk
              label="Название устройства"
              placeholder="Введите название устройства"
              key={form.key("name")}
              {...form.getInputProps("name")}
            />
            <Select
              withAsterisk
              label="Бренд устройства"
              placeholder="Выберите бренд"
              data={device.brands.map((brand) => brand.name)}
              key={form.key("brand")}
              searchable
              nothingFoundMessage="Ничего не найдено..."
              checkIconPosition="right"
              {...form.getInputProps("brand")}
            />
            <Select
              withAsterisk
              label="Тип устройства"
              placeholder="Выберите тип"
              data={device.types.map((type) => type.name)}
              key={form.key("type")}
              searchable
              nothingFoundMessage="Ничего не найдено..."
              checkIconPosition="right"
              {...form.getInputProps("type")}
            />
            <NumberInput
              withAsterisk
              min={0}
              label="Стоимость устройства"
              placeholder="Введите стоимость устройства"
              key={form.key("price")}
              {...form.getInputProps("price")}
            />
            <FileInput
              withAsterisk
              label="Изображение устройства"
              description="Выберите файл"
              placeholder="Выберите файл"
              key={form.key("img")}
              // {...form.getInputProps("img")}
            />
            <Group gap="xs">
              <Button variant="light" type="button" onClick={close}>
                Закрыть
              </Button>
              <Button type="submit">Добавить устройство</Button>
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
