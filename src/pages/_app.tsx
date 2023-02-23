import { Layout } from "@/common/components/Layout/Layout";
import { findTheme, ThemeTypes } from "@/common/theme/custom-theme";
import "@/common/theme/styles/globals.css";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={findTheme(ThemeTypes.Light)}>
          <Layout>
            <Component {...pageProps} />s
          </Layout>
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
