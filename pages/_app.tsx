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
      <title lang="fr">Eternal Cthulhu | Jeu d&apos;enqu&ecirc;te immersif</title>
      <link rel="canonical" href="http://www.eternalcthulhu.com" />
      <meta name="description" content="Jeu d'enquête dans l'univers d'H.P Lovecraft, élucidez le mystère enfoui derrière un colis légué en héritage par le professeur Angell !"/>
      <meta name="keywords" content="CTHULHU, ETERNAL, GAME, INVESTIGATEUR, ESCAPE, ENQUETE, JEU, BOX, DETECTIVE"></meta>
      <meta name="author" content="@Pinpin.eth"></meta>
    </Helmet>
      <Navbar />
      <Component {...pageProps} />
      <Analytics />
      </ThirdwebProvider>
  );
}

export default MyApp;
