import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layouts/AppLayout";
import Error from "../components/ui/Error";
import Home from "../pages/Home";
import VacuumProducts from "../pages/VacuumProducts";
import WashingMashineProducts from "../pages/WashingMashineProducts";
import AirTreatmentProducts from "../pages/AirTreatmentProducts";
import ProductDetails from "../pages/ProductDetails";
import ShoppingCart from "../pages/ShoppingCart";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/category-vacuum-cleaner",
        element: <VacuumProducts />,
        errorElement: <Error />,
      },
      {
        path: "/category-washing-machine",
        element: <WashingMashineProducts />,
        errorElement: <Error />,
      },
      {
        path: "/category-air-treatment",
        element: <AirTreatmentProducts />,
        errorElement: <Error />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetails />,
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
