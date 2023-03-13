import { PrivateRoute } from "@/common/auth/session/common";
import { gqlClient } from "@/common/client";
import { Layout } from "@/common/components/Layout/Layout";
import { PublicRoutes } from "@/common/router/RouterPath";
import { findTheme, ThemeTypes } from "@/common/theme/custom-theme";
import "@/common/theme/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isPublicPath = !!PublicRoutes.find((it) => it === router.pathname);

  return (
    <RecoilRoot>
      <ApolloProvider client={gqlClient}>
        <ThemeProvider theme={findTheme(ThemeTypes.Light)}>
          {isPublicPath ? (
            <Component {...pageProps} />
          ) : (
            <PrivateRoute>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </PrivateRoute>
          )}
        </ThemeProvider>
      </ApolloProvider>
    </RecoilRoot>
  );
}
