import {
  FaMedal,
  FaMapMarkerAlt,
  FaRunning,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import "./AthleteCard.css";

function AthleteCard({
  image,
  athleteId,
  name,
  age,
  district,
  sport,
  achievements,
  verified = false,
}) {
  return (
    <div className="athlete-card">

      <img
        src={image}
        alt={name}
        className="athlete-image"
      />

      <div className="athlete-body">

        <div className="athlete-header">

          <h3>{name}</h3>

          {verified && (
            <span className="verified-badge">
              <FaCheckCircle />
              Verified
            </span>
          )}

        </div>

        <p className="athlete-id">
          Athlete ID: {athleteId}
        </p>

        <div className="athlete-info">

          <span>
            <FaRunning />
            {sport}
          </span>

          <span>
            <FaMapMarkerAlt />
            {district}
          </span>

          <span>
            Age {age}
          </span>

        </div>

        <div className="achievement-box">

          <FaMedal />

          <span>
            {achievements} Achievement{achievements !== 1 ? "s" : ""}
          </span>

        </div>

        <button className="profile-btn">
          View Athlete
          <FaArrowRight />
        </button>

      </div>

    </div>
  );
}

export default AthleteCard;
