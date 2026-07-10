import "./FeatureCard.css";

function FeatureCard({
  icon,
  title,
  description,
  comingSoon = false,
}) {
  return (
    <div className={`feature-card ${comingSoon ? "coming-soon" : ""}`}>
      <div className="feature-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      {comingSoon && (
        <span className="coming-soon-badge">
          Coming Soon
        </span>
      )}
    </div>
  );
}

export default FeatureCard;
