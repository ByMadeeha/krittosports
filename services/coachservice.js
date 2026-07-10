import { registerCoach } from "./api";


// Create coach account

export const createCoach = async (coachData) => {

  try {

    const response = await registerCoach(
      coachData
    );

    return response;


  } catch (error) {

    console.error(
      "Coach registration failed:",
      error
    );

    throw error;

  }

};




// Get coach profile

export const getCoachProfile = async (coachId) => {

  try {

    const response = await fetch(
      `/api/coaches/${coachId}`
    );


    return await response.json();


  } catch (error) {

    console.error(
      "Failed to load coach profile:",
      error
    );

    throw error;

  }

};




// Update coach profile

export const updateCoachProfile = async (
  coachId,
  profileData
) => {

  try {

    const response = await fetch(
      `/api/coaches/${coachId}`,
      {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(profileData),

      }
    );


    return await response.json();


  } catch (error) {

    console.error(
      "Coach profile update failed:",
      error
    );

    throw error;

  }

};




// Add coaching certification

export const addCertification = async (
  coachId,
  certification
) => {

  try {

    const response = await fetch(
      `/api/coaches/${coachId}/certifications`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(certification),

      }
    );


    return await response.json();


  } catch (error) {

    console.error(
      "Certification upload failed:",
      error
    );

    throw error;

  }

};




// Get athletes trained by coach

export const getCoachAthletes = async (coachId) => {

  try {

    const response = await fetch(
      `/api/coaches/${coachId}/athletes`
    );


    return await response.json();


  } catch (error) {

    console.error(
      "Failed to load coach athletes:",
      error
    );

    throw error;

  }

};
