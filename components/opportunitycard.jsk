import { FaMapMarkerAlt, FaCalendarAlt, FaRunning } from "react-icons/fa";
import "./OpportunityCard.css";

function OpportunityCard({
  title,
  organization,
  sport,
  location,
  deadline,
  type,
  description,
  link = "#",
}) {
  return (
    <div className="opportunity-card">

      <div className="opportunity-header">
        <span className="opportunity-type">{type}</span>
        <span className="opportunity-sport">
          <FaRunning />
          {sport}
        </span>
      </div>

      <h3>{title}</h3>

      <p className="organization">{organization}</p>

      <p className="description">
        {description}
      </p>

      <div className="opportunity-details">

        <div className="detail">
          <FaMapMarkerAlt />
          <span>{location}</span>
        </div>

        <div className="detail">
          <FaCalendarAlt />
          <span>{deadline}</span>
        </div>

      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="apply-btn"
      >
        Apply Now
      </a>

    </div>
  );
}

export default OpportunityCard;
