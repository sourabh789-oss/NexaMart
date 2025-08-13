 import React, { createContext,useState } from 'react'
 
export const ProfileData=createContext();

 const ProfileContext = ({children}) => {
 const [Accountcreate, setAccountcreate] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [firstname, setfirstname] = useState("");
  const [lastname,setlastname]=useState("");
  const [email, setemail] = useState("");



   return (
     <ProfileData.Provider value={{Accountcreate,setAccountcreate,isLoggedIn,setLoggedIn,firstname,setfirstname,lastname,setlastname,email,setemail}}>
       {children}
     </ProfileData.Provider>
   )
 }
 
 export default ProfileContext