import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';
import UsuarioForm from './content/management/UsuarioForm';
import UsuarioFormValidacao from './content/management/UsuarioFormValidacao';
import UsuarioEditForm from './content/management/UsuarioEditForm';
import UsuarioFormEditValidacao from './content/management/UsuarioFormEditValidacao';
import Login from './content/Login';
import PrivateRouter from './privateRoute';
import PrivateRoute from './privateRoute';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Pages
const UsersList = Loader(lazy(() => import('src/content/management/UsersList')));
const UsersForm = Loader(lazy(() => import('src/content/management/UsersList')));

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
        element: <PrivateRoute/>,
        children: [
        {
          path: '',
          element: <Navigate to='user-list' replace />
        },
        {
          path: 'user-list',
          element: <UsersList />
        },
        {
          path: "new-user",
          element: <UsuarioForm />
        },
        {
          path: "new-user-validacao",
          element: <UsuarioFormValidacao />
        },
        {
          path: "edit-user/:id",
          element: <UsuarioFormEditValidacao />
        }
      ]
    }


    ]
  },
];

export default routes;
