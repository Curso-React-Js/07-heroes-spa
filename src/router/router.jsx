import { createBrowserRouter } from 'react-router-dom';

import { LoginPage } from '../auth';
import { HeroesApp } from '../HeroesApp';
import { MarvelPage, DCPage, HeroesRoutes } from '../heroes';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <HeroesApp />,
    children: [
      {
        path: '/',
        element: <HeroesRoutes />,
        children: [
          {
            path: '/marvel',
            element: <MarvelPage />,
          },
          {
            path: '/dc',
            element: <DCPage />,
          },
          {
            path: '*',
            element: <MarvelPage />,
          },
        ]
      },
    ],
  }
]);
