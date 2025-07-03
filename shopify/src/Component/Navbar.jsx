import React from 'react'
import { Link } from 'react-router-dom';
import  shopify from  '../assets/shopify.png'
function Navbar() {

  return (
    <div className=' flex flex-row justify-between items-center p-4 font-mono sticky'>
     <Link to={'/'}> <h1 className='text-4xl  cursor-pointer text-[#27E0B3]'>Shopify <img  className=' -ml-9 inline w-20  h-20 object-cover'  src={shopify} alt="" /> </h1>
     </Link>
      <div>
        <input type='search' autoFocus className='w-[20rem] rounded  h-8 outline-none text-red-800 ' placeholder='Search here...' />
      </div>

      <div className='flex flex-row items-center gap-6 '>
        <Link to={"/Product"}>  <h1 className=' cursor-pointer text-2xl text-green-800  transition-all hover:decoration-blue-600 hover:underline'>Product</h1></Link>
        <Link to={'/Service'}>  <h1 className='cursor-pointer text-2xl text-green-800  transition-all hover:decoration-blue-600   hover:underline'>Service</h1></Link>
        <Link to={'/Create'} >   <h1 className='cursor-pointer text-xl'><button className=' px-4 py-2 text-white font-bold bg-blue-500 rounded-md'>Create Account</button></h1></Link>
      </div>

    </div>
  )
}

export default Navbar