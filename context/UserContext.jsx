import { createContext, useContext, useState } from "react";


const UserContext = createContext();



export function UserProvider({ children }) {

  const [profile, setProfile] = useState(null);



  const updateProfile = (data) => {

    setProfile({
      ...profile,
      ...data,
    });

  };



  const clearProfile = () => {

    setProfile(null);

  };



  return (

    <UserContext.Provider

      value={{
        profile,
        setProfile,
        updateProfile,
        clearProfile,
      }}

    >

      {children}

    </UserContext.Provider>

  );

}



export function useUser() {

  return useContext(UserContext);

}
