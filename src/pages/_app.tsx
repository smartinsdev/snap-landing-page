import "../styles/globals.css";
import type { AppProps } from "next/app";
import { OpenMenuProvider } from "../providers/OpenMenuProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <OpenMenuProvider>
      <Component {...pageProps} />
    </OpenMenuProvider>
  );
}

export default MyApp;
