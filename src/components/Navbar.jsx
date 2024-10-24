import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="justify-around w-1/2 text-2xl sm:flex-col">
        <h1 id="logo" className="px-4">
          <Link to="/">Michael Gauthier</Link>
        </h1>
        <button className="px-4">
          <Link to="/about">About</Link>
        </button>
        <button className="px-4">
          <Link to="/resume">CV</Link>
        </button>
        <button className="px-4">
          <Link to="/contact">Contact</Link>
        </button>
      </nav>
    </>
  );
}
