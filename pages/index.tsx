import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Bubble from "../components/Bubble";
import BubbleRes from "../components/BubbleRes";
import ArtistSection from "../components/ArtistSection";
import Faq from "../components/faq";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.containerHome}>
     
      {/* Top Section */}
      <div><img className={styles.backgroundCity} src={`/bg-yellow.png`} alt="drop" /></div>

      <div><img className={styles.reefLeft} src={`/waterAssets/reef-left.png`} alt="drop" /></div>
      <div><img className={styles.reefRight} src={`/waterAssets/reef-right.png`} alt="drop" /></div>
      <section className={styles.nftBoxGrid}>
        <div className={styles.buttonBox}>
          <h1>ETERNAL CTHULHU</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
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
          </div>
          <div>
            <img className={styles.hiddenCthulhu} src={`/hidden.jpg`} alt="hiddenCthulhu" />
          </div>
        </section>
        <h1 className={styles.titlesHome}>ROADMAP</h1>
        <div><img className={styles.fishRight} src={`/waterAssets/fish2.png`} alt="drop" /></div>
        <div className={styles.waves}></div>
        <section className={styles.timelineSection}>
	<div className={styles.timelineItems}>
		<div className={styles.timelineItem}>
			<div className={styles.timelineDot}></div>
			<div className={styles.timelineDate}>0%</div>
			<div className={styles.timelineContent}>
				<h3>timeline item title</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
			</div>
		</div>
		<div className={styles.timelineItem}>
			<div className={styles.timelineDot}></div>
			<div className={styles.timelineDate}>25%</div>
			<div className={styles.timelineContent}>
				<h3>timeline item title</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
			</div>
		</div>
		<div className={styles.timelineItem}>
			<div className={styles.timelineDot}></div>
			<div className={styles.timelineDate}>50%</div>
			<div className={styles.timelineContent}>
				<h3>timeline item title</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
			</div>
		</div>
		<div className={styles.timelineItem}>
			<div className={styles.timelineDot}></div>
			<div className={styles.timelineDate}>75%</div>
			<div className={styles.timelineContent}>
				<h3>timeline item title</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
			</div>
		</div>
		<div className={styles.timelineItem}>
			<div className={styles.timelineDot}></div>
			<div className={styles.timelineDate}>100%</div>
			<div className={styles.timelineContent}>
				<h3>timeline item title</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
			</div>
		</div>
		<div className={styles.timelineItem}>
			<div className={styles.timelineDot}></div>
			<div className={styles.timelineDate}>V2</div>
			<div className={styles.timelineContent}>
				<h3>timeline item title</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
			</div>
		</div>
	</div>
</section>
{/* TEAM SECTION */}
<h1 className={styles.titlesHome}>MEET THE TEAM</h1>
<div className={styles.waves2}></div>
<ArtistSection />
{/* START COLLAB SECTION */}
<section className={styles.collabBox}>
        <div className={styles.collabIcon}>
        <a>
          <img src={`/collab/logo1.png`}/>
        </a>
        </div>
        <div className={styles.collabIcon}>
        <a className={styles.collabIcon}>
          <img src={`/collab/logo2.png`}/>
        </a>
        </div>
        <div className={styles.collabIcon}>
        <a className={styles.collabIcon}>
          <img src={`/collab/logo3.png`}/>
        </a>
        </div>
        <div className={styles.collabIcon}>
        <a className={styles.collabIcon}>
          <img src={`/collab/logo4.webp`}/>
        </a>
        </div>
      </section>
      {/* END COLLAB SECTION */}
      <h1 className={styles.titlesHome}>FREQUENTLY ASKED QUESTIONS</h1>
      <Faq />
      <Bubble />
      <BubbleRes />
      <Footer />
    </div>
  );
};

export default Home;
