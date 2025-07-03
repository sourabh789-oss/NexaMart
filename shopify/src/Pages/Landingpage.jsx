import React from 'react';
import { Link } from 'react-router-dom'
import Button from '../Component/Button';
import {motion} from 'motion/react' 
function Landingpage() {



    return (

        <div className=' mt-28 ml-7 flex flex-col items-start gap-3'>
            <h1 className='text-5xl'>👋 Welcome to <motion.span className='text-[#27E0B3]'
            >Shopify</motion.span></h1>
            <h2 className='text-4xl  ml-6'>Your One-Stop Online Fashion Destination</h2>
            <p className='font-mono text-xl '>
                Discover the latest trends in 🛍️ fashion, all in one place! From stylish men's and women's clothes </p>
           <Button/>
        </div>

    )

}

export default Landingpage;