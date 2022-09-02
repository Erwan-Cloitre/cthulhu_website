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

      <div><img className={styles.reefLeft} src={`/reef-left.webp`} alt="drop" /></div>
      <div className={styles.nftBoxGrid}>
        {/* Mint a new NFT */}
        <button 
        className={styles.newButton}
        role="button"
        onClick={() => router.push(`/mint`)}
        >
          <span>
            MINT NOW
          </span>
        </button>

        <div>
          <img className={styles.hiddenCthulhu} src={`/hidden.jpg`} alt="hiddenCthulhu" />
        </div>
      </div>
      <Bubble />
    </div>
  );
};

export default Home;
