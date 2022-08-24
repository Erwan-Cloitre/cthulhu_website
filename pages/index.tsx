import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Bubble from "../components/Bubble";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
     
      {/* Top Section */}
      <div><img className={styles.backgroundCity} src={`/bg-yellow.png`} alt="drop" /></div>
      <h1 className={styles.h1}>Eternal Cthulhu</h1>

      <div><img className={styles.reefLeft} src={`/reef-left.webp`} alt="drop" /></div>
      <div className={styles.nftBoxGrid}>
        {/* Mint a new NFT */}
        <div 
        className={styles.optionSelectBox}
        role="button"
        onClick={() => router.push(`/mint`)}
        >
          <img src={`/icons/drop.webp`} alt="drop" />
          <h2 className={styles.selectBoxTitle}>Mint a new NFT</h2>
          <p className={styles.selectBoxDescription}>
            Use the NFT Drop Contract to claim an NFT from the collection.
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          <img src={`/icons/token.webp`} alt="drop" />
          <h2 className={styles.selectBoxTitle}>Stake Your NFTs</h2>
          <p className={styles.selectBoxDescription}>
            Use the custom staking contract deployed via <b>thirdweb Deploy</b>{" "}
            to stake your NFTs, and earn tokens from the <b>Token</b> contract.
          </p>
        </div>
      </div>
      <Bubble />
    </div>
  );
};

export default Home;
