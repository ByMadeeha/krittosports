import express from "express";

import {
  getOpportunities,
  getOpportunity,
  createOpportunity,
  applyForOpportunity,
  searchOpportunities
} from "../controllers/opportunityController.js";


const router = express.Router();



// Get all opportunities

router.get(
  "/",
  getOpportunities
);



// Get single opportunity

router.get(
  "/:id",
  getOpportunity
);



// Create opportunity

router.post(
  "/",
  createOpportunity
);



// Apply for opportunity

router.post(
  "/:id/apply",
  applyForOpportunity
);



// Search/filter opportunities

router.get(
  "/search",
  searchOpportunities
);



export default router;
