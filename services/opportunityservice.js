import { getOpportunities } from "./api";


// Get all opportunities

export const fetchOpportunities = async () => {

  try {

    const response = await getOpportunities();

    return response;


  } catch (error) {

    console.error(
      "Failed to load opportunities:",
      error
    );

    throw error;

  }

};




// Get single opportunity

export const getOpportunity = async (
  opportunityId
) => {

  try {

    const response = await fetch(
      `/api/opportunities/${opportunityId}`
    );


    return await response.json();


  } catch (error) {

    console.error(
      "Failed to load opportunity:",
      error
    );

    throw error;

  }

};




// Create opportunity (academy/organization)

export const createOpportunity = async (
  opportunityData
) => {

  try {

    const response = await fetch(
      "/api/opportunities",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(opportunityData),

      }
    );


    return await response.json();


  } catch (error) {

    console.error(
      "Opportunity creation failed:",
      error
    );

    throw error;

  }

};




// Apply for opportunity (athlete)

export const applyForOpportunity = async (
  opportunityId,
  athleteData
) => {

  try {

    const response = await fetch(
      `/api/opportunities/${opportunityId}/apply`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(athleteData),

      }
    );


    return await response.json();


  } catch (error) {

    console.error(
      "Opportunity application failed:",
      error
    );

    throw error;

  }

};




// Search/filter opportunities

export const searchOpportunities = async (
  filters
) => {

  try {

    const query = new URLSearchParams(
      filters
    ).toString();


    const response = await fetch(
      `/api/opportunities/search?${query}`
    );


    return await response.json();


  } catch (error) {

    console.error(
      "Opportunity search failed:",
      error
    );

    throw error;

  }

};
