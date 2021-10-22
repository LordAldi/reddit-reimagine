import React, { HTMLProps } from "react";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { Provider, createClient } from "urql";
import theme from "../theme";
import Navbar from "../components/Navbar";

const client = createClient({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include",
  },
});

interface MyAppProps {
  Component: React.FC<any>;
  pageProps: HTMLProps<any>;
}
function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Provider value={client}>
          <Navbar />
          <Component {...pageProps} />
        </Provider>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
