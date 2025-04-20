import { Flex, NavLink } from "@mantine/core";
import { Link } from "react-router";

export const UiHeader = ({
  children,
  isAuth,
}: {
  children?: React.ReactNode;
  isAuth?: boolean;
}) => {
  return (
    <Flex>
      {isAuth && (
        <>
          <Link to="/signup">
            <NavLink component="span" label="Админ панель" />
          </Link>
          <NavLink component="button" label="Выйти" />
        </>
      )}
      {!isAuth && (
        <Link to="/signup">
          <NavLink component="span" label="Авторизация" />
        </Link>
      )}
    </Flex>
  );
};
