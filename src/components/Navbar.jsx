import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-around w-1/2 text-2xl">
      <button className="px-4 py-2">
      <Link to="/">Home</Link>
      </button>
      <button className="px-4 py-2">
        <Link to="/about">About</Link>
      </button>
      <button className="px-4 py-2">
        <Link to="/resume">Resume</Link>
      </button>
      <button className="px-4 py-2">
        <Link to="/projects">Projects</Link>
      </button>
    </nav>
  );
}
