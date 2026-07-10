import { FaArrowRight } from "react-icons/fa";
import "./DashboardCard.css";

function DashboardCard({
  icon,
  title,
  value,
  description,
  color = "#0F7B45",
  onClick,
}) {
  return (
    <div
      className="dashboard-card"
      onClick={onClick}
      style={{ borderTop: `5px solid ${color}` }}
    >
      <div className="dashboard-icon" style={{ color }}>
        {icon}
      </div>

      <div className="dashboard-content">
        <h3>{title}</h3>

        {value && (
          <h2 className="dashboard-value">
            {value}
          </h2>
        )}

        <p>{description}</p>
      </div>

      <FaArrowRight className="dashboard-arrow" />
    </div>
  );
}

export default DashboardCard;
