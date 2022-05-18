import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;    
  }
  #root {
    z-index: 0;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background.primary};
  }
  body, button, input, textarea {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Helvetica",Arial,sans-serif;
  }
`;

export default GlobalStyle;
