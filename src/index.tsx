import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  RouteObject,
  createBrowserRouter as Router,
  RouterProvider,
} from "react-router-dom";
import Auth from './routes/Auth';
import Dashboard from './routes/Dashboard';
import User from './routes/User';

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
      path: ':link',
      element: <User />,
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