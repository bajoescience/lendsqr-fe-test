import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  RouteObject,
  createBrowserRouter as Router,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Auth from './routes/Auth';
import Dashboard from './routes/Dashboard';
import Main from './routes/Main';
import UserDetails from './routes/UserDetails';

import {getUser} from './services/user'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Navigation route tree
const routeTree : RouteObject[] = [{
  path: '/',
  element: <App />,
  children: [{
    path: 'auth',
    element: <Auth />
  }, {
    path: 'dashboard',
    element: <Dashboard />,
    children: [{
      path: 'userdetails/:userID',
      element: <UserDetails />,
      loader: async ({params}) => {
        const userId = params.userID
        if (!userId) return
        return await getUser(userId)
      }
    }, {
      path: ':link',
      element: <Main />
    }, {
      path: '',
      element: <Main />
    }]
  }]
}]

// Define the router object
const router = Router(routeTree, {
  basename: '/Bola-Ajayi-Joseph-lendsqr-fe-test'
})

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);