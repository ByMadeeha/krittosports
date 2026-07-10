import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import athleteRoutes from "./routes/athleteRoutes.js";
import coachRoutes from "./routes/coachRoutes.js";
import academyRoutes from "./routes/academyRoutes.js";
import opportunityRoutes from "./routes/opportunityRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";

const app = express();


// Middleware

app.use(cors());

app.use(express.json());


// API Routes

app.use("/api/auth", authRoutes);

app.use("/api/athletes", athleteRoutes);

app.use("/api/coaches", coachRoutes);

app.use("/api/academies", academyRoutes);

app.use("/api/opportunities", opportunityRoutes);

app.use("/api/ai", aiRoutes);


// Test API route

app.get("/", (req, res) => {

  res.json({
    message: "Kritto Sports API is running 🚀"
  });

});



export default app;
