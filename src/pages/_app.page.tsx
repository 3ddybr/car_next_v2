import "../styles/global.ts";
import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/global";
import { DefaultLayout } from "../layouts/DefaultLayout";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <title>Fest Car</title>
      <Component {...pageProps} />
      <GlobalStyle />
    </DefaultLayout>
  );
}

export default MyApp;
