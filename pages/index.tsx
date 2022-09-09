import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Bubble from "../components/Bubble";
import BubbleRes from "../components/BubbleRes";
import Faq from "../components/faq";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
     
      {/* Top Section */}
      <div><img className={styles.backgroundCity} src={`/bg-yellow.png`} alt="drop" /></div>

      <div><img className={styles.reefLeft} src={`/waterAssets/reef-left.png`} alt="drop" /></div>
      <div><img className={styles.reefLeft} src={`/waterAssets/fish2.png`} alt="drop" /></div>
      <div><img className={styles.reefRight} src={`/waterAssets/reef-right.png`} alt="drop" /></div>
      <div className={styles.nftBoxGrid}>
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
        </div>
        <h1>ROADMAP</h1>
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
<h1>MEET THE TEAM</h1>
<section className={styles.sectionTeam}>
  <div className={styles.containerTeam}>
    {/* FIRST MEMBER */}
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.imgBox}><img className={styles.hiddenCthulhu} src={`/hidden.jpg`}/></div>
        <div className={styles.contentBox}>
          <h3>Pinpin<br/><span>Founder</span><br/><span>Web3 Developer</span></h3>
        </div>
      </div>
      <ul className={styles.sci}>
      <li className={styles.firstIcon}>
        <a href="#"><img src={`/icons/twitter.png`}></img></a>
      </li>
      <li className={styles.secondIcon}>
        <a href="#"><img src={`/icons/twitter.png`}></img></a>
      </li>
      <li className={styles.thirdIcon}>
        <a href="#"><img src={`/icons/twitter.png`}></img></a>
      </li>
    </ul>
    </div>
    {/* SECOND MEMBER */}
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.imgBox}><img className={styles.hiddenCthulhu} src={`/hidden.jpg`}/></div>
        <div className={styles.contentBox}>
          <h3>GUIGZ<br/><span>Founder</span></h3>
        </div>
      </div>
      <ul className={styles.sci}>
      <li className={styles.firstIcon}>
        <a href="#"><img src={`/icons/twitter.png`}></img></a>
      </li>
      <li className={styles.secondIcon}>
        <a href="#"><img src={`/icons/twitter.png`}></img></a>
      </li>
      <li className={styles.thirdIcon}>
        <a href="#"><img src={`/icons/twitter.png`}></img></a>
      </li>
    </ul>
    </div>
    {/* THIRD MEMBER */}
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.imgBox}><img className={styles.hiddenCthulhu} src={`/hidden.jpg`}/></div>
        <div className={styles.contentBox}>
          <h3>Pinpin<br/><span>Founder</span></h3>
        </div>
      </div>
      <ul className={styles.sci}>
      <li className={styles.firstIcon}>
        <a href="#"><img src={`/icons/twitter.png`}></img></a>
      </li>
      <li className={styles.secondIcon}>
        <a href="#"><img src={`/icons/twitter.png`}></img></a>
      </li>
      <li className={styles.thirdIcon}>
        <a href="#"><img src={`/icons/twitter.png`}></img></a>
      </li>
    </ul>
    </div>
    {/* THIRD MEMBER */}
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.imgBox}><img className={styles.hiddenCthulhu} src={`/hidden.jpg`}/></div>
        <div className={styles.contentBox}>
          <h3>Pinpin<br/><span>Founder</span></h3>
        </div>
      </div>
      <ul className={styles.sci}>
      <li className={styles.firstIcon}>
        <a href="#"><img src={`/icons/twitter.png`}></img></a>
      </li>
      <li className={styles.secondIcon}>
        <a href="#"><img src={`/icons/twitter.png`}></img></a>
      </li>
      <li className={styles.thirdIcon}>
        <a href="#"><img src={`/icons/twitter.png`}></img></a>
      </li>
    </ul>
    </div>
    {/* THIRD MEMBER */}
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.imgBox}><img className={styles.hiddenCthulhu} src={`/hidden.jpg`}/></div>
        <div className={styles.contentBox}>
          <h3>Pinpin<br/><span>Founder</span></h3>
        </div>
      </div>
      <ul className={styles.sci}>
      <li className={styles.firstIcon}>
        <a href="#"><img src={`/icons/twitter.png`}></img></a>
      </li>
      <li className={styles.secondIcon}>
        <a href="#"><img src={`/icons/twitter.png`}></img></a>
      </li>
      <li className={styles.thirdIcon}>
        <a href="#"><img src={`/icons/twitter.png`}></img></a>
      </li>
    </ul>
    </div>
  </div>
</section>
{/* END TEAM SECTION */}
{/* START TEAM SECTION */}
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
<h1>FREQUENTLY ASKED QUESTIONS</h1>
      <Faq />
      <Bubble />
      <BubbleRes />
    </div>
  );
};

export default Home;
