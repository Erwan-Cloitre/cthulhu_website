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
      <html lang="fr" />
      <title lang="fr">Eternal Cthulhu</title>
      <link rel="canonical" href="http://www.eternalcthulhu.com" />
      <meta name="description" content="L'investigateur : le mythe de Cthulhu est un jeu d'enquête dans l'univers d'H.P Lovecraft, élucidez le mystère enfui derrère le colis légué en héritage par le professeur Angell." />
      <meta name="keywords" content="NFT, ETH, ETHEREUM, CTHULHU, ETERNAL, GAME, INVESTIGATEUR, ESCAPE, ENQUETE, JEU, BOX, DETECTIVE"></meta>
      <meta property="og:title" content="Eternal Cthulhu"></meta>
      <meta property="og:site_name" content="Eternal Cthulhu"></meta>
      <meta property="og:url" content="https://www.eternalcthulhu.com/"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:description" content="L'investigateur : le mythe de Cthulhu est un jeu d'enquête dans l'univers d'H.P Lovecraft, élucidez le mystère enfui derrère le colis légué en héritage par le professeur Angell."></meta>
      <meta name="author" content="@Pinpin.eth"></meta>
    </Helmet>
      <Navbar />
      <Component {...pageProps} />
      <Analytics />
      </ThirdwebProvider>
  );
}

export default MyApp;
