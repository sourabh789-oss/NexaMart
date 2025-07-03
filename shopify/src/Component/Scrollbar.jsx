import React from 'react';
import {motion, useScroll} from 'motion/react'
import { div } from 'motion/react-client';
 function Scrollbar(){

 const {scrollYProgress}= useScroll();


    return (
        <motion.div  style={{
      scaleX:scrollYProgress
        }}
         className=' origin-center  h-3 bg-[#27E0B3] fixed w-full top-0 left-0'></motion.div>
    )
 }

 export default Scrollbar;