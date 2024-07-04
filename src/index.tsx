import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  LoaderFunction,
  RouteObject,
  createBrowserRouter as Router,
  RouterProvider,
  redirect
} from "react-router-dom";
import Auth from './routes/Auth';
import Dashboard from './routes/Dashboard';
import { getUsers } from './services/user';
import { TUser } from './types';

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
    element: <Dashboard />
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