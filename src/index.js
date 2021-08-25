import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./shared/styles";
import { ThemeProvider } from "styled-components";
import theme from "./shared/themes";
import { FavoriteProvider } from "./hooks/useFavorite";
import { EditProvider } from "./hooks/useEdit";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <FavoriteProvider>
        <EditProvider>
          <App />
        </EditProvider>
      </FavoriteProvider>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
