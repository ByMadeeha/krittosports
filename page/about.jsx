import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaRunning,
  FaUsers,
  FaRobot,
  FaTrophy,
  FaGlobeAsia,
} from "react-icons/fa";

import "./About.css";


function About() {

  return (
    <>
      <Navbar />


      <main className="about-page">


        {/* Hero */}

        <section className="about-hero">

          <h1>
            Building the Future of Sports in Bangladesh
          </h1>


          <p>
            Kritto Sports is creating a connected ecosystem where
            athletes, coaches, academies, and organizations come
            together to discover opportunities and develop talent.
          </p>


        </section>



        {/* Mission */}

        <section className="about-section">


          <h2>
            Our Mission
          </h2>


          <p>
            Every athlete deserves access to opportunity,
            guidance, and recognition regardless of where they
            come from. Kritto Sports aims to bridge the gap
            between talent and opportunity by creating a
            national digital sports ecosystem.
          </p>


        </section>




        {/* Vision Cards */}

        <section className="about-grid">


          <div className="about-card">

            <FaRunning />

            <h3>
              Empower Athletes
            </h3>

            <p>
              Give every athlete a professional identity and
              pathway to growth.
            </p>

          </div>




          <div className="about-card">

            <FaUsers />

            <h3>
              Connect Communities
            </h3>

            <p>
              Bring athletes, coaches, academies, and
              organizations together.
            </p>

          </div>





          <div className="about-card">

            <FaRobot />

            <h3>
              Intelligent Development
            </h3>

            <p>
              Use AI to provide personalized guidance and
              performance insights.
            </p>

          </div>





          <div className="about-card">

            <FaTrophy />

            <h3>
              Create Opportunities
            </h3>

            <p>
              Make competitions, trials, scholarships, and
              pathways easier to discover.
            </p>

          </div>


        </section>




        {/* Ecosystem */}

        <section className="about-section">


          <h2>
            One Connected Sports Ecosystem
          </h2>


          <div className="ecosystem">


            <div>
              🏃 Athletes
            </div>

            <div>
              👨‍🏫 Coaches
            </div>

            <div>
              🏟 Academies
            </div>

            <div>
              🏆 Organizations
            </div>


          </div>


        </section>




        {/* Bangladesh Focus */}

        <section className="about-section">


          <FaGlobeAsia />


          <h2>
            Built for Bangladesh
          </h2>


          <p>
            From cities to rural communities, Kritto Sports
            aims to make sports opportunities more accessible
            and create a stronger future for athletes.
          </p>


        </section>




      </main>


      <Footer />

    </>
  );
}


export default About;
