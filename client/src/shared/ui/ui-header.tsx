import { useUserDeps } from "@/featured/user/deps";
import { Button, Flex, Group } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { NavLink, useNavigate } from "react-router";
import { ROUTES_PATH } from "../const";

const nav = [
  {
    name: "Магазин",
    link: ROUTES_PATH.SHOP,
    isAuth: false,
  },
  {
    name: "Зарегистрироваться",
    link: ROUTES_PATH.SIGNUP,
    isAuth: false,
  },
  {
    name: "Войти",
    link: ROUTES_PATH.SIGNIN,
    isAuth: true,
  },
  {
    name: "Админ",
    link: ROUTES_PATH.ADMIN,
    isAuth: true,
    role: true,
  },
];

export const UiHeader = observer(
  ({ children, isAuth }: { children?: React.ReactNode; isAuth?: boolean }) => {
    const user = useUserDeps();
    const navigate = useNavigate();

    const logout = () => {
      user.setUser({});
      user.setIsAuth(false);
      navigate(ROUTES_PATH.SIGNIN, { replace: true });
    };

    return (
      <Flex component="header" p="md">
        <Group gap="sm">
          {nav.map((item, index) => (
            <NavLink key={index} to={item.link}>
              <Button component="div">{item.name}</Button>
            </NavLink>
          ))}
          {user.isAuth && (
            <Button onClick={logout} variant="outline" color="red">
              Выйти
            </Button>
          )}
        </Group>
      </Flex>
    );
  }
);
