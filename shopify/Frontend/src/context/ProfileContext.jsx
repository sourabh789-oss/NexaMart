import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';//for check profile checkpoint 

export const ProfileData = createContext();

const ProfileContext = ({ children }) => {
  const [Accountcreate, setAccountcreate] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));//initally it starts from our localstorge present or not token if already present then show the profile 


  //this will rerender whenever our state will change when we create the account 
  useEffect(() => {
    if (token) {//this token will update when we connect frontend to backend on create and login and this state where 
      localStorage.setItem("token", token);
      setAccountcreate(true);
      setLoggedIn(true);

      const fetchProfile = async () => {

        //check the token is present in our headers or not or authentic token or not 
        try {
          const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/profile`, {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          }
          )
          const data = response.data;

          if (response.status === 200) {
            setfirstname(data.fullname?.firstname || "");
            setlastname(data.fullname?.Lastname || "");
            setemail(data.email || "");
          }

        }
        catch (error) {
          console.log(error);
        }


      }
      fetchProfile();

    }
    else {
      localStorage.removeItem("token");
      setAccountcreate(false);
      setLoggedIn(false);
      setfirstname("");
      setlastname("");
      setemail("");

    }


  }, [token])


  return (
    <ProfileData.Provider value={{ Accountcreate, setAccountcreate, isLoggedIn, setLoggedIn, firstname, setfirstname, lastname, setlastname, email, setemail, token, setToken }}>
      {children}
    </ProfileData.Provider>
  )
}

export default ProfileContext