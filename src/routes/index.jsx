import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layouts/AppLayout";
import Error from "../components/ui/Error";
import Home from "../pages/Home";
import VacuumProducts from "../pages/VacuumProducts";
import WashingMashineProducts from "../pages/WashingMashineProducts";
import AirTreatmentProducts from "../pages/AirTreatmentProducts";
import ProductDetails from "../pages/ProductDetails";
import ShoppingCart from "../pages/ShoppingCart";
import { loader as categoriesLoader } from "../services/apiCategories";
import {
  airTreatmentProductsLoader,
  vacuumProductsLoader,
  washingMachineProductsLoader,
  productsLoader,
} from "../services/apiProducts";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: categoriesLoader,
        errorElement: <Error />,
      },
      {
        path: "/category-vacuum-cleaner",
        element: <VacuumProducts />,
        loader: vacuumProductsLoader,
        errorElement: <Error />,
      },
      {
        path: "/category-washing-machine",
        element: <WashingMashineProducts />,
        loader: washingMachineProductsLoader,
        errorElement: <Error />,
      },
      {
        path: "/category-air-treatment",
        element: <AirTreatmentProducts />,
        loader: airTreatmentProductsLoader,
        errorElement: <Error />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetails />,
        loader: productsLoader,
        errorElement: <Error />,
      },
      {
        path: "/shoppingcart",
        element: <ShoppingCart />,
      },
    ],
  },
]);

export default router;
