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
import hiddenCthulhu from '../public/img_detective-box-couv.jpg';
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
        <div >
          <Image
      alt="Background"
      src='/bg-city.png'
      layout="responsive"
      width={1920}
      height={1200}
      quality={100}
    /></div>
    <h1 className={styles.landingTitle}>Découvrez l'investigateur en vous</h1>
    <p className={styles.landingText}>Arriverez-vous à percer à jour le mythe de Cthulhu ?</p>
    {/* Mint a new NFT */}
    <button 
      className={styles.landingButton}
      role="button"
      onClick={() => router.push(`/mint`)}
     >
       <span>
        Relevez le défi
       </span>
    </button>
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
          <h1>L'investigateur : le mythe de Cthulhu</h1>
          <p>Plongez dans l'intrigue et élucidez le mystère enfui derrère le colis légué en héritage par le professeur Angell et déjouez le plan du culte !</p>
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
        <h1 className={styles.titlesHome}>DREAM MAP</h1>
        <div><img className={styles.fishRight} src={fish.src} alt="drop" /></div>
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
