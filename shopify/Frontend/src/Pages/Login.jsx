import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import { motion } from 'motion/react';
 import { useNavigate } from 'react-router-dom';
 import {UserdataContext} from '../context/UserContext'
 import {ProfileData} from '../context/ProfileContext'
 import axios from 'axios'

function Login() {

 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
  const {userdata,setuserdata}=useContext(UserdataContext);

    const {setAccountcreate,setToken,setLoggedIn,setfirstname,setlastname,setemail}=useContext(ProfileData);
  const navigate=useNavigate();




async  function loggedin(e){ 
 e.preventDefault();

 const user={
   email:email,
   password:password 
 }

  try{
   const response= await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`,user);
   
    if(response.status===200){
          const data=response.data;
          setToken(data.token)
          setuserdata(data.user)
          
          setAccountcreate(true);
          setLoggedIn(true);

          navigate('/')
    }

}catch(error){
  console.log(`${error.status,error.name}`);

}

   setEmail("");
   setPassword("");
  }

  return (
    <motion.div
       animate={{
         opacity:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,0.9,1]
       }}

       transition={{
         delay:0.1,
         duration:1.4,
          
       }}

     drag dragConstraints={{
         left:0,
          right:400,
          bottom:0,
          top:100
    }}
    
     whileDrag={{
         scale:0.8
     }}

    
       dragElastic={2}
        dragTransition={{
             bounceStiffness:5,
          
           
        }}
    className=' formcontainer relative   mt-[4%] left-[30%]'>
         <h1  className='login text-4xl  ml-32 mb-4 font-mono text-[#90e027] dark:text-[#27E0B3]'>Login </h1>
          <form className='flex flex-col gap-4  w-1/3 border-2  border-white/20  rounded-md backdrop-blur-md shadow-xl  bg-[#f9f9f9] dark:backdrop-blur-md dark:shadow-xl  dark:bg-white/5 dark:text-white  dark:border-white/10 p-5' onSubmit={(e)=>{
   loggedin(e)
          }}>
            <input value={email} onChange={(e) => {
                setEmail(e.target.value)
            }} type="text" name="youremail" className=' border outline-none focus:border-[1.9px]  focus:border-blue-500 h-9 rounded-md placeholder:text-base  text-xl  ' id="youremail" placeholder='Enter Your email' />
            <input value={password} onChange={(e) => {
                setPassword(e.target.value)
            }} type="password" name='yourpassword' className='border focus:border-[1.9px] focus:border-blue-500  outline-none h-9   placeholder:text-base  text-xl  rounded-md' id='yourpassword' placeholder='Enter Your password' />

              <a href='https://password-manager-modified.onrender.com' className='ml-32 text-sm font-medium dark:text-[#27E0B3] transition-all hover:underline hover:decoration-slate-600' target='blank' >Save Your password Securely here</a>
               <button className='border px-4 py-2 font-bold  bg-[#27E0B3]'>Login</button>
               <span className='text-center text-gray-400  dark:text-white'>If not any account <Link className='ml-2 underline decoration-blue-600 text-blue-600' to={'/Create'}>Create Account</Link></span>
          </form>
    </motion.div>
  )
}

export default Login