import { createBrowserRouter } from 'react-router-dom';


import { LoginPage } from '../auth';
import { HeroesApp } from '../HeroesApp';
import { MarvelPage, DCPage } from '../heroes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HeroesApp />,
    children: [
      {
        path: '/marvel',
        element: <MarvelPage />,
      },
      {
        path: '/dc',
        element: <DCPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  }
]);