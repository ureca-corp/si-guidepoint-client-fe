import { gqlClient } from "@/common/client";
import { Layout } from "@/common/components/Layout/Layout";
import { findTheme, ThemeTypes } from "@/common/theme/custom-theme";
import "@/common/theme/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloProvider client={gqlClient}>
        <ThemeProvider theme={findTheme(ThemeTypes.Light)}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ApolloProvider>
    </RecoilRoot>
  );
}
