import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Rtl from "./rtl/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Rtl>
      <App />
    </Rtl>
  </React.StrictMode>
);
