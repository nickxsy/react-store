import { MantineProvider } from "@mantine/core";
import { AppProvider } from "./app-provider";
import { AppRouter } from "./app-router";
import "./index.scss";

export default function App() {
  return (
    <AppProvider>
      <MantineProvider>
        <AppRouter />
      </MantineProvider>
    </AppProvider>
  );
}
