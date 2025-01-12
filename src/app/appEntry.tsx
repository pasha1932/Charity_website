// import { ThemeProvider } from "@/app/providers/ThemeProvider";
// import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import { store } from "./appStore";
import { RouterProvider } from "react-router-dom";
import '@/shared/lib/i18n';
import '../app/styles/reset.css';
import '../app/styles/global.scss';
import appRouter from "./appRouter";
import { Provider } from "react-redux";
import {store} from "./appStore";

ReactDOM.createRoot(document.getElementById("root")!).render(
      <Provider store={store}>
         <RouterProvider router={appRouter} /> 
      </Provider>

);