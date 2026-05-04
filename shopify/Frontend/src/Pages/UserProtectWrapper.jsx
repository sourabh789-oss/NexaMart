import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProfileData } from '@/context/ProfileContext';

function UserProtectWrapper({ children }) {
  const navigate = useNavigate();
 const {isLoggedIn ,hasVerified}=useContext(ProfileData);

  useEffect(() => {
    // Wait until cookie verification is complete before deciding to redirect 
    if (hasVerified && !isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, hasVerified]);

  

  return <>{children}</>;
}

export default UserProtectWrapper
