import { 
  registerAthlete,
} from "./api";


// Create athlete account

export const createAthlete = async (athleteData) => {

  try {

    const response = await registerAthlete(
      athleteData
    );

    return response;

  } catch (error) {

    console.error(
      "Athlete registration failed:",
      error
    );

    throw error;

  }

};



// Get athlete profile

export const getAthleteProfile = async (athleteId) => {

  try {

    const response = await fetch(
      `/api/athletes/${athleteId}`
    );


    return await response.json();


  } catch (error) {

    console.error(
      "Failed to load athlete profile:",
      error
    );

    throw error;

  }

};




// Update athlete profile

export const updateAthleteProfile = async (
  athleteId,
  profileData
) => {

  try {

    const response = await fetch(
      `/api/athletes/${athleteId}`,
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
      "Profile update failed:",
      error
    );

    throw error;

  }

};




// Upload achievement

export const addAchievement = async (
  athleteId,
  achievement
) => {

  try {

    const response = await fetch(
      `/api/athletes/${athleteId}/achievements`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(achievement),

      }
    );


    return await response.json();


  } catch (error) {

    console.error(
      "Achievement upload failed:",
      error
    );

    throw error;

  }

};
