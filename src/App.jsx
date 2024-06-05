import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

import { grey } from "@mui/material/colors";
import VazirMediumFD from "./assets/fonts/Vazir-Medium-FD.woff2";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import VazirMedium from "./fonts/Vazir-Medium.woff2";
// import IRANSansWeb from "./assets/fonts/woff2/IRANSansWeb_Medium.woff2";

const theme = createTheme({
  direction: "rtl",
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
      color: "#ef4056",
    },
  },
  palette: {
    primary: { main: grey[100], light: "#4d4d4d", dark: "#111" },
    secondary: { main: "#ef4056", light: "", dark: "" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'VazirMedium';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('VazirMedium'), local('VazirMedium'), url(${VazirMediumFD}), format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
     
      `,
    },
  },
});

const queryClinet = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClinet}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
