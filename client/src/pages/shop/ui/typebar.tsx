import { useDeviceDeps } from "@/featured/device/deps";
import { observer } from "mobx-react-lite";

function TypebarLayout() {
  const devices = useDeviceDeps();

  return (
    <div>
      {devices.types.map((type) => (
        <div
          style={
            type.id === devices.selectedType.id
              ? { padding: "5px", color: "white", backgroundColor: "black" }
              : {}
          }
          data-active={type.id === devices.selectedType.id}
          onClick={() => devices.setSelectedType(type)}
          key={type.id}
        >
          {type.name}
        </div>
      ))}
    </div>
  );
}

export const Typebar = observer(TypebarLayout);
