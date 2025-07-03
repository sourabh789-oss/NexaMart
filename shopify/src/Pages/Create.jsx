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


    return (<div className='relative  mt-[3%] left-[30%] '>
        <h1 className='text-4xl mb-4 font-mono text-red-700'>Create Your Account</h1>
        <form onSubmit={(e) => {
            submitted(e);
        }} className='flex flex-col gap-4  w-1/3 border text-black  border-gray-200 p-5'>
            <input value={name} onChange={(e) => {
                setName(e.target.value)
            }} type="text" name="yourname" className='outline-none focus:border-[1.8px]  focus:border-blue-400 h-9 rounded-md' id="yourname" placeholder='Enter Your name' />
            <input value={email} onChange={(e) => {
                setEmail(e.target.value)
            }} type="email" name='youremail' className=' outline-none focus:border-[1.8px] focus:border-blue-400   h-9 rounded-md' id='youremail' placeholder='Enter Your email' />
            <input value={password} onChange={(e) => {
                setPassword(e.target.value)
            }} type="password" name='yourpassword' className=' focus:border-[1.8px] focus:border-blue-400  outline-none h-9 rounded-md' id='yourpassword' placeholder='Enter Your password' />
            <input value={no} onChange={(e) => {
                setNo(e.target.value);
            }} type="number" name='yournumber' className='  focus:border-[1.8px]focus:border-blue-400  outline-none h-9 rounded-md ' id='yournumber' placeholder='Enter your number' />
            <button className=' px-4 py-2 font-bold  bg-[#27E0B3]'>Create Account</button>
            <span className='text-center text-white'>Already have an account <Link className=' underline decoration-blue-600 text-blue-600' to={'/Login'}>Login here</Link></span>
        </form>

    </div>
    )
}

export default Create;