import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </div>
    </nav>
  )
};
