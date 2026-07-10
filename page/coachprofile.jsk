import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import StatsCard from "../components/StatsCard";
import Button from "../components/Button";

import {
  FaUserTie,
  FaTrophy,
  FaUsers,
  FaMapMarkerAlt,
  FaCertificate,
  FaStar,
} from "react-icons/fa";

import "./CoachProfile.css";


function CoachProfile() {

  return (
    <>
      <Navbar />

      <main className="coach-profile">


        {/* Profile Header */}

        <section className="coach-header">

          <img
            src="/coach.jpg"
            alt="Coach"
            className="profile-image"
          />


          <div>

            <h1>
              Rahim Ahmed
              <span className="verified">
                ✓
              </span>
            </h1>


            <p>
              Football Coach • Dhaka, Bangladesh
            </p>


            <p>
              Coach ID: KS-C-0082
            </p>


            <Button>
              Contact Coach
            </Button>


          </div>

        </section>



        {/* About */}

        <section className="profile-section">

          <h2>
            Coaching Philosophy
          </h2>


          <p>
            Dedicated football coach focused on developing
            technical skills, discipline, and athlete confidence.
          </p>

        </section>



        {/* Coaching Information */}

        <section className="profile-section">


          <h2>
            Coaching Profile
          </h2>


          <div className="info-grid">


            <div>
              <FaUserTie />

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
              <FaCertificate />

              <span>
                Certification
              </span>

              <strong>
                AFC C License
              </strong>

            </div>


          </div>


        </section>



        {/* Stats */}

        <section className="profile-section">


          <h2>
            Coaching Experience
          </h2>


          <div className="stats-grid">


            <StatsCard
              icon={<FaUsers />}
              number="120+"
              label="Athletes Trained"
            />


            <StatsCard
              icon={<FaTrophy />}
              number="15"
              label="Achievements"
            />


            <StatsCard
              icon={<FaStar />}
              number="4.9"
              label="Rating"
            />


          </div>


        </section>



        {/* Experience */}

        <section className="profile-section">


          <h2>
            Experience
          </h2>


          <div className="timeline-card">

            <h3>
              Youth Football Coach
            </h3>

            <p>
              2020 - Present
            </p>

            <p>
              Trained youth athletes and prepared players
              for competitive tournaments.
            </p>

          </div>


        </section>



        {/* Training Programs */}

        <section className="profile-section">


          <h2>
            Training Programs
          </h2>


          <div className="program-card">

            <h3>
              Football Development Program
            </h3>

            <p>
              Beginner to advanced football training.
            </p>

            <Button>
              Join Program
            </Button>

          </div>


        </section>



        {/* Online Coaching */}

        <section className="profile-section">


          <h2>
            Online Coaching
          </h2>


          <div className="online-card">

            <p>
              Available for online training sessions.
            </p>


            <Button>
              Book Session
            </Button>


          </div>


        </section>



        {/* Reviews */}

        <section className="profile-section">


          <h2>
            Athlete Reviews
          </h2>


          <div className="review-card">

            ⭐⭐⭐⭐⭐

            <p>
              "Great coach who improved my confidence and skills."
            </p>

          </div>


        </section>



      </main>


      <Footer />

    </>
  );
}


export default CoachProfile;
