import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./shared/styles";
import { ThemeProvider } from "styled-components";
import theme from "./shared/themes";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
