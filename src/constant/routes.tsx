import { Home } from 'pages/home';
import { Exam } from 'pages/exam';

export const ROUTES = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/exam',
    element: <Exam />,
  },
  {
    path: '*',
    element: <Home />,
  },
];
