import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header>
      <img src="https://zupimages.net/up/22/34/h5za.png" alt="logo" />
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/mint">Mint</a>
        <a href="/stake">Staking</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes/>
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
  );
};

export default Navbar;