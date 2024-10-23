import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div>
        <h1 id="logo" className="text-2xl">
          <Link to="/">Michael Gauthier</Link>
        </h1>
      </div>
      <nav className="justify-around w-1/2 text-2xl">
        <button className="px-4">
          <Link to="/about">About</Link>
        </button>
        <button className="px-4">
          <Link to="/resume">Resume</Link>
        </button>
        <button className="px-4">
          <Link to="/projects">Projects</Link>
        </button>
        <button className="px-4">
          <Link to="/contact">Contact</Link>
        </button>
      </nav>
    </>
  );
}
