import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed inset-0 pointer-events-none">
      <nav className="w-full h-full relative">
        <NavLink
          to="/"
          className="absolute top-5 left-5 p-2 bg-gray-100 text-gray-800 no-underline pointer-events-auto"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="absolute top-5 right-5 p-2 bg-gray-100 text-gray-800 no-underline pointer-events-auto"
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className="absolute bottom-5 left-5 p-2 bg-gray-100 text-gray-800 no-underline pointer-events-auto"
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className="absolute bottom-5 right-5 p-2 bg-gray-100 text-gray-800 no-underline pointer-events-auto"
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
