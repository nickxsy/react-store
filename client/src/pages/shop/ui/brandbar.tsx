import { useDeviceDeps } from "@/featured/device/deps";
import { observer } from "mobx-react-lite";

function BrandbarLayout() {
  const devices = useDeviceDeps();

  return (
    <div>
      {devices.brands.map((brand) => (
        <div
          style={
            brand.id === devices.selectedBrand.id
              ? { padding: "5px", color: "white", backgroundColor: "black" }
              : {}
          }
          data-active={brand.id === devices.selectedBrand.id}
          onClick={() => devices.setSelectedBrand(brand)}
          key={brand.id}
        >
          {brand.name}
        </div>
      ))}
    </div>
  );
}

export const Brandbar = observer(BrandbarLayout);
