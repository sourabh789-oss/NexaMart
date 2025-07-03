import React from 'react'
import {motion} from 'motion/react'
import shopify from '../assets/shopify.png'

function Loader() {
  return (
    <motion.div 
     animate={{
       scale:[3,2,1],
       rotate:360
     }}

     transition={{
       duration:2,
       repeat:Infinity
     }}


    className='loading  absolute top-[50%] left-[48%] translate-x-2/4 rounded-full'><img src={shopify} className='inline w-16  h-16 object-cover' alt=""/></motion.div>
  )
}

export default Loader