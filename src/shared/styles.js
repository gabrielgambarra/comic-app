import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.fonts.body};
  }
  body,
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
    color: ${(props) => props.theme.colors.default};
    font-size: ${(props) => props.theme.fontSizes.default};
    background-color: ${(props) => props.theme.colors.dark};
  }
  body {
    padding: 0 130px;
  }
  
  a { 
    text-decoration: none;
    
    &:active,
    &:link,
    &:visited {
      color: #fff;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex-wrap: ${(props) => props.wrap};
  padding: ${(props) => props.padding};
`;

export const AppContent = styled(Flex)`
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;
