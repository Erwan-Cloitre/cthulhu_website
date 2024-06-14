import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Faq from "../components/faq";
import Image from 'next/image'
import React from 'react'
/*Images */
import reefRight from '../public/waterAssets/reef-right.png';
import hiddenCthulhu from '../public/img_detective-box-couv.webp';
import statue from '../public/waterAssets/statue.png';
import fish from '../public/waterAssets/fish2.png';
import pocketwatch from '../public/pocketwatch.png';
import age from '../public/age.png';
import cultiste from '../public/cultiste.png';
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
          <h1>L&apos;investigateur : Eternal Cthulhu</h1>
          <p>Plongez dans l&apos;intrigue autour du myst&eacute;rieux colis laiss&eacute; en h&eacute;ritage par le professeur Angell. D&eacute;cryptez l&apos;&eacute;nigmatique statue qu&apos;il renferme et r&eacute;v&eacute;lez ses secrets !</p>
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
        {/* Concept SECTION */}
        <section>
          <div className={styles.responsiveThreeColumnGrid}>
            <div>
            <img className={styles.ico} src={pocketwatch.src} alt="" />
            <p>
              2H00 &agrave; 4H00<br/>
              D'ENQU&Ecirc;TE, SELON<br/>
              VOS TALENTS<br/>
              D&apos;INVESTIGATEUR
            </p>
            </div>
            <div>
              <img className={styles.ico} src={cultiste.src} alt="" />
              <p>
              SEUL OU &Agrave;<br/>
              PLUSIEURS, C&apos;EST<br/>
              VOUS QUI<br/>
              CHOISSISSEZ
              </p>  
            </div>
            <div>
            <img className={styles.ico} src={age.src} alt="" />
              <p>
                NOTRE ENQU&Ecirc;TE<br/>
                EST<br/>
                RECOMMAND&Eacute;E &Agrave;<br/>
                PARTIR DE 14 ANS
              </p>
            </div>
          </div>
        </section>
        {/* FIN Concept SECTION */}
        {/* Concept SECTION */}
        <h1 className={styles.titlesHome}>Concept du jeu</h1>
        <div className={styles.statuediv}><img className={styles.statue} src={statue.src} alt="drop" /></div>
        <div className={styles.waves}></div>
        <section className={styles.timelineSection}>
          <div>
            
          </div>
          <div className={styles.conceptBox}>
            <p>
            Vivez la c&eacute;l&egrave;bre histoire d&apos;HP Lovecraft.<br/>
            Plus qu&apos;un escape game &agrave; la maison,<br/>
            une v&eacute;ritable enqu&ecirc;te immersive.<br/>
            Aucun r&egrave;glement, juste votre instinct.
            </p>
            <p>
            Dans la bo&icirc;te :<br/>
            - 1 antique statue<br/>
            - 17 documents r&eacute;alistes<br/>
            - 1 bloc-notes<br/>
            Tout ce dont vous avez besoin<br/>
            pour d&eacute;couvrir la v&eacute;rit&eacute; !
            </p>
            <p>
            Parcourez les archives, d&eacute;chiffrez des codes secrets et suivez les indices diss&eacute;min&eacute;s dans chaque document pour lever le voile sur l&apos;&eacute;trange idole ancestrale.
            </p>
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
      <h1 className={styles.titlesHome}>FREQUENTLY ASKED QUESTIONS</h1>
      <div><img className={styles.fishRight} src={fish.src} alt="drop" /></div>
      <Faq />
      <div className={styles.containerFooterImg}>
        <img className={styles.footerImg} src="/footer.webp" alt="" />
        <img className={styles.footerImgMobile} src="/footerMobile.webp" alt="" />
      </div>  
    </div>
  );
};

export default Home;
