import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaRunning, FaUserTie, FaSchool, FaTrophy } from "react-icons/fa";
import "./Register.css";

function Register() {
  return (
    <>
      <Navbar />

      <section className="register">

        <div className="register-header">
          <h1>Join Kritto Sports</h1>

          <p>
            Choose how you'd like to join Bangladesh's sports ecosystem.
          </p>
        </div>

        <div className="role-grid">

          <Link to="/register/athlete" className="role-card">
            <FaRunning className="role-icon" />
            <h2>Athlete</h2>
            <p>
              Build your official athlete profile and discover opportunities.
            </p>
          </Link>

          <Link to="/register/coach" className="role-card">
            <FaUserTie className="role-icon" />
            <h2>Coach</h2>
            <p>
              Create your coaching profile and mentor athletes.
            </p>
          </Link>

          <Link to="/register/academy" className="role-card">
            <FaSchool className="role-icon" />
            <h2>Academy</h2>
            <p>
              Showcase your academy and recruit talented athletes.
            </p>
          </Link>

          <Link to="/register/organization" className="role-card">
            <FaTrophy className="role-icon" />
            <h2>Organization</h2>
            <p>
              Publish competitions, scholarships, camps and trials.
            </p>
          </Link>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Register;
