import {
  FaMapMarkerAlt,
  FaRunning,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import "./AcademyCard.css";

function AcademyCard({
  image,
  name,
  location,
  sports,
  athletes,
  verified = false,
}) {
  return (
    <div className="academy-card">

      <img
        src={image}
        alt={name}
        className="academy-image"
      />

      <div className="academy-body">

        <div className="academy-header">
          <h3>{name}</h3>

          {verified && (
            <span className="verified-badge">
              <FaCheckCircle />
              Verified
            </span>
          )}
        </div>

        <div className="academy-details">

          <span>
            <FaMapMarkerAlt />
            {location}
          </span>

          <span>
            <FaRunning />
            {sports}
          </span>

          <span>
            <FaUsers />
            {athletes}+ Athletes
          </span>

        </div>

        <button className="academy-button">
          View Academy
          <FaArrowRight />
        </button>

      </div>

    </div>
  );
}

export default AcademyCard;
