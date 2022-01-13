import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <>
    <ColorModeScript initialColorMode='light' />
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
