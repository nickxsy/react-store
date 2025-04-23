import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router';

import { AdminPage } from '@/pages/admin';
import { AuthPage } from '@/pages/auth';
import { BasketPage } from '@/pages/basket';
import { DevicePage } from '@/pages/device';
import { NotfoundPage } from '@/pages/notfound';
import { ShopPage } from '@/pages/shop';

import { AppLayout } from '@/widgets/app-layout';
import { ProtectedLayout } from '@/widgets/protected-layout';

import { AUTH_ROUTES_PATH, PUBLIC_ROUTES_PATH } from '@/shared/const';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <ShopPage />
          </Suspense>
        )
      },
      {
        path: PUBLIC_ROUTES_PATH.DEVICE,
        element: (
          <Suspense>
            <DevicePage />
          </Suspense>
        )
      },
      {
        path: PUBLIC_ROUTES_PATH.SIGNIN,
        element: (
          <Suspense>
            <AuthPage />
          </Suspense>
        )
      },
      {
        path: PUBLIC_ROUTES_PATH.SIGNUP,
        element: (
          <Suspense>
            <AuthPage />
          </Suspense>
        )
      },
      {
        path: PUBLIC_ROUTES_PATH.NOT_FOUND,
        element: (
          <Suspense>
            <NotfoundPage />
          </Suspense>
        )
      }
    ]
  },
  {
    element: <ProtectedLayout />,
    children: [
      {
        path: AUTH_ROUTES_PATH.ADMIN,
        element: (
          <Suspense>
            <AdminPage />
          </Suspense>
        )
      },
      {
        path: AUTH_ROUTES_PATH.BASKET,
        element: (
          <Suspense>
            <BasketPage />
          </Suspense>
        )
      }
    ]
  }
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
