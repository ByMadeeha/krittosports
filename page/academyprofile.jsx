import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import StatsCard from "../components/StatsCard";
import Button from "../components/Button";

import {
  FaSchool,
  FaMapMarkerAlt,
  FaUsers,
  FaTrophy,
  FaRunning,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

import "./AcademyProfile.css";


function AcademyProfile() {

  return (
    <>
      <Navbar />

      <main className="academy-profile">


        {/* Academy Header */}

        <section className="academy-header">

          <img
            src="/academy.jpg"
            alt="Academy"
            className="academy-logo"
          />


          <div>

            <h1>
              Kritto Football Academy
              <FaCheckCircle className="verified" />
            </h1>


            <p>
              Football Academy • Dhaka, Bangladesh
            </p>


            <p>
              Academy ID: KS-AC-0014
            </p>


            <Button>
              Apply Now
            </Button>


          </div>

        </section>



        {/* About */}

        <section className="profile-section">

          <h2>
            About Academy
          </h2>


          <p>
            A youth-focused sports academy dedicated to
            developing athletes through professional coaching,
            structured training, and competitive opportunities.
          </p>


        </section>



        {/* Academy Information */}

        <section className="profile-section">


          <h2>
            Academy Information
          </h2>


          <div className="info-grid">


            <div>

              <FaRunning />

              <span>
                Sports Offered
              </span>

              <strong>
                Football, Athletics
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
                Established
              </span>

              <strong>
                2018
              </strong>

            </div>


          </div>


        </section>




        {/* Statistics */}

        <section className="profile-section">


          <h2>
            Academy Overview
          </h2>


          <div className="stats-grid">


            <StatsCard
              icon={<FaUsers />}
              number="250+"
              label="Athletes"
            />


            <StatsCard
              icon={<FaTrophy />}
              number="35"
              label="Achievements"
            />


            <StatsCard
              icon={<FaRunning />}
              number="5"
              label="Sports Programs"
            />


          </div>


        </section>




        {/* Programs */}

        <section className="profile-section">


          <h2>
            Training Programs
          </h2>


          <div className="program-grid">


            <div className="program-card">

              <h3>
                Youth Development
              </h3>

              <p>
                Ages 8-15 • Beginner to intermediate
              </p>

              <Button>
                View Program
              </Button>

            </div>



            <div className="program-card">

              <h3>
                Competitive Training
              </h3>

              <p>
                Tournament preparation and advanced skills.
              </p>

              <Button>
                View Program
              </Button>

            </div>


          </div>


        </section>




        {/* Coaches */}

        <section className="profile-section">


          <h2>
            Academy Coaches
          </h2>


          <div className="coach-preview">

            <p>
              👨‍🏫 Rahim Ahmed — Football Coach
            </p>

            <p>
              👨‍🏫 Hasan Karim — Fitness Coach
            </p>

          </div>


        </section>




        {/* Facilities */}

        <section className="profile-section">


          <h2>
            Facilities
          </h2>


          <div className="facility-list">

            <span>
              Training Ground
            </span>

            <span>
              Fitness Area
            </span>

            <span>
              Video Analysis
            </span>

            <span>
              Equipment
            </span>

          </div>


        </section>



        {/* Admissions */}

        <section className="profile-section">


          <h2>
            Admissions
          </h2>


          <div className="admission-card">

            <p>
              New athlete registrations are open.
            </p>


            <Button>
              Apply to Academy
            </Button>


          </div>


        </section>



      </main>


      <Footer />

    </>
  );
}


export default AcademyProfile;
