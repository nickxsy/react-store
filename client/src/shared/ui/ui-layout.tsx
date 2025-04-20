import { Container } from "@mantine/core";
import { Outlet } from "react-router";
import { UiHeader } from "./ui-header";

export function UiLayout() {
  return (
    <>
      <UiHeader />
      <Container component="main" py="lg">
        <Outlet />
      </Container>
    </>
  );
}
