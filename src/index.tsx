import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ButtonAppBar from "./components/ButtonAppBar";
import TopPage from "./components/top/TopPage";
import { MenuSideBar } from "./components/MenuSideBar";
import { menuContext } from "./hooks/appState";
import { useState } from "react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <React.StrictMode>
      {/* <ButtonAppBar />
      <MenuSideBar open={isOpened} /> */}
      <TopPage />
    </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
