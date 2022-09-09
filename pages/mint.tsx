import { ConnectWallet, useAddress, useNFTDrop } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import FooterMint from "../components/FooterMint";

const Mint: NextPage = () => {
  const router = useRouter();
  // Get the currently connected wallet's address
  const address = useAddress();

  // Get the NFT Collection contract
  const nftDropContract = useNFTDrop(
    "0xC59ef2a25324BdF61CCDAb2B9A104A9bf9e33DEb"
  );

  async function claimNft() {
    try {
      const tx = await nftDropContract?.claim(1);
      console.log(tx);
      alert("NFT Claimed!");
      router.push(`/stake`);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    <div className={styles.containerMint}>
      <h1 className={styles.h1}>Mint An NFT!</h1>

      <p className={styles.explain}>
        Here is where we use our <b>NFT Drop</b> contract to allow users to mint
        one of the NFTs that we lazy minted.
      </p>
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

      {!address ? (
        <ConnectWallet
          colorMode="dark"
          accentColor="#fcd230"
        />
      ) : (
        <button
          className={`${styles.mainButton} ${styles.spacerBottom}`}
          onClick={() => claimNft()}
        >
          Claim An NFT
        </button>
      )}
      <FooterMint />
    </div>
  );
};

export default Mint;
