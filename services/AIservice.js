import { apiRequest } from "./api";


// Send message to KAI AI Coach

export const askKAI = async (message, athleteData) => {

  try {

    const response = await apiRequest(
      "/ai/chat",
      {
        method: "POST",

        body: JSON.stringify({
          message,
          athleteData,
        }),

      }
    );


    return response;


  } catch (error) {

    console.error(
      "KAI request failed:",
      error
    );

    throw error;

  }

};




// Get personalized training plan

export const getTrainingPlan = async (
  athleteId
) => {

  try {

    const response = await apiRequest(
      `/ai/training-plan/${athleteId}`
    );


    return response;


  } catch (error) {

    console.error(
      "Training plan generation failed:",
      error
    );

    throw error;

  }

};




// Get opportunity recommendations

export const getRecommendations = async (
  athleteId
) => {

  try {

    const response = await apiRequest(
      `/ai/recommendations/${athleteId}`
    );


    return response;


  } catch (error) {

    console.error(
      "AI recommendations failed:",
      error
    );

    throw error;

  }

};




// Analyze athlete performance

export const analyzePerformance = async (
  athleteId,
  performanceData
) => {

  try {

    const response = await apiRequest(
      `/ai/performance-analysis`,
      {
        method: "POST",

        body: JSON.stringify({
          athleteId,
          performanceData,
        }),

      }
    );


    return response;


  } catch (error) {

    console.error(
      "Performance analysis failed:",
      error
    );

    throw error;

  }

};
