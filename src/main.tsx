import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./app/root/root";
import { Providers } from "./providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <Root />
    </Providers>
  </React.StrictMode>
);
