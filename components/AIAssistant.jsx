import {
  FaRobot,
  FaRunning,
  FaBullseye,
  FaArrowRight,
} from "react-icons/fa";
import "./AIAssistant.css";

function AIAssistant({
  athlete = "Athlete",
  sport = "Football",
  recommendation = "Practice passing drills three times a week.",
  opportunity = "National Youth Football Trials",
}) {
  return (
    <section className="ai-assistant">

      <div className="ai-header">
        <FaRobot className="ai-icon" />

        <div>
          <h2>KAI</h2>
          <p>Kritto Athletic Intelligence</p>
        </div>
      </div>

      <div className="ai-card">

        <h3>Hello, {athlete}! 👋</h3>

        <p>
          Based on your <strong>{sport}</strong> profile, here are today's
          recommendations.
        </p>

        <div className="ai-section">

          <h4>
            <FaRunning />
            Training Focus
          </h4>

          <p>{recommendation}</p>

        </div>

        <div className="ai-section">

          <h4>
            <FaBullseye />
            Suggested Opportunity
          </h4>

          <p>{opportunity}</p>

        </div>

        <button className="ai-button">
          Ask KAI
          <FaArrowRight />
        </button>

      </div>

    </section>
  );
}

export default AIAssistant;
