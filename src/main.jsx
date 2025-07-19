import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Login from "./Components/Login.jsx";
import Body from "./Components/Body.jsx";
import { RouterProvider } from "react-router-dom";
import Browse from "./Components/Browse.jsx";


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App />
  },
  {
    path:'/login',
    element:<Login />
  },
  {
    path:'/browse',
    element:<Browse />
  },

])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} >
      <App />
    </RouterProvider>
  </StrictMode>
);
