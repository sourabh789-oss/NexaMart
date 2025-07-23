import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { motion } from 'motion/react';

function Login() {
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");

  function loggedin(e){ 
 e.preventDefault();
   setName("");
   setPassword("");
  }

  return (
    <motion.div
    
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
         <h1  className='login text-4xl  ml-32 mb-4 font-mono text-[#27E0B3]'>Login </h1>
          <form className='flex flex-col gap-4  w-1/3 border text-black  border-gray-200 p-5' onSubmit={(e)=>{
   loggedin(e)
          }}>
            <input value={email} onChange={(e) => {
                setEmail(e.target.value)
            }} type="text" name="youremail" className='outline-none focus:border-[1.9px]  focus:border-blue-500 h-9 rounded-md placeholder:text-base  text-xl  ' id="youremail" placeholder='Enter Your email' />
            <input value={password} onChange={(e) => {
                setPassword(e.target.value)
            }} type="password" name='yourpassword' className=' focus:border-[1.9px] focus:border-blue-500  outline-none h-9   placeholder:text-base  text-xl  rounded-md' id='yourpassword' placeholder='Enter Your password' />
               <button className=' px-4 py-2 font-bold  bg-[#27E0B3]'>Login</button>
               <span className='text-center text-white'>If not any account <Link className=' underline decoration-blue-600 text-blue-600' to={'/Create'}>Create Account</Link></span>
          </form>
    </motion.div>
  )
}

export default Login