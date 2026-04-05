import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./routes";
import { RouterProvider } from "react-router/dom";
import ReactDOM from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);
