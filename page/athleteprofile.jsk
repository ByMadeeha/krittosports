import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import AthleteCard from "../components/AthleteCard";
import StatsCard from "../components/StatsCard";
import Button from "../components/Button";

import {
  FaMedal,
  FaRunning,
  FaTrophy,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

import "./AthleteProfile.css";


function AthleteProfile() {

  return (
    <>
      <Navbar />

      <main className="athlete-profile">

        {/* Profile Header */}

        <section className="profile-header">

          <img
            src="/athlete.jpg"
            alt="Athlete"
            className="profile-image"
          />

          <div>

            <h1>
              Quris Q.
            </h1>

            <p>
              Football Athlete • Dhaka, Bangladesh
            </p>

            <p className="athlete-id">
              Athlete ID: KS-A-20481
            </p>


            <Button>
              Contact Athlete
            </Button>

          </div>

        </section>


        {/* About */}

        <section className="profile-section">

          <h2>
            About
          </h2>

          <p>
            Passionate football athlete focused on improving
            skills, performance, and competing at higher levels.
          </p>

        </section>



        {/* Athletic Information */}

        <section className="profile-section">

          <h2>
            Athletic Profile
          </h2>


          <div className="info-grid">

            <div>
              <FaRunning />
              <span>
                Sport
              </span>
              <strong>
                Football
              </strong>
            </div>


            <div>
              <FaMapMarkerAlt />
              <span>
                Location
              </span>
              <strong>
                Dhaka
              </strong>
            </div>


            <div>
              <FaCalendarAlt />
              <span>
                Experience
              </span>
              <strong>
                3 Years
              </strong>
            </div>

          </div>

        </section>



        {/* Statistics */}

        <section className="profile-section">

          <h2>
            Performance Overview
          </h2>


          <div className="stats-grid">

            <StatsCard
              icon={<FaTrophy />}
              number="5"
              label="Achievements"
            />


            <StatsCard
              icon={<FaMedal />}
              number="3"
              label="Competitions"
            />


            <StatsCard
              icon={<FaRunning />}
              number="12"
              label="Skills"
            />

          </div>

        </section>



        {/* Achievements */}

        <section className="profile-section">

          <h2>
            Achievements
          </h2>


          <div className="achievement-list">

            <div className="achievement-card">

              <FaMedal />

              <div>
                <h3>
                  District Football Championship
                </h3>

                <p>
                  2026 • Runner Up
                </p>
              </div>

            </div>


          </div>

        </section>



        {/* Skills */}

        <section className="profile-section">

          <h2>
            Athletic Skills
          </h2>


          <div className="skills">

            <span>
              Ball Control
            </span>

            <span>
              Passing
            </span>

            <span>
              Speed
            </span>

            <span>
              Endurance
            </span>

          </div>


        </section>



        {/* Media */}

        <section className="profile-section">

          <h2>
            Performance Media
          </h2>

          <div className="video-placeholder">

            Upload match videos and training clips

          </div>

        </section>


      </main>


      <Footer />

    </>
  );
}


export default AthleteProfile;
