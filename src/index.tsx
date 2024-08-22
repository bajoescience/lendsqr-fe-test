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

// import Dashboard from "./routes/Dashboard";
// import Main from "./routes/Main";

const Auth = lazy(() => import("./routes/Auth"));
const Main = lazy(() => import("./routes/Main"));
const Dashboard = lazy(() => import("./routes/Dashboard"));
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
          <Suspense fallback={<div>Loading...</div>}>
            <Auth />
          </Suspense>
        ),
      },
      {
        path: "dashboard",
        element: (
          <Suspense>
            <Dashboard />
          </Suspense>
        ),
        children: [
          {
            path: "userdetails/:userID",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
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
            element: (
              <Suspense>
                <Main />
              </Suspense>
            ),
          },
          {
            path: "",
            element: (
              <Suspense>
                <Main />
              </Suspense>
            ),
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
