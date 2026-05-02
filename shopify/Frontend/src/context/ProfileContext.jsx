import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';//for check profile checkpoint 
import { useTheme } from 'next-themes';
import { useProfile } from '@/hooks/userProfile';

export const ProfileData = createContext();

const ProfileContext = ({ children }) => {
  const [Accountcreate, setAccountcreate] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));//initally it starts from our localstorge present or not token if already present then show the profile 
  const [isLoggedIn, setLoggedIn] = useState(!!token);
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [MobileNo, setMobileNo] = useState(null);
  const [isdark, setDark] = useState(false);//intially we are in toggle mode 
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setmounted] = useState(false);

  const { data, isError } = useProfile(token);//call the module import function and passing the parameter also

  //wait until client side hydration 
  useEffect(() => {
    setmounted(true);
  }, [])

  //this will rerender whenever our state will change when we create the account 
  useEffect(() => {
    if (token) {//this token will update when we connect frontend to backend on create and login and this state where 
      localStorage.setItem("token", token);
      setAccountcreate(true);
      setLoggedIn(true);
    }
    else {
      localStorage.removeItem("token");
      setAccountcreate(false);
      setLoggedIn(false);
      setfirstname("");
      setlastname("");
      setemail("");
      setMobileNo(null);

    }


  }, [token])


  //update profile state from api 
  useEffect(() => {
    if (data) {
      setfirstname(data.fullname?.firstname || "");
      setlastname(data.fullname?.Lastname || "");
      setemail(data.email || "");
      setMobileNo(data.Phoneno || "");

    }
  }, [data])


  //intially theme system default then toggle theme on user interaction 
  useEffect(() => {
    if (mounted) {
      setDark((resolvedTheme || theme) === "dark");

    }
  }, [theme, resolvedTheme, mounted])


  return (
    <ProfileData.Provider value={{ Accountcreate, setAccountcreate, MobileNo, setMobileNo, isLoggedIn, setLoggedIn, firstname, setfirstname, lastname, setlastname, email, setemail, token, setToken, isdark, setDark, setTheme, theme,isError}}>
      {children}
    </ProfileData.Provider>
  )
}

export default ProfileContext