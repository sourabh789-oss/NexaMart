import { motion } from 'motion/react';
import React, { useContext, useState } from 'react';
import { UserdataContext } from '../context/UserContext';
import { Link, useNavigate } from 'react-router-dom'
import { ProfileData } from '../context/ProfileContext'
import axios from 'axios';

function Create() {
    const navigate = useNavigate();

    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [no, setNo] = useState("");
    const [password, setPassword] = useState("");



    const { userdata, setuserdata } = useContext(UserdataContext);//extact our provider value from userContext userdata,setuserdata

    const { setToken } = useContext(ProfileData);



    const submitted = async (e) => {
        e.preventDefault();

        const UserData = {
            fullname: {
                firstname: Firstname,
                Lastname: Lastname
            },
            email: email,
            Phoneno: no,
            password: password

        }



        // post request api call on backend with data UserData;
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/Register`, UserData);
            if (response.status === 201) {//means everything is ok 
                const data = response.data;

                //set the data in context api and token in our local storage 
                setuserdata(data.user);

                setToken(data.token);

                navigate('/');

            }

        } catch (error) {
            console.log(error);
        }




        setFirstname("");
        setLastname("");
        setEmail("");
        setNo("");
        setPassword("");

    }


    return (<motion.div className='formcontainer box-border relative dark:text-white   mt-[3%] left-[30%]' drag dragConstraints={{
        left: 0,
        right: 400,
        bottom: 0,
        top: 100
    }}

        animate={{
            opacity: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.9, 1]
        }}

        transition={{
            delay: 0.1,
            duration: 1.4,

        }}

        whileDrag={{
            scale: 0.8
        }}


        dragElastic={2}
        dragTransition={{
            bounceStiffness: 5,


        }}
    >
        <h1 className='text-4xl mb-4 font-mono  text-[#90e027] dark:text-red-700'>Create Your Account</h1>
        <form onSubmit={(e) => {
            submitted(e);
        }} className='flex flex-col gap-4  w-1/3 border-2  border-white/20  rounded-md  bg-[#f9f9f9] backdrop-blur-md shadow-xl dark:bg-white/5  text-black dark:text-white  dark:border-white/10 p-5'>
            <div className='flex gap-3' >
                <input value={Firstname} onChange={(e) => {
                    setFirstname(e.target.value)
                }} type="text" className=' border pl-2 w-3/4 outline-none focus:border-[1.9px]  focus:border-blue-500 h-9 placeholder:text-base  text-xl rounded-md' placeholder='Firstname' />

                <input value={Lastname} onChange={(e) => {
                    setLastname(e.target.value)
                }} type="text" className='w-3/4 pl-2 border outline-none focus:border-[1.9px]  focus:border-blue-500 h-9 placeholder:text-base  text-xl rounded-md' placeholder='Lastname' />

            </div>

            <input value={email} onChange={(e) => {
                setEmail(e.target.value)
            }} type="email" name='youremail' className='border outline-none focus:border-[1.9px] focus:border-blue-500 placeholder:text-base  text-xl   h-9 rounded-md' id='youremail' placeholder='Enter Your email' />

            <input value={password} onChange={(e) => {
                setPassword(e.target.value)
            }} type="password" name='yourpassword' className=' border  focus:border-[1.9px] focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50  outline-none h-9 rounded-md placeholder:text-base  text-xl' id='yourpassword' placeholder='Enter Your password' />

            <input value={no} onChange={(e) => {
                setNo(e.target.value);
            }} type="number" name='yournumber' className='border  focus:border-[1.9px] focus:border-blue-500  outline-none h-9 rounded-md  placeholder:text-base  text-xl' id='yournumber' placeholder='Enter your number' />

            <button className=' px-4 py-2 font-bold  bg-[#27E0B3]'>Sign Up</button>

            <span className='text-center text-gray-400  dark:text-white'>Already have an account? <Link className=' underline decoration-blue-600 text-blue-600' to={'/Login'}>Login here</Link></span>
        </form>

    </motion.div>
    )
}

export default Create;