import { motion } from 'motion/react';
import React, { useState } from 'react';

import { Link } from 'react-router-dom'
function Create() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [no, setNo] = useState("");
    const [password, setPassword] = useState("");

     
    const submitted = (e) => {
        e.preventDefault();
        setName("");
        setEmail("");
        setNo("");
        setPassword("");

    }


    return (<motion.div className='formcontainer relative  mt-[3%] left-[30%]' drag dragConstraints={{
         left:0,
          right:400,
          bottom:0,
          top:100
    }}

      animate={{
         opacity:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,0.9,1]
       }}
    
       transition={{
         delay:0.1,
         duration:1.4,
          
       }}
       
     whileDrag={{
         scale:0.8
     }}

    
       dragElastic={2}
        dragTransition={{
             bounceStiffness:5,
          
           
        }}
    >
        <h1 className='text-4xl mb-4 font-mono text-red-700'>Create Your Account</h1>
        <form onSubmit={(e) => {
            submitted(e);
        }} className='flex flex-col gap-4  w-1/3 border text-black  border-gray-200 p-5'>
            <input value={name} onChange={(e) => {
                setName(e.target.value)
            }} type="text" name="yourname" className='outline-none focus:border-[1.9px]  focus:border-blue-500 h-9 placeholder:text-base  text-xl rounded-md' id="yourname" placeholder='Enter Your name' />
            <input value={email} onChange={(e) => {
                setEmail(e.target.value)
            }} type="email" name='youremail' className=' outline-none focus:border-[1.9px] focus:border-blue-500 placeholder:text-base  text-xl   h-9 rounded-md' id='youremail' placeholder='Enter Your email' />
            <input value={password} onChange={(e) => {
                setPassword(e.target.value)
            }} type="password" name='yourpassword' className=' focus:border-[1.9px] focus:border-blue-500  outline-none h-9 rounded-md placeholder:text-base  text-xl' id='yourpassword' placeholder='Enter Your password' />
            <input value={no} onChange={(e) => {
                setNo(e.target.value);
            }} type="number" name='yournumber' className='  focus:border-[1.9px] focus:border-blue-500  outline-none h-9 rounded-md  placeholder:text-base  text-xl' id='yournumber' placeholder='Enter your number' />
            <button className=' px-4 py-2 font-bold  bg-[#27E0B3]'>Create Account</button>
            <span className='text-center text-white'>Already have an account <Link className=' underline decoration-blue-600 text-blue-600' to={'/Login'}>Login here</Link></span>
        </form>

    </motion.div>
    )
}

export default Create;