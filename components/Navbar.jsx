import { useAddress } from "@thirdweb-dev/react";
import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import Link from 'next/link'
import LoginButton from "../components/LoginButton";
import ViewAddress from "../components/ViewAddress";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  const address = useAddress();
  var loginButton;

  if (!address) {
    loginButton = <LoginButton />;
  } else {
    loginButton = <ViewAddress />;
  }

  return (
    <header>
      <img src="https://zupimages.net/up/22/34/h5za.png" alt="logo" />
      <nav ref={navRef}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/mint">
        <a>Mint</a>
      </Link>
      <Link href="/stake">
        <a>Staking</a>
      </Link>
        {loginButton}
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