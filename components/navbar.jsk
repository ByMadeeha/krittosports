import { Link } from "react-router-dom";
import { FaRunning } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo">
          <FaRunning className="logo-icon" />
          <span>Kritto Sports</span>
        </Link>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/opportunities">Opportunities</Link></li>
          <li><Link to="/coaches">Coaches</Link></li>
          <li><Link to="/academies">Academies</Link></li>
          <li><Link to="/online-coaching">Online Coaching</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        <div className="nav-buttons">
          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/register" className="register-btn">
            Join Now
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
