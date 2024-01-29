import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { useContract } from '@thirdweb-dev/react'
import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import FooterMint from "../components/FooterMint";

const Mint: NextPage = () => {
  const router = useRouter();
  // Get the currently connected wallet's address
  const address = useAddress();

  // Get the NFT Collection contract
  const nftDropContract = useContract("0x7a0245FfF19a0261b17D7be87F426C4357719C38", "nft-drop").contract;

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
        <div className={styles.connectButton}>
          <ConnectWallet/>
        </div>
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
