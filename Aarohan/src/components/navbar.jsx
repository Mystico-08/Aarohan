import { useState, useEffect } from "react";
import AarohanLogo from "../assets/Aarohan.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="navcontainer">
      <img
        src={AarohanLogo}
        alt="AarohanLogo"
        className="aarohan_image"
      />

      <div className={`hamburger ${menuOpen ? "active" : ""}`}>
        <h2>HOME</h2>
        <h2>ABOUT US</h2>
        <h2>BROCHURE</h2>
        <h2>FAQs</h2>
        <h2>GALLERY</h2>
      </div>

      <div
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;