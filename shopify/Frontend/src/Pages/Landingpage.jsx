import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import Button from '../Component/Button';
import FAQ from '../Component/FAQ';
import Footer from '../Component/Footer';
import ErrorBoundary from '../Component/ErrorBoundary';
import Partner from '../Component/Partner';

function Landingpage() {

   

    return (
        <div className='Landingpage mt-28 ml-7 flex flex-col items-start gap-3 '>
            <h1 className='text-5xl'><i className='wave'>👋</i> Welcome to <span className='text-[#27E0B3]'
            >NexaMart</span></h1>
            <h2 className='text-4xl  ml-6'>Your One-Stop Online Fashion Destination</h2>
            <p className='font-mono text-xl '>
                Discover the latest trends in 🛍️ fashion, all in one place! From stylish men's and women's clothes </p>
            <ErrorBoundary>
                <Button />
            </ErrorBoundary>



            <div className='mt-12 flex '>
                <video className='w-screen h-auto  object-contain mr-4 -ml-2 ' autoPlay muted loop playsInline preload="metadata" >
                    <source src="https://www.shutterstock.com/shutterstock/videos/1092222145/preview/stock-footage--k-fps-green-screen-animation-of-products-related-to-e-commerce-falling-wearing-belt-shoes.webm" />
                </video>
            </div>

            <ErrorBoundary>
                <FAQ />
            </ErrorBoundary>


            <h1 className='head text-4xl mt-16  mx-[28rem] mb-5 text-[#27E0B3]'>Our Partners</h1>

            <div className=' cards w-full overflow-hidden mb-1'>
                <ErrorBoundary>
               <Partner/>
               </ErrorBoundary>
            </div>

            <ErrorBoundary>
                <Footer />
            </ErrorBoundary>

            <hr className='h-1 text-white w-full ' />
            <section className='text-center w-full mt-3 text-2xl text-[#27E0B3] pb-5'>Made with &nbsp; ❤️ </section>

        </div>

    )

}

export default Landingpage;