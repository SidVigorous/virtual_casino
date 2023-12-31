import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UpDown from "./Components/UpDown/UpDown"
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Virtual from "./Components/Virtual/Virtual";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/casino-details",
    element: <UpDown/>,
  },

  {
    path:"/Lobby",
    element:<Virtual/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
