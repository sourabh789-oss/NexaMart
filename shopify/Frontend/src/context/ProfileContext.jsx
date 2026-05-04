import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';//for check profile checkpoint 
import { useTheme } from 'next-themes';
import { useProfile } from '@/hooks/userProfile';

export const ProfileData = createContext();

const ProfileContext = ({ children }) => {
  const [Accountcreate, setAccountcreate] = useState(false);

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [MobileNo, setMobileNo] = useState(null);
  const [isdark, setDark] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [hasVerified, setHasVerified] = useState(false);



  // expose hasVerified so route guards can wait before redirecting

  useEffect(() => {
    // On component mount, check if user is authenticated via cookie
    const verifyUser = async () => {
      if (hasVerified) return;
      try {
         console.log("runs profile hooks");
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/user/profile`,
          { withCredentials: true } // Sends cookie
        );

        if (response.status === 200) {

          setfirstname(response.data.fullname?.firstname || "");
          setlastname(response.data.fullname?.Lastname || "");
          setemail(response.data.email || "");
          setMobileNo(response.data.Phoneno || "");
          setAccountcreate(true);
          setLoggedIn(true);
         
        }
      } catch (error) {
        // Cookie invalid or expired

        setLoggedIn(false);
        setfirstname("");
        setlastname("");
        setemail("");
        setMobileNo(null);
        setAccountcreate(false);
      
      } finally{
         setHasVerified(true);
      }
    };

    verifyUser();
  }, []); // Run once immediately on mount







  //intially theme system default then toggle theme on user interaction 
  useEffect(() => {
    setDark((resolvedTheme || theme) === "dark");
  }, [theme, resolvedTheme])


  return (
    <ProfileData.Provider value={{ Accountcreate, setAccountcreate, MobileNo, setMobileNo, isLoggedIn, setLoggedIn, firstname, setfirstname, lastname, setlastname, email, setemail, isdark, setDark, setTheme, theme, hasVerified }}>
      {children}
    </ProfileData.Provider>
  )
}

export default ProfileContext