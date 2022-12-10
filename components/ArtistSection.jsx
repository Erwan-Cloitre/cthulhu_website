import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import styles from "../styles/Home.module.css";

import { Pagination } from "swiper";

const ArtistSection = () => {
  return (
    <section className={styles.sectionTeam}>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          650: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1045: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1380: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1580: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className={styles.containerTeam}
      >
      {/* FIRST MEMBER */}
          <SwiperSlide>
              <div className={styles.card}>
                <div className={styles.content}>
                  <div className={styles.imgBox}>
                    <img className={styles.hiddenCthulhu} src={`/hidden.jpg`} alt="Team pic"/>
                  </div>
                    <div className={styles.contentBox}>
                      <h3>Pinpin<br/><span>Founder</span></h3>
                    </div>
                </div>
                    <ul className={styles.sci}>
                      <li className={styles.firstIcon}>
                        <a href="#"><img src={`/icons/twitter.png`} alt="Social icon"></img></a>
                      </li>
                      <li className={styles.secondIcon}>
                        <a href="#"><img src={`/icons/twitter.png`} alt="Social icon"></img></a>
                      </li>
                    <li className={styles.thirdIcon}>
                      <a href="#"><img src={`/icons/twitter.png`} alt="Social icon"></img></a>
                    </li>
                  </ul>
              </div>
      </SwiperSlide>
      <SwiperSlide>
              <div className={styles.card}>
                <div className={styles.content}>
                  <div className={styles.imgBox}>
                    <img className={styles.hiddenCthulhu} src={`/hidden.jpg`} alt="Team pic"/>
                  </div>
                    <div className={styles.contentBox}>
                      <h3>Guigz<br/><span>Founder</span></h3>
                    </div>
                </div>
                    <ul className={styles.sci}>
                      <li className={styles.firstIcon}>
                        <a href="#"><img src={`/icons/twitter.png`} alt="Social icon"></img></a>
                      </li>
                      <li className={styles.secondIcon}>
                        <a href="#"><img src={`/icons/twitter.png`} alt="Social icon"></img></a>
                      </li>
                    <li className={styles.thirdIcon}>
                      <a href="#"><img src={`/icons/twitter.png`} alt="Social icon"></img></a>
                    </li>
                  </ul>
              </div>
      </SwiperSlide>
      <SwiperSlide>
              <div className={styles.card}>
                <div className={styles.content}>
                  <div className={styles.imgBox}>
                    <img className={styles.hiddenCthulhu} src={`/hidden.jpg`} alt="Team pic"/>
                  </div>
                    <div className={styles.contentBox}>
                      <h3>Pinpin3<br/><span>Founder</span></h3>
                    </div>
                </div>
                    <ul className={styles.sci}>
                      <li className={styles.firstIcon}>
                        <a href="#"><img src={`/icons/twitter.png`} alt="Social icon"></img></a>
                      </li>
                      <li className={styles.secondIcon}>
                        <a href="#"><img src={`/icons/twitter.png`} alt="Social icon"></img></a>
                      </li>
                    <li className={styles.thirdIcon}>
                      <a href="#"><img src={`/icons/twitter.png`} alt="Social icon"></img></a>
                    </li>
                  </ul>
              </div>
      </SwiperSlide>
      <SwiperSlide>
              <div className={styles.card}>
                <div className={styles.content}>
                  <div className={styles.imgBox}>
                    <img className={styles.hiddenCthulhu} src={`/hidden.jpg`} alt="Team pic"/>
                  </div>
                    <div className={styles.contentBox}>
                      <h3>Pinpin4<br/><span>Founder</span></h3>
                    </div>
                </div>
                    <ul className={styles.sci}>
                      <li className={styles.firstIcon}>
                        <a href="#"><img src={`/icons/twitter.png`} alt="Social icon"></img></a>
                      </li>
                      <li className={styles.secondIcon}>
                        <a href="#"><img src={`/icons/twitter.png`} alt="Social icon"></img></a>
                      </li>
                    <li className={styles.thirdIcon}>
                      <a href="#"><img src={`/icons/twitter.png`} alt="Social icon"></img></a>
                    </li>
                  </ul>
              </div>
      </SwiperSlide>
      <SwiperSlide>
              <div className={styles.card}>
                <div className={styles.content}>
                  <div className={styles.imgBox}>
                    <img className={styles.hiddenCthulhu} src={`/hidden.jpg`} alt="Team pic"/>
                  </div>
                    <div className={styles.contentBox}>
                      <h3>Pinpin5<br/><span>Founder</span></h3>
                    </div>
                </div>
                    <ul className={styles.sci}>
                      <li className={styles.firstIcon}>
                        <a href="#"><img src={`/icons/twitter.png`} alt="Social icon"></img></a>
                      </li>
                      <li className={styles.secondIcon}>
                        <a href="#"><img src={`/icons/twitter.png`} alt="Social icon"></img></a>
                      </li>
                    <li className={styles.thirdIcon}>
                      <a href="#"><img src={`/icons/twitter.png`} alt="Social icon"></img></a>
                    </li>
                  </ul>
              </div>
      </SwiperSlide>
    </Swiper>
  </section>
  );
};

export default ArtistSection;