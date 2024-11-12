import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";

import "./App.css";

import { Home } from "./pages/Home";
import { ErrorPage } from "./pages/ErrorPage";
import { ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage";
import { Contact } from "./pages/Contact";
import { ProductCardDetails } from "./components/Layout/ProductCardDetails";



const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "product",
        element: <ProductPage/>,
      },
      {
        path: "products/:id",
        element: <ProductCardDetails />,
      },
      {
        path: "cart",
        element: <CartPage/>,
      },
      {
        path: "contact",
        element: <Contact/>,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}> </RouterProvider>;
};

export default App;