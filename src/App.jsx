import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import VazirMedium from "./fonts/Vazir-Medium.woff2";
import { grey } from "@mui/material/colors";

import AppLayout from "./components/ui/AppLayout";
import Home from "./components/pages/Home";
import VacuumProducts from "./components/pages/VacuumProducts";
import ProductDetails from "./components/pages/ProductDetails";
import ShoppingCart from "./components/pages/ShoppingCart";

const theme = createTheme({
  typography: {
    fontFamily: "VazirMedium",

    body2: {
      fontSize: 13,
    },
    body1: {
      fontSize: 10,
      color: "#989898",
    },
    subtitle2: {
      fontSize: 11,
    },
    subtitle1: {
      fontSize: 11,
      color: "#ef5350",
    },
  },
  palette: { primary: { main: grey[100] } },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'VazirMedium';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('VazirMedium'), local('VazirMedium'), url(${VazirMedium}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/vacuumproducts",
        element: <VacuumProducts />,
      },
      {
        path: "/productdetails",
        element: <ProductDetails />,
      },
      {
        path: "/shoppingcart",
        element: <ShoppingCart />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
