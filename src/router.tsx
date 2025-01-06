import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';
import Login from './content/Login';
import PrivateRoute from './privateRoute';
import CarroFormEditValidacao from './content/management/CarroFormEditValidacao';
import CarroFormValidacao from './content/management/CarroFormValidacao';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Pages
const UsersList = Loader(lazy(() => import('src/content/management/CarrosList')));

const routes: RouteObject[] = [
  {
    path: 'login',
    element: <Login />
  },
  {
    path: '/',
    element: <Login />
  },

  {
    path: 'management',
    element: <PrivateRoute />,
    children: [
      {
        path: '',
        element: <SidebarLayout/>,
        children: [
        {
          path: '',
          element: <Navigate to='carro-list' replace />
        },
        {
          path: 'carro-list',
          element: <UsersList />
        },
        {
          path: "new-carro-validacao",
          element: <CarroFormValidacao />
        },
        {
          path: "edit-carro/:id",
          element: <CarroFormEditValidacao />
        }
      ]
    }


    ]
  },
];

export default routes;
