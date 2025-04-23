import {
  Button,
  FileInput,
  Flex,
  Group,
  Input,
  Modal as MantineModal,
  NumberInput,
  Select,
  TextInput
} from '@mantine/core';
import { Form, useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';

import { CreateDeviceData, deviceRepository } from '@/entities/device';

import { useDeviceDeps } from '../../deps';

export function CreateDeviceModal({ trigger }: { trigger: React.ReactNode }) {
  const [opened, { open, close }] = useDisclosure(false);
  const device = useDeviceDeps();
  const [file, setFile] = useState<any>(null);

  const selectFile = (e: any) => {
    setFile(e.target.files[0]);
  };

  const deviceCreate = async (data: CreateDeviceData) => {
    console.log(data);
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('price', `${data.price}`);
    formData.append('img', file);
    formData.append('brandId', device.selectedBrand.id as any);
    formData.append('typeId', device.selectedType.id as any);

    try {
      console.log(formData.get('img'));
      await deviceRepository.create(formData).then(res => {
        console.log(res);

        form.reset();
        close();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      brand: '',
      type: '',
      price: 0
    },

    validate: {
      // name: value =>
      //   value.length < 2
      //     ? 'Название устройства должно быть больше 2 символов'
      //     : null,
      // brand: value =>
      //   value.length < 2
      //     ? 'Название устройства должно быть больше 2 символов'
      //     : null
      // type: (value) =>
      //   value.length < 2
      //     ? "Название устройства должно быть больше 2 символов"
      //     : null,
      // price: (value) =>
      //   value < 0 ? "Стоимость устройства должна быть больше 0" : null,
      // img: (value) => (value.length < 2 ? "Изображение не выбрано" : null),
    }
  });

  return (
    <>
      <MantineModal
        centered
        opened={opened}
        onClose={close}
        title="Добавить устройство"
      >
        <Form form={form} onSubmit={data => deviceCreate(data)}>
          <Flex direction="column" gap="md">
            <TextInput
              withAsterisk
              label="Название устройства"
              placeholder="Введите название устройства"
              key={form.key('name')}
              {...form.getInputProps('name')}
            />
            <Select
              withAsterisk
              label="Бренд устройства"
              placeholder="Выберите бренд"
              data={device.brands.map(brand => ({
                value: String(brand.id),
                label: brand.name
              }))}
              searchable
              key={form.key('brand')}
              nothingFoundMessage="Ничего не найдено..."
              checkIconPosition="right"
              onChange={(value, label) =>
                device.setSelectedBrand({ id: value, name: label })
              }
              // {...form.getInputProps("brand")}
            />
            <Select
              withAsterisk
              label="Тип устройства"
              placeholder="Выберите тип"
              data={device.types.map(type => ({
                value: String(type.id),
                label: type.name
              }))}
              key={form.key('type')}
              searchable
              nothingFoundMessage="Ничего не найдено..."
              checkIconPosition="right"
              onChange={(value, label) =>
                device.setSelectedType({ id: value, name: label })
              }
              // {...form.getInputProps("type")}
            />
            <NumberInput
              withAsterisk
              min={0}
              label="Стоимость устройства"
              placeholder="Введите стоимость устройства"
              key={form.key('price')}
              {...form.getInputProps('price')}
            />
            <Input type="file" onChange={selectFile} />
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
