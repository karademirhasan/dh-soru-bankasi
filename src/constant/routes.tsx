import { Home } from 'pages/home';
import { Test } from 'pages/test';

export const ROUTES = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/test',
    element: <Test />,
  },
  {
    path: '*',
    element: <Home />,
  },
];
