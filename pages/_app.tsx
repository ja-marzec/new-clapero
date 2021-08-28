import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ContextProvider } from "../context/Context";
import React from "react";
import { Nav } from "../components/nav/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ContextProvider>
        <Nav />
        <Component {...pageProps} />
      </ContextProvider>
    </>
  );
}
export default MyApp;
