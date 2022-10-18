import { ThemeProvider, createGlobalStyle } from "styled-components";
import type { AppProps } from "next/app";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Lato", "sans-serif"; 
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  const theme = {
    fg: "#be4d25",
    bg: "#fff",
  };

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
