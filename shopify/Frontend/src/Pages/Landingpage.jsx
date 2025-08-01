import React from 'react';
import { Link } from 'react-router-dom'
import Button from '../Component/Button';
import { motion } from 'motion/react'
import Footer from '../Component/Footer';
function Landingpage() {



    return (

        <div className='Landingpage mt-28 ml-7 flex flex-col items-start gap-3'>
            <h1 className='text-5xl'><i className='wave'>👋</i> Welcome to <motion.span className='text-[#27E0B3]'
            >Shopify</motion.span></h1>
            <h2 className='text-4xl  ml-6'>Your One-Stop Online Fashion Destination</h2>
            <p className='font-mono text-xl '>
                Discover the latest trends in 🛍️ fashion, all in one place! From stylish men's and women's clothes </p>
            <Button />

            <div className='mt-12 flex '>
                <video className='w-screen h-auto  object-contain mr-4 -ml-2 ' autoPlay muted loop playsInline preload="metadata" >
                    <source src="https://www.shutterstock.com/shutterstock/videos/1092222145/preview/stock-footage--k-fps-green-screen-animation-of-products-related-to-e-commerce-falling-wearing-belt-shoes.webm" />
                </video>
            </div>

     <Footer/>
            <hr className='h-1 text-white w-full '/>
           <section className='text-center w-full mt-3 text-2xl '> All Rights Reserved </section>
        </div>

    )

}

export default Landingpage;