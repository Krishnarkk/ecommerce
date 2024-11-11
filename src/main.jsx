import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopPage from "./page/shop-page/ShopPage.jsx";
import Header from "./components/Header/Header.jsx";
import HomePage from "./page/HomePage/HomePage.component.jsx";

import AuthenticationContainer from "./page/Authentication/AuthenticationContainer.jsx";
import store from "./store.js";
import {Provider} from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/shop/:title",
        element: <ShopPage />,
      },
      {
        path: "/auth",
        element: <AuthenticationContainer />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
