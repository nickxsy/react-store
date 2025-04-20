import { Container } from "@mantine/core";
import { Outlet } from "react-router";
import { UiHeader } from "./ui-header";

export function UiLayout({ isAuth }: { isAuth: boolean }) {
  return (
    <>
      <UiHeader isAuth={isAuth} />
      <Container component="main" py="lg">
        <Outlet />
      </Container>
    </>
  );
}
