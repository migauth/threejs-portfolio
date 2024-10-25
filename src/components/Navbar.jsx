import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="gap-4 flex flex-col text-4xl items-start sm:flex-row">
        <h1 id="logo" className="pr-4">
          <Link to="/">Michael Gauthier</Link>
        </h1>
        <button className="pr-4 hidden sm:visible">
          <Link to="/about">About</Link>
        </button>
        <button className="pr-4">
          <Link to="/resume">CV</Link>
        </button>
        <button className="pr-4">
          <Link to="/contact">Contact</Link>
        </button>
      </nav>
    </>
  );
}
