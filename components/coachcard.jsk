import {
  FaMapMarkerAlt,
  FaAward,
  FaVideo,
  FaUserGraduate,
} from "react-icons/fa";
import "./CoachCard.css";

function CoachCard({
  name,
  sport,
  experience,
  location,
  certifications,
  online = false,
  image,
}) {
  return (
    <div className="coach-card">

      <img
        src={image}
        alt={name}
        className="coach-image"
      />

      <div className="coach-content">

        <h3>{name}</h3>

        <p className="coach-sport">{sport} Coach</p>

        <div className="coach-info">

          <span>
            <FaAward />
            {experience} Years
          </span>

          <span>
            <FaMapMarkerAlt />
            {location}
          </span>

          <span>
            <FaUserGraduate />
            {certifications}
          </span>

        </div>

        {online && (
          <div className="online-badge">
            <FaVideo />
            Online Coaching Available
          </div>
        )}

        <button className="coach-btn">
          View Profile
        </button>

      </div>

    </div>
  );
}

export default CoachCard;
