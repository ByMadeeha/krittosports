// Base URL of your backend

const API_URL = "http://localhost:5000/api";


// Generic request function

async function request(endpoint, options = {}) {

  const response = await fetch(
    `${API_URL}${endpoint}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    }
  );


  const data = await response.json();


  if (!response.ok) {
    throw new Error(
      data.message || "Something went wrong"
    );
  }


  return data;

}



// Authentication

export const loginUser = (credentials) => {

  return request("/auth/login", {

    method: "POST",

    body: JSON.stringify(credentials),

  });

};




// Register athlete

export const registerAthlete = (athleteData) => {

  return request("/athletes/register", {

    method: "POST",

    body: JSON.stringify(athleteData),

  });

};




// Register coach

export const registerCoach = (coachData) => {

  return request("/coaches/register", {

    method: "POST",

    body: JSON.stringify(coachData),

  });

};




// Register academy

export const registerAcademy = (academyData) => {

  return request("/academies/register", {

    method: "POST",

    body: JSON.stringify(academyData),

  });

};




// Get opportunities

export const getOpportunities = () => {

  return request("/opportunities");

};
