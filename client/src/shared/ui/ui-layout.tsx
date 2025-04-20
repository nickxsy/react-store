import { Container } from "@mantine/core";
import { Outlet } from "react-router";
import { UiHeader } from "./ui-header";

export function UiLayout({ isAuth }: { isAuth: boolean }) {
  return (
    <div>
      <UiHeader isAuth={isAuth} />
      <Container py="lg">
        <Outlet />
      </Container>
    </div>
  );
}
