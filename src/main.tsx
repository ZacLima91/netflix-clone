import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./global-styles";
import { Profiles } from "./pages/Profiles";
import { HomeInitial } from "./pages/HomeInitial";
import { Login } from "./pages/Login";
import { Browser } from "./pages/Browser";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeInitial />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/browser/:id" element={<Browser />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
