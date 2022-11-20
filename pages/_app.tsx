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
      <html lang="en" />
      <title lang="en">The Eternal Cthulhu NFT collection</title>
      <link rel="canonical" href="http://www.eternalcthulhu.com" />
      <link title="Cthulhu Mint" rel="alternate" href="https://www.eternalcthulhu.com/mint" />
      <meta name="description" content="Eternal Cthulhu is a NFT collection based on ethereum blockchain" />
      <meta name="keywords" content="NFT, ETH, ETHEREUM, CTHULHU, ETERNAL, CRYPTO, MINT, STAKING, COLLECTION, OPENSEA"></meta>
      <meta name="author" content="@Pinpin.eth"></meta>
    </Helmet>
      <Navbar />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
