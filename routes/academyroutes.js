import express from "express";

import {
  registerAcademy,
  getAcademyProfile,
  updateAcademyProfile,
  addTrainingProgram,
  getAcademyAthletes,
  applyToAcademy
} from "../controllers/academyController.js";


const router = express.Router();



// Register academy

router.post(
  "/register",
  registerAcademy
);



// Get academy profile

router.get(
  "/:id",
  getAcademyProfile
);



// Update academy profile

router.put(
  "/:id",
  updateAcademyProfile
);



// Add training program

router.post(
  "/:id/programs",
  addTrainingProgram
);



// Get academy athletes

router.get(
  "/:id/athletes",
  getAcademyAthletes
);



// Athlete applies to academy

router.post(
  "/:id/applications",
  applyToAcademy
);



export default router;
