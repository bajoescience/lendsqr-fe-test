import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import {
  RouteObject,
  createBrowserRouter as Router,
  RouterProvider,
} from "react-router-dom";

import { getUser } from "./services/user";

import { lazy, Suspense } from "react";

import Dashboard from "./routes/Dashboard";
import Main from "./routes/Main";

const Auth = lazy(() => import("./routes/Auth"));

const UserDetails = lazy(() => import("./routes/UserDetails"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Navigation route tree
const routeTree: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "auth",
        element: (
          <Suspense>
            <Auth />
          </Suspense>
        ),
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "userdetails/:userID",
            element: (
              <Suspense>
                <UserDetails />
              </Suspense>
            ),
            loader: async ({ params }) => {
              const userId = params.userID;
              if (!userId) return;
              return await getUser(userId);
            },
          },
          {
            path: ":link",
            element: <Main />,
          },
          {
            path: "",
            element: <Main />,
          },
        ],
      },
    ],
  },
];

// Define the router object
const router = Router(routeTree);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
