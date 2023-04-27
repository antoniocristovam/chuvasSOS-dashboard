import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  </React.StrictMode>
);
