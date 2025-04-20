import { brandRepository } from "@/entities/brand";
import { useDeviceDeps } from "@/featured/device/deps";
import { Chip, Flex } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

function BrandbarLayout() {
  const devices = useDeviceDeps();

  useEffect(() => {
    brandRepository.getAll().then((brands) => {
      devices.setBrands(brands);
    });
  }, []);

  return (
    <Chip.Group multiple={false}>
      <Flex gap="xs">
        {devices.brands.map((brand) => (
          <Chip
            checked={brand.id === devices.selectedBrand.id}
            value={brand.name}
            onClick={() => devices.setSelectedBrand(brand)}
            key={brand.id}
          >
            {brand.name}
          </Chip>
        ))}
      </Flex>
    </Chip.Group>
  );
}

export const Brandbar = observer(BrandbarLayout);
