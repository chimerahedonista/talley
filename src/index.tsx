import React from "react";
import ReactDOM from "react-dom";
import { UseWalletProvider } from "use-wallet";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import reportWebVitals from "./reportWebVitals";
import { Container } from "@mui/material";
import Layout from "./pages/layout";

ReactDOM.render(
  <Container sx={{backgroundColor: "#15081D", color: "white"}} maxWidth="lg">
    <React.StrictMode>
      <UseWalletProvider>
        <ToastContainer />
        <Layout />
      </UseWalletProvider>
    </React.StrictMode>
  </Container>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
