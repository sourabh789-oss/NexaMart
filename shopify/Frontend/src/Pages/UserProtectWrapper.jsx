import React, { useEffect } from 'react'
 import { useNavigate } from 'react-router-dom'
function UserProtectWrapper({children}) {
     const navigate=useNavigate();

     //first check the token in our localStorage has or not if not means user  ka account nahi ha or login nahi ha to simple login kro or create kro account 
 const token=localStorage.getItem("token");

 useEffect(()=>{
if(!token){
     navigate('/Create');
  }

 },[token]);
  

  return (
    <>
    {children}
    </>
  )
}

export default UserProtectWrapper