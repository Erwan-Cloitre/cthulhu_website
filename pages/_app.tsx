import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Helmet>
      <title>Eternal Cthulhu</title>
      <meta name="Eternal Cthulhu is a NFT collection on ethereum blockchain" content="Eternal Cthulhu NFT" />
    </Helmet>
       <Navbar />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
