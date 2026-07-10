import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>Kritto Sports</h2>
          <p>
            Discover. Develop. Compete.
          </p>

          <p className="footer-description">
            Empowering athletes across Bangladesh by connecting talent with
            coaches, academies, scholarships, competitions, and opportunities.
          </p>
        </div>

        <div className="footer-links">
          <h3>Platform</h3>

          <Link to="/">Home</Link>
          <Link to="/register">Athlete Profile</Link>
          <Link to="/opportunities">Opportunities</Link>
          <Link to="/coaches">Coaches</Link>
          <Link to="/academies">Academies</Link>
          <Link to="/online-coaching">Online Coaching</Link>
        </div>

        <div className="footer-links">
          <h3>Resources</h3>

          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/admin">Admin</Link>
        </div>

        <div className="footer-social">
          <h3>Connect</h3>

          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </a>

            <a href="#" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {year} Kritto Sports. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
