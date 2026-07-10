import express from "express";

import {
  registerAthlete,
  getAthleteProfile,
  updateAthleteProfile,
  addAchievement
} from "../controllers/athleteController.js";


const router = express.Router();



// Register athlete

router.post(
  "/register",
  registerAthlete
);



// Get athlete profile

router.get(
  "/:id",
  getAthleteProfile
);



// Update athlete profile

router.put(
  "/:id",
  updateAthleteProfile
);



// Add achievement

router.post(
  "/:id/achievements",
  addAchievement
);



export default router;
