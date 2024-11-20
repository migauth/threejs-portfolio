import { useState, useEffect } from "react";
import "./Navbar.css"

export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // For hiding navbar bg
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar fixed gap-4 flex flex-col text-4xl w-full z-10  p-4 items-start opacity-95 sm:flex-row ${isScrolled ? "scrolled" : "at-top"}`}>
        <h1 id="logo" className="pr-4 text-purple-200 hover:text-white">
          <a href="#" onClick={scrollToTop}>Michael Gauthier</a>
        </h1>
        <button className="pr-4 text-purple-200 hover:text-white hidden sm:block">
          <a href="#about">About</a>
        </button>
        <button className="pr-4 text-purple-200 hover:text-white hidden sm:block">
          <a href="#cv">CV</a>
        </button>
        <button className="pr-4 text-purple-200 hover:text-white hidden sm:block">
          <a href="#contact">Contact</a>
        </button>
      </nav>
    </>
  );
}
