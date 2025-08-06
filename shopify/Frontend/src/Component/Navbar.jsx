import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import shopify from '../assets/shopify.png'
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
 import ThemeToggleButton from '@/components/ui/theme-toggle-button';

function Navbar() {
  const icon1 = useRef(null);
  const icon2 = useRef(null);
  const Navbarref = useRef(null);

  const showNavbar = () => {



    Navbarref.current.style.display = 'flex';
    Navbarref.current.style.left = '0%';
    Navbarref.current.style.zIndex = "16";
    icon1.current.style.visibility = 'hidden';//home bar

    setTimeout(() => {

      icon2.current.style.visibility = 'visible';
    }, 200)




  }

  const CloseNavbar = () => {



    Navbarref.current.style.left = '-108%';
    Navbarref.current.style.zIndex = '2';
    icon2.current.style.visibility = 'hidden';

    //not show icon directly first 
    setTimeout(() => {

      icon1.current.style.visibility = 'visible';
    }, 200)
  }

  return (<div>

    <p ref={icon1} className="cursor-pointer sm:hidden dark:text-white" onClick={showNavbar} ><GiHamburgerMenu className='text-3xl' /></p>
    <p ref={icon2} onClick={CloseNavbar} className='relative   sm:hidden cursor-pointer'><IoCloseSharp className='text-4xl' /></p>
    <div ref={Navbarref} className='Navbar flex flex-row justify-between items-center p-4 font-mono  '>
      <Link to={'/'} onClick={CloseNavbar} > <h1 className='Logopart text-4xl  cursor-pointer text-[#27E0B3]'>Shopify <img className=' -ml-9 inline w-20  h-20 object-cover' src={shopify} alt="" /> </h1>
      </Link>
      <div>
        <input type='search' autoFocus className='w-[20rem] border  bg-[#F9F9F9] dark:bg-[#3B3B3B] h-8 py-5 outline-none rounded-3xl pl-1  dark:text-white ' placeholder='Search here...' />
      </div>

      <div className='pages flex flex-row items-center gap-6 '>
        <Link to={"/Product"} onClick={CloseNavbar} >  <h1 className=' cursor-pointer text-2xl text-green-800  transition-all hover:decoration-blue-600 hover:underline'>Product</h1></Link>
        <Link to={'/Service'} onClick={CloseNavbar} >  <h1 className='cursor-pointer text-2xl text-green-800  transition-all hover:decoration-blue-600   hover:underline'>Service</h1></Link>
        <Link to={'/Create'} onClick={CloseNavbar}  >   <h1 className='cursor-pointer text-xl'><button className=' px-4 py-2 text-white font-bold bg-blue-500 rounded-md'>Create Account</button></h1></Link>
          <div>
            <ThemeToggleButton/>
          </div>
      </div>

    </div>
  </div>
  )
}

export default Navbar