import ReactDOM from "react-dom/client";
import RouterProvider from "./router/RouterProvider";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./scss/styles.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <RouterProvider />
  </BrowserRouter>
);
