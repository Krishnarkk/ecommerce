import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopPage from "./page/shop-page/ShopPage.jsx";
import Header from "./components/Header/Header.jsx";
import HomePage from "./page/HomePage/HomePage.component.jsx";
import productCategories from "./page/Product.categories.js";
import SignInComponent from "./components/sign-in/SignInComponent.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <HomePage  productCategories={productCategories.sections}/>,
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
        path: "/signin",
        element: <SignInComponent />,
      },
    ],
  }
]);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <Header />
//         <HomePage productCategories={productCategories.sections} />
//       </>
//     ),
//   },
//   {
//     path: "/shop",
//     element: (
//       <>
//         <Header />
//         <ShopPage />
//       </>
//     ),
//   },
//   {
//     path: "/shop/:title",
//     element: (
//       <>
//         <Header />
//         <ShopPage />
//       </>
//     ),
//   }
// ]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
