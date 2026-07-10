import express from "express";

import {
  chatWithAI,
  generateTrainingPlan,
  getRecommendations,
  analyzePerformance
} from "../controllers/aiController.js";


const router = express.Router();



// Chat with KAI AI Coach

router.post(
  "/chat",
  chatWithAI
);



// Generate personalized training plan

router.get(
  "/training-plan/:athleteId",
  generateTrainingPlan
);



// Get opportunity recommendations

router.get(
  "/recommendations/:athleteId",
  getRecommendations
);



// Analyze athlete performance

router.post(
  "/performance-analysis",
  analyzePerformance
);



export default router;
