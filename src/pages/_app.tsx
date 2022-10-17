import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import { wrapper } from "@root/store";

function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  const theme = {
    fg: "#be4d25",
    bg: "#fff",
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
