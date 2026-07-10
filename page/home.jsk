import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import StatsCard from "../components/StatsCard";
import OpportunityCard from "../components/OpportunityCard";
import CoachCard from "../components/CoachCard";
import AcademyCard from "../components/AcademyCard";
import Footer from "../components/Footer";

import {
  FaRunning,
  FaRobot,
  FaTrophy,
  FaUserTie,
  FaSchool,
  FaBullseye,
  FaMapMarkerAlt,
  FaMedal,
} from "react-icons/fa";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      {/* Platform Statistics */}
      <section className="stats-section">
        <h2>Building Bangladesh's Sports Ecosystem</h2>

        <div className="stats-grid">
          <StatsCard
            icon={<FaRunning />}
            number="40+"
            label="Sports"
          />

          <StatsCard
            icon={<FaMapMarkerAlt />}
            number="64"
            label="Districts"
          />

          <StatsCard
            icon={<FaBullseye />}
            number="1"
            label="National Platform"
          />

          <StatsCard
            icon={<FaRobot />}
            number="AI"
            label="Performance Assistant"
          />
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <h2>Everything an Athlete Needs</h2>

        <div className="features-grid">

          <FeatureCard
            icon={<FaRunning />}
            title="Athlete Profiles"
            description="Create your professional digital athlete profile."
          />

          <FeatureCard
            icon={<FaUserTie />}
            title="Expert Coaches"
            description="Connect with certified coaches across Bangladesh."
          />

          <FeatureCard
            icon={<FaSchool />}
            title="Sports Academies"
            description="Discover academies that match your goals."
          />

          <FeatureCard
            icon={<FaTrophy />}
            title="Competitions"
            description="Find tournaments, trials and scholarships."
          />

          <FeatureCard
            icon={<FaRobot />}
            title="KAI Assistant"
            description="Receive AI-powered athletic guidance."
          />

          <FeatureCard
            icon={<FaMedal />}
            title="Performance Tracking"
            description="Track your athletic journey and achievements."
          />

        </div>
      </section>

      {/* Opportunities */}
      <section className="opportunities-section">
        <h2>Featured Opportunities</h2>

        <div className="card-grid">

          <OpportunityCard
            title="National Football Trials"
            organization="Bangladesh Football Federation"
            sport="Football"
            location="Dhaka"
            deadline="15 Aug 2026"
            type="Trials"
            description="Open youth selection."
          />

        </div>
      </section>

      {/* Coaches */}
      <section className="coaches-section">
        <h2>Featured Coaches</h2>

        <div className="card-grid">

          <CoachCard
            image="/coach.jpg"
            name="Abdul Karim"
            sport="Football"
            experience={12}
            location="Dhaka"
            certifications="AFC C License"
            students={180}
            online
            verified
          />

        </div>
      </section>

      {/* Academies */}
      <section className="academies-section">
        <h2>Featured Academies</h2>

        <div className="card-grid">

          <AcademyCard
            image="/academy.jpg"
            name="BKSP"
            location="Savar"
            sports="25 Sports"
            athletes={1200}
            verified
          />

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
