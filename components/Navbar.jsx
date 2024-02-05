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
      <div className="HeaderBox">
      <Link href="/"><img className="NavbarLogo" src="https://zupimages.net/up/22/34/h5za.png" alt="logo" /></Link>
      <nav ref={navRef}>
      <div className="NavbarLinkBox">
      <Link href="/">
        <a onClick={showNavbar}>Home</a>
      </Link>
      <Link href="/mint">
        <a onClick={showNavbar}>Mint</a>
      </Link>
      </div>
      <div className="HiddenIconsBox">
      <Link href="/">
        <a><img className="NavbarIcons" src={`/icons/discord.png`}/></a>
      </Link>
      <Link href="/">
        <a><img className="NavbarIcons" src={`/icons/opensea.png`}/></a>
      </Link>
      <Link href="/">
        <a><img className="NavbarIcons" src={`/icons/social.png`}/></a>
      </Link>
      </div>
      <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes/>
      </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars/>
      </button>
      <div className="NavbarIconsBox">
      <Link href="/">
        <a><img className="NavbarIcons" src={`/icons/discord.png`}/></a>
      </Link>
      <Link href="/">
        <a><img className="NavbarIcons" src={`/icons/opensea.png`}/></a>
      </Link>
      <Link href="/">
        <a><img className="NavbarIcons" src={`/icons/social.png`}/></a>
      </Link>
      </div>
      </div>
    </header>
  );
};

export default Navbar;