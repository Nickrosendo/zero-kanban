import { ThemeProvider, createGlobalStyle } from "styled-components";
import type { AppProps } from "next/app";

import { theme } from "@root/themes";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Lato", "sans-serif"; 
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
