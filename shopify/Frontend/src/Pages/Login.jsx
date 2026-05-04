import React, { useCallback, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { UserdataContext } from '../context/UserContext'
import { ProfileData } from '../context/ProfileContext'
import axios from 'axios'
import { toast } from 'react-toastify';

function Login({ animate }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidepassword, sethidepassword] = useState(true);
  const { userdata, setuserdata } = useContext(UserdataContext);
  const [login, setLogin] = useState("");
  const { setAccountcreate, setToken, setLoggedIn,verifyUser ,setfirstname, setlastname, setemail } = useContext(ProfileData);
  const navigate = useNavigate();

  const passwordVisibility = () => {
    sethidepassword(prev => !prev);

  }



  async function loggedin(e) {
    e.preventDefault();

    const user = {
      email: email,
      password: password
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`, user, {
        withCredentials: true
      });

      // const response = await axios.post(`${import.meta.env.VITE_MYBACKENDURL}/user/login`, user,{
      //   withCredentials:true
      // });

      if (response.status === 200) {
        const data = response.data;

        setuserdata(data.user)
         await verifyUser();
        // setAccountcreate(true);
        // setLoggedIn(true);
        toast.success("Login successful! Welcome back.", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          onClose: () => {
            navigate("/")
          },
          draggable: true,
          theme: "colored",
        });

      }

    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
        "Login failed. Please check your credentials.",
        {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        }
      );

    }

    setEmail("");
    setPassword("");
  }

  return (
    <motion.div
      animate={{
        opacity: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.9, 1]
      }}

      transition={{
        delay: 0.1,
        duration: 1.4,

      }}
      {
      ...(animate && {
        drag: true,
        dragConstraints: {
          left: 0,
          right: 400,
          bottom: 0,
          top: 100
        },
        whileDrag: {
          scale: 0.8
        },
        dragElastic: 2,
        dragTransition: {
          bounceStiffness: 5,

        },
      })}
      className=' formcontainer relative   mt-[4%] left-[30%]'>
      <h1 className='login text-4xl  ml-32 mb-4 font-mono text-[#90e027] dark:text-[#27E0B3]'>Login </h1>
      <form className='flex flex-col gap-4  w-1/3 border-2  border-white/20  rounded-md backdrop-blur-md shadow-xl  bg-[#f9f9f9] dark:backdrop-blur-lg dark:shadow-lg  dark:bg-white/10 dark:text-white  dark:border-white/20 p-5' onSubmit={(e) => {
        loggedin(e)
      }}>
        <input value={email} onChange={useCallback((e) => {
          setEmail(e.target.value)
        }, [])} type="text" name="youremail" className=' border outline-none focus:border-[1.9px]  focus:border-blue-500 h-9 rounded-md placeholder:text-base  text-xl' id="youremail" placeholder='Enter Your email' />
        <div className='relative w-full'>
          <input value={password} onChange={useCallback((e) => {
            setPassword(e.target.value)
          }, [])} type={hidepassword ? "password" : "text"} name='yourpassword' className='border focus:border-[1.9px] focus:border-blue-500  outline-none h-9   placeholder:text-base  md:text-xl w-[12rem] md:w-[23rem]  rounded-md' id='yourpassword' placeholder='Enter Your password' /><span onClick={() => {
            passwordVisibility();
          }} className='absolute right-[0.3rem] md:right-8 top-[0.3rem] cursor-pointer'>{!hidepassword ? <i className="ri-eye-line text-[#27E0B3] "></i> : <i className="ri-eye-off-line text-[#27E0B3]"></i>}</span></div>

        <a href='https://password-manager-modified.onrender.com' className='md:ml-32 text-xs md:text-sm font-medium dark:text-[#27E0B3] transition-all hover:underline hover:decoration-blue-600' target='blank' >Save Your password Securely here</a>
        <button className='border px-4 py-2 font-bold  bg-[#27E0B3]'>Login</button>
        <span className='text-center text-gray-400  dark:text-white'>If not any account <Link className='ml-2 underline decoration-blue-600 text-blue-600' to={'/Create'}>Create Account</Link></span>

        {/* for display notification (real-world like) */}
      </form>
    </motion.div>
  )
}

export default Login