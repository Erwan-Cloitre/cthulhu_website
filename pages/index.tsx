import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import ArtistSection from "../components/ArtistSection";
import Faq from "../components/faq";
import Footer from "../components/Footer";
import Image from 'next/image'
import React from 'react'
/*Images */
import reefRight from '../public/waterAssets/reef-right.png';
import hiddenCthulhu from '../public/img_detective-box-couv.webp';
import statue from '../public/waterAssets/statue.png';
import fish from '../public/waterAssets/fish2.png';
import collabIcon1 from '../public/collab/logo1.png';
import collabIcon2 from '../public/collab/logo2.png';
import collabIcon3 from '../public/collab/logo3.png';
import collabIcon4 from '../public/collab/logo4.webp';
import dynamic from 'next/dynamic'

const Home: NextPage = () => {
  
  const router = useRouter();
  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
  return (
    <div className={styles.containerHome}>
     
      {/* Top Section */}
      <div>
        <div className={styles.containerLandingImg}>
          <img className={styles.landingImg} src="/bg-city.webp" alt="" />
          <img className={styles.landingImgMobile} src="/bg-city-mobile2.webp" alt="" />
        </div>
        <div className={styles.landingBox}>
          <h1 className={styles.landingTitle}>D&eacute;couvrez l&apos;investigateur en vous</h1>
          <p className={styles.landingText}>Arriverez-vous &agrave; percer &agrave; jour le mythe de Cthulhu ?</p>
          {/* Mint a new NFT */}
          <button 
            className={styles.landingButton}
            role="button"
            onClick={() => router.push(`/mint`)}
          >
            <span>
              Relevez le d&eacute;fi
            </span>
          </button>
        </div>
      </div>


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
        <div>
            <img className={styles.hiddenCthulhu} src={hiddenCthulhu.src} alt="hiddenCthulhu" />
        </div>
        <div className={styles.buttonBox}>
          <h1>L&apos;investigateur : le mythe de Cthulhu</h1>
          <p>Plongez dans l&apos;intrigue et &eacute;lucidez le mystère enfui derrère le colis l&eacute;gu&eacute; en h&eacute;ritage par le professeur Angell et d&eacute;jouez le plan du culte !</p>
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
        </section>
        {/* Roadmap SECTION */}
        <h1 className={styles.titlesHome}>DREAM MAP</h1>
        <div><img className={styles.fishRight} src={fish.src} alt="drop" /></div>
        <div className={styles.waves}></div>
        <section className={styles.timelineSection}>
	<div className={styles.timelineItems}>
		<div className={styles.timelineItem}>
			<div className={styles.timelineDot}></div>
			<div className={styles.timelineDate}>crowdfunding</div>
			<div className={styles.timelineContent}>
        <h3>Campagne Ulule</h3>
				<p>Soyez parmi les premiers &agrave; soutenir le projet Eternal Cthuhu gr&acirc;ce au financement participatif.</p>
        <button 
            className={styles.buttonDreammap}
            role="button"
            onClick={() => router.push(`/mint`)}
          >
          <span>
            lien Ulule
          </span>
          </button>
			</div>
		</div>
		<div className={styles.timelineItem}>
			<div className={styles.timelineDot}></div>
			<div className={styles.timelineDate}>Pr&eacute;commande</div>
			<div className={styles.timelineContent}>
				<h3>collection nft</h3>
        <p>937 tickets pour devenir membre du bureau priv&eacute; des investigateurs visionnaires.
        </p>
        <div className={styles.statuediv}><img className={styles.statue} src={statue.src} alt="drop" /></div>
        <button 
            className={styles.buttonDreammap}
            role="button"
            onClick={() => router.push(`/mint`)}
          >
          <span>
            QUELS AVANTAGES ?
          </span>
          </button>
			</div>
		</div>
		<div className={styles.timelineItem}>
			<div className={styles.timelineDot}></div>
			<div className={styles.timelineDate}>Lancement</div>
			<div className={styles.timelineContent}>
				<h3>Boutique en ligne</h3>
				<p>L&apos;enqu&ecirc;te sera disponible pour tous, serez-vous &agrave; la hauteur ? </p>
			</div>
		</div>
		<div className={styles.timelineItem}>
			<div className={styles.timelineDot}></div>
			<div className={styles.timelineDate}>&Agrave; venir... </div>
			<div className={styles.timelineContent}>
			</div>
		</div>
	</div>
</section>
        {/* Video SECTION */}
        <div className={styles.waves}></div>
        <section>
          <div className='player-wrapper'>
            <ReactPlayer 
              className='react-player'
              url='https://youtu.be/Pnc7AkSV488' 
              controls={true}
              playing={true}
              muted={true}
              loop={true}
              width='100%'
              height='50vw'
            />
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
