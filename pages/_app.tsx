import "@fontsource/mali/400.css";
import "@fontsource/mali/500.css";
import "@fontsource/mali/600.css";
import "@fontsource/mali/700.css";

import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import { Layout } from "../components/Layout";
import { theme } from "../styles/theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
