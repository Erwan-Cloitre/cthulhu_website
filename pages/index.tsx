import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import ArtistSection from "../components/ArtistSection";
import Faq from "../components/faq";
import Footer from "../components/Footer";
import Image from 'next/image'
/*Images */
import reefRight from '../public/waterAssets/reef-right.png';
import hiddenCthulhu from '../public/hidden.jpg';
import fish from '../public/waterAssets/fish2.png';
import collabIcon1 from '../public/collab/logo1.png';
import collabIcon2 from '../public/collab/logo2.png';
import collabIcon3 from '../public/collab/logo3.png';
import collabIcon4 from '../public/collab/logo4.webp';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.containerHome}>
     
      {/* Top Section */}
      <div>
        <Image
      alt="Background"
      src='/bg-yellow.png'
      layout="responsive"
      width={1920}
      height={1200}
      quality={100}
    /></div>


      <div className={styles.reefLeft}>
        <Image
          src="/waterAssets/reef-left.png"
          alt="Reef left"
          layout="fixed"
          width={154}
          height={474}
          quality={100}
    /></div>
      <div className={styles.reefRight}><img src={reefRight.src} alt="drop" /></div>
      <section className={styles.nftBoxGrid}>
        <div className={styles.buttonBox}>
          <h1>ETERNAL CTHULHU</h1>
          <p>A limited collection of XXXX NFTs based on Ethereum Blockchain to awaken cthulhu in the metaverse.</p>
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
            <img className={styles.hiddenCthulhu} src={hiddenCthulhu.src} alt="hiddenCthulhu" />
          </div>
        </section>
        <h1 className={styles.titlesHome}>ROADMAP</h1>
        <div><img className={styles.fishRight} src={fish.src} alt="drop" /></div>
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
        <a href="#">
          <img src={collabIcon1.src} alt="Collab icon"/>
        </a>
        </div>
        <div className={styles.collabIcon}>
        <a href="#">
          <img src={collabIcon2.src} alt="Collab icon"/>
        </a>
        </div>
        <div className={styles.collabIcon}>
        <a href="#">
          <img src={collabIcon3.src} alt="Collab icon"/>
        </a>
        </div>
        <div className={styles.collabIcon}>
        <a href="#">
          <img src={collabIcon4.src} alt="Collab icon"/>
        </a>
        </div>
      </section>
      {/* END COLLAB SECTION */}
      <h1 className={styles.titlesHome}>FREQUENTLY ASKED QUESTIONS</h1>
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
