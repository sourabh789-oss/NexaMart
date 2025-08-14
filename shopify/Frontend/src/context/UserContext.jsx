import React, { createContext, useState } from 'react'

export const UserdataContext = createContext();

const UserContext = ({ children }) => {

  //create a state that contains user data which is empty and set when we create the account 
  const [userdata, setuserdata] = useState({
    fullname: {
      firstname: "",
      Lastname: ""
    },
    email: "",

  })

  return (
    <div>
      <UserdataContext.Provider value={{ userdata, setuserdata }}>
        {children}
      </UserdataContext.Provider>
    </div>
  )
}

export default UserContext