import { Link } from "react-router-dom";
import { FaArrowRight, FaPlayCircle } from "react-icons/fa";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <span className="hero-badge">
          🇧🇩 Empowering Bangladesh's Next Generation of Athletes
        </span>

        <h1>
          Every Athlete
          <br />
          Deserves an Opportunity.
        </h1>

        <p>
          Kritto Sports is a digital athlete ecosystem where young athletes
          create professional sports profiles, discover competitions,
          scholarships, academies, and coaches while building their athletic
          journey from anywhere in Bangladesh.
        </p>

        <div className="hero-buttons">
          <Link to="/register" className="primary-btn">
            Create Athlete Profile
            <FaArrowRight />
          </Link>

          <Link to="/opportunities" className="secondary-btn">
            <FaPlayCircle />
            Explore Opportunities
          </Link>
        </div>

        <div className="hero-stats">

          <div className="stat-card">
            <h2>100+</h2>
            <p>Sports Opportunities</p>
          </div>

          <div className="stat-card">
            <h2>64</h2>
            <p>District Coverage</p>
          </div>

          <div className="stat-card">
            <h2>1</h2>
            <p>National Athlete Platform</p>
          </div>

        </div>

      </div>

      <div className="hero-image">

        <div className="hero-card">
          <h3>Kritto Athlete Profile</h3>

          <p><strong>ID:</strong> KS-2026-00152</p>
          <p><strong>Sport:</strong> Football</p>
          <p><strong>District:</strong> Dhaka</p>
          <p><strong>Status:</strong> Active Athlete</p>

          <button>View Profile</button>
        </div>

      </div>
    </section>
  );
}

export default Hero;
