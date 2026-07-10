import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import AthleteCard from "../components/AthleteCard";
import DashboardCard from "../components/DashboardCard";
import AIAssistant from "../components/AIAssistant";
import OpportunityCard from "../components/OpportunityCard";
import CoachCard from "../components/CoachCard";
import AcademyCard from "../components/AcademyCard";

import {
  FaTrophy,
  FaFileAlt,
  FaEye,
  FaUserTie,
  FaSearch,
  FaUpload,
} from "react-icons/fa";

import "./Dashboard.css";


function Dashboard() {

  return (
    <>
      <Navbar />

      <main className="dashboard">

        {/* Welcome */}
        <section className="dashboard-welcome">

          <h1>
            Welcome back, Madeeha 👋
          </h1>

          <p>
            Continue building your athletic journey with Kritto Sports.
          </p>

        </section>


        {/* Athlete Profile */}
        <section className="dashboard-profile">

          <AthleteCard
            image="/athlete.jpg"
            athleteId="KS-A-20481"
            name="Madeeha"
            age={14}
            district="Dhaka"
            sport="Football"
            achievements={5}
            verified={false}
          />

        </section>


        {/* Quick Actions */}
        <section className="quick-actions">

          <h2>
            Quick Actions
          </h2>

          <div className="dashboard-grid">

            <DashboardCard
              icon={<FaFileAlt />}
              title="Complete Profile"
              description="Add achievements and skills."
            />

            <DashboardCard
              icon={<FaSearch />}
              title="Find Opportunities"
              description="Explore trials and competitions."
            />

            <DashboardCard
              icon={<FaUserTie />}
              title="Find Coaches"
              description="Connect with trainers."
            />

            <DashboardCard
              icon={<FaUpload />}
              title="Upload Achievement"
              description="Add certificates and medals."
            />

          </div>

        </section>


        {/* Statistics */}
        <section>

          <h2>
            Your Progress
          </h2>

          <div className="dashboard-grid">

            <DashboardCard
              icon={<FaTrophy />}
              title="Achievements"
              value="5"
              description="Awards earned"
            />

            <DashboardCard
              icon={<FaEye />}
              title="Profile Views"
              value="128"
              description="People viewed your profile"
            />

          </div>

        </section>


        {/* AI */}
        <section>

          <AIAssistant
            athlete="Madeeha"
            sport="Football"
            recommendation="Improve endurance and passing accuracy."
            opportunity="Youth Football Trials"
          />

        </section>


        {/* Opportunities */}
        <section>

          <h2>
            Recommended Opportunities
          </h2>

          <OpportunityCard
            title="Youth Football Trials"
            organization="Kritto Sports"
            sport="Football"
            location="Dhaka"
            deadline="August 2026"
            type="Trial"
            description="Find your next opportunity."
          />

        </section>


        {/* Coaches */}
        <section>

          <h2>
            Recommended Coaches
          </h2>

          <CoachCard
            image="/coach.jpg"
            name="Rahim Ahmed"
            sport="Football"
            experience={10}
            location="Dhaka"
            certifications="AFC Certified"
            students={120}
            verified
          />

        </section>


        {/* Academies */}
        <section>

          <h2>
            Nearby Academies
          </h2>

          <AcademyCard
            image="/academy.jpg"
            name="BKSP"
            location="Savar"
            sports="Multiple Sports"
            athletes={1200}
            verified
          />

        </section>


      </main>

      <Footer />

    </>
  );
}

export default Dashboard;
