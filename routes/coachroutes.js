import express from "express";

import {
  registerCoach,
  getCoachProfile,
  updateCoachProfile,
  addCertification,
  getCoachAthletes
} from "../controllers/coachController.js";


const router = express.Router();



// Register coach

router.post(
  "/register",
  registerCoach
);



// Get coach profile

router.get(
  "/:id",
  getCoachProfile
);



// Update coach profile

router.put(
  "/:id",
  updateCoachProfile
);



// Add certification

router.post(
  "/:id/certifications",
  addCertification
);



// Get athletes trained by coach

router.get(
  "/:id/athletes",
  getCoachAthletes
);



export default router;
