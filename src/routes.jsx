import App from "./App";
import CartPage from "./pages/CartPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProductPage, { loader as productLoader } from "./pages/ProductPage";
import ProductsPage, { loader as productsLoader } from "./pages/ProductsPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage errorMsg="Oops! Some error occured" />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
        loader: productsLoader,
      },
      {
        path: "product/:productId",
        element: <ProductPage />,
        loader: productLoader,
        errorElement: <ErrorPage errorMsg="Product does not exist" />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
];

export default routes;
