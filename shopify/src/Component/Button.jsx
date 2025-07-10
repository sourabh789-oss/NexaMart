import React from 'react'
 import { Link } from 'react-router-dom'


function Button() {
  return (
   <Link to={'/Product'}><button className='btn self-center px-4 py-2 bg-[#27E0B3] rounded border-none font-bold font-mono text-2xl'>Our Products</button></Link>
  )
}

export default Button