import { registerAcademy } from "./api";


// Create academy account

export const createAcademy = async (academyData) => {

  try {

    const response = await registerAcademy(
      academyData
    );

    return response;


  } catch (error) {

    console.error(
      "Academy registration failed:",
      error
    );

    throw error;

  }

};




// Get academy profile

export const getAcademyProfile = async (academyId) => {

  try {

    const response = await fetch(
      `/api/academies/${academyId}`
    );


    return await response.json();


  } catch (error) {

    console.error(
      "Failed to load academy profile:",
      error
    );

    throw error;

  }

};




// Update academy profile

export const updateAcademyProfile = async (
  academyId,
  academyData
) => {

  try {

    const response = await fetch(
      `/api/academies/${academyId}`,
      {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(academyData),

      }
    );


    return await response.json();


  } catch (error) {

    console.error(
      "Academy profile update failed:",
      error
    );

    throw error;

  }

};




// Add academy program

export const addTrainingProgram = async (
  academyId,
  programData
) => {

  try {

    const response = await fetch(
      `/api/academies/${academyId}/programs`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(programData),

      }
    );


    return await response.json();


  } catch (error) {

    console.error(
      "Training program creation failed:",
      error
    );

    throw error;

  }

};




// Get academy athletes

export const getAcademyAthletes = async (
  academyId
) => {

  try {

    const response = await fetch(
      `/api/academies/${academyId}/athletes`
    );


    return await response.json();


  } catch (error) {

    console.error(
      "Failed to load academy athletes:",
      error
    );

    throw error;

  }

};




// Apply to academy

export const applyToAcademy = async (
  academyId,
  athleteData
) => {

  try {

    const response = await fetch(
      `/api/academies/${academyId}/applications`,
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
      "Academy application failed:",
      error
    );

    throw error;

  }

};
