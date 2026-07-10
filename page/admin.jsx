import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import DashboardCard from "../components/DashboardCard";
import StatsCard from "../components/StatsCard";

import {
  FaUsers,
  FaUserTie,
  FaSchool,
  FaTrophy,
  FaCheckCircle,
  FaFlag,
  FaChartLine,
} from "react-icons/fa";

import "./Admin.css";


function Admin() {

  return (
    <>
      <Navbar />

      <main className="admin-dashboard">


        {/* Header */}

        <section className="admin-header">

          <h1>
            Kritto Sports Admin Center
          </h1>

          <p>
            Manage, verify, and grow the sports ecosystem.
          </p>

        </section>



        {/* Platform Stats */}

        <section>

          <h2>
            Platform Overview
          </h2>


          <div className="stats-grid">

            <StatsCard
              icon={<FaUsers />}
              number="12,450"
              label="Athletes"
            />

            <StatsCard
              icon={<FaUserTie />}
              number="350"
              label="Coaches"
            />

            <StatsCard
              icon={<FaSchool />}
              number="85"
              label="Academies"
            />

            <StatsCard
              icon={<FaTrophy />}
              number="240"
              label="Opportunities"
            />

          </div>


        </section>




        {/* Management */}

        <section>


          <h2>
            Management
          </h2>


          <div className="dashboard-grid">


            <DashboardCard
              icon={<FaCheckCircle />}
              title="Verify Profiles"
              description="Review coaches, academies and organizations."
            />


            <DashboardCard
              icon={<FaUsers />}
              title="Manage Athletes"
              description="View and manage athlete profiles."
            />


            <DashboardCard
              icon={<FaUserTie />}
              title="Manage Coaches"
              description="Approve and monitor coaches."
            />


            <DashboardCard
              icon={<FaSchool />}
              title="Manage Academies"
              description="Review academy listings."
            />


            <DashboardCard
              icon={<FaTrophy />}
              title="Opportunities"
              description="Approve competitions and trials."
            />


            <DashboardCard
              icon={<FaFlag />}
              title="Reports"
              description="Handle user reports and issues."
            />


          </div>


        </section>




        {/* Verification Queue */}

        <section>


          <h2>
            Pending Verification
          </h2>


          <div className="admin-list">


            <div className="admin-item">

              <FaUserTie />

              <span>
                Coach Application - Rahim Ahmed
              </span>

              <button>
                Review
              </button>

            </div>



            <div className="admin-item">

              <FaSchool />

              <span>
                Academy Application - Dhaka Sports Club
              </span>

              <button>
                Review
              </button>

            </div>


          </div>


        </section>




        {/* Analytics */}

        <section>


          <DashboardCard
            icon={<FaChartLine />}
            title="Analytics"
            description="Track growth, engagement and platform impact."
          />


        </section>


      </main>


      <Footer />

    </>
  );
}


export default Admin;
