import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Header from "./components/Header";
import Home from "./components/Home";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <App />
  <div>
    <Home />
  </div>
);
