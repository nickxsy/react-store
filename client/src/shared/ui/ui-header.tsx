import { Button, Flex, Group } from '@mantine/core';
import { observer } from 'mobx-react-lite';
import { NavLink, useNavigate } from 'react-router';

import { AUTH_ROUTES_PATH, PUBLIC_ROUTES_PATH, ROUTES_PATH } from '../const';

import { useUserDeps } from '@/featured/user/deps';

export const UiHeader = observer(() => {
  const user = useUserDeps();
  const navigate = useNavigate();

  const logout = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem('token');
    navigate(ROUTES_PATH.SIGNIN, { replace: true });
  };

  return (
    <Flex component="header" p="md">
      <Group gap="sm">
        <NavLink to={PUBLIC_ROUTES_PATH.SHOP}>
          <Button component="div">Магазин</Button>
        </NavLink>
        {user.isAuth && user.user?.role === 'ADMIN' && (
          <NavLink to={AUTH_ROUTES_PATH.ADMIN}>
            <Button component="div">Админка</Button>
          </NavLink>
        )}

        {!user.isAuth && (
          <>
            <NavLink to={PUBLIC_ROUTES_PATH.SIGNIN}>
              <Button component="div">Войти</Button>
            </NavLink>
            <NavLink to={PUBLIC_ROUTES_PATH.SIGNUP}>
              <Button component="div">Зарегистрироваться</Button>
            </NavLink>
          </>
        )}
        {user.isAuth && (
          <Button onClick={logout} variant="outline" color="red">
            Выйти
          </Button>
        )}
      </Group>
    </Flex>
  );
});
