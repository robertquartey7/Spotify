import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorPage from "./Pages/ErrorPage";
import { ProtectedRoute } from "./Utilities/ProtectedRoute";
import Login from "./Pages/Login";
import Callback from "./Components/Callback";
import Search from "./Pages/Search/Search";
import Home from "./Pages/Home/Home";
import Artist from "./Pages/Artist/Artist";
import Tracks from "./Pages/Tracks/Tracks";
import { store } from "./Utilities/store/store";
import { Provider } from "react-redux";
import Defaults from "./Pages/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "search/",
        element: <Search />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/artist",
        element: <Artist />,
      },
      {
        path: "/tracks",
        element: <Tracks />,
        
      },
      {
        path: "artist/:id",
        element: <Defaults />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/callback",
    element: <Callback />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
