import { MantineProvider } from '@mantine/core';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';

import { userRepository } from '@/entities/user';

import { AppRouter } from './app-router';
import './index.scss';
import { useUserDeps } from '@/featured/user/deps';

export const App = observer(() => {
  const user = useUserDeps();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    userRepository
      .auth()
      .then(data => {
        user.setIsAuth(true), user.setUser(data);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <MantineProvider>
      <AppRouter />
    </MantineProvider>
  );
});
