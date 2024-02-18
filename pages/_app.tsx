import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import { Analytics } from '@vercel/analytics/react';

// This is the chainId your dApp will work on.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
    activeChain={activeChain}
    clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
    >
      <Helmet>
      <html lang="en" />
      <title lang="en">Eternal Cthulhu</title>
      <link rel="canonical" href="http://www.eternalcthulhu.com" />
      <meta name="description" content="Eternal Cthulhu is a NFT collection based on ethereum blockchain" />
      <meta name="keywords" content="NFT, ETH, ETHEREUM, CTHULHU, ETERNAL, CRYPTO, MINT, STAKING, COLLECTION, OPENSEA"></meta>
      <meta name="author" content="@Pinpin.eth"></meta>
    </Helmet>
      <Navbar />
      <Component {...pageProps} />
      <Analytics />
      </ThirdwebProvider>
  );
}

export default MyApp;
