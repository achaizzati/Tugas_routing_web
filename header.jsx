import { Link } from "react-router-dom";

export default function NavComponen() {
  return (
    <nav className="navbar">
      <div className="logo">
        ACHA<span>.</span>
      </div>

      <div className="nav-menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/education">Education</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}