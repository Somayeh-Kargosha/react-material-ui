import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Rtl from "./rtl/index.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import "./assets/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Rtl>
      <CartProvider>
        <App />
      </CartProvider>
    </Rtl>
  </React.StrictMode>
);
