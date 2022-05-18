import { ThemeProvider } from "styled-components";

import { Feed } from "./pages/Feed";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Feed />
    </ThemeProvider>
  );
}

export default App;
