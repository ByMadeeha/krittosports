import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import OpportunityCard from "../components/OpportunityCard";

import "./Opportunities.css";


function Opportunities() {

  const opportunities = [
    {
      title: "Youth Football Trial",
      organization: "Kritto Football Academy",
      sport: "Football",
      location: "Dhaka",
      type: "Trial",
      deadline: "August 2026",
      description:
        "Open selection trial for young football athletes."
    },

    {
      title: "National Athletics Camp",
      organization: "Bangladesh Athletics",
      sport: "Athletics",
      location: "Savar",
      type: "Training Camp",
      deadline: "September 2026",
      description:
        "Training opportunity for competitive athletes."
    },

    {
      title: "Youth Sports Scholarship",
      organization: "Kritto Sports",
      sport: "Multiple Sports",
      location: "Bangladesh",
      type: "Scholarship",
      deadline: "October 2026",
      description:
        "Support for talented athletes."
    }
  ];


  return (
    <>
      <Navbar />


      <main className="opportunities-page">


        {/* Header */}

        <section className="page-header">

          <h1>
            Discover Opportunities
          </h1>

          <p>
            Find trials, competitions, scholarships, camps,
            and career opportunities across Bangladesh.
          </p>

        </section>



        {/* Search */}

        <SearchBar
          placeholder="Search sports, trials, scholarships..."
        />



        {/* Filters */}

        <FilterBar />



        {/* Opportunity List */}

        <section className="opportunity-list">


          {
            opportunities.map((item, index) => (

              <OpportunityCard
                key={index}
                title={item.title}
                organization={item.organization}
                sport={item.sport}
                location={item.location}
                deadline={item.deadline}
                type={item.type}
                description={item.description}
              />

            ))
          }


        </section>



      </main>


      <Footer />

    </>
  );
}


export default Opportunities;
