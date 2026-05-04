import React, { createContext, useCallback, useEffect, useState } from 'react'
import axios from 'axios';
import { useTheme } from 'next-themes';

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

  // Single function to fetch profile from cookie — called on mount AND after login/register
  const verifyUser = useCallback(async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/user/profile`,
        { withCredentials: true }
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
      // Cookie invalid or expired — clear everything
      setLoggedIn(false);
      setfirstname("");
      setlastname("");
      setemail("");
      setMobileNo(null);
      setAccountcreate(false);
    } finally {
      setHasVerified(true);
    }
  }, []);

  // Run once on mount to restore session from cookie
  useEffect(() => {
    verifyUser();
  }, []);

  // Theme sync
  useEffect(() => {
    setDark((resolvedTheme || theme) === "dark");
  }, [theme, resolvedTheme]);

  return (
    <ProfileData.Provider value={{
      Accountcreate, setAccountcreate,
      MobileNo, setMobileNo,
      isLoggedIn, setLoggedIn,
      firstname, setfirstname,
      lastname, setlastname,
      email, setemail,
      isdark, setDark,
      setTheme, theme,
      hasVerified,
      verifyUser,
    }}>
      {children}
    </ProfileData.Provider>
  );
};

export default ProfileContext;
