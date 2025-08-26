import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import Button from '../Component/Button';
import FAQ from '../Component/FAQ';
import Footer from '../Component/Footer';



function Landingpage() {

    const images = [
        {
            src: "https://t4.ftcdn.net/jpg/04/29/34/81/360_F_429348129_vHH5UVrbXbpB6AF5Uf3g8yWwQ5Tu2lKo.jpg"
        },
        {
            src: "https://cdn.vectorstock.com/i/1000v/21/74/logo-for-clothing-t-shirt-companyweb-vector-51522174.jpg"
        },
        {
            src: "https://static.vecteezy.com/system/resources/previews/016/818/271/non_2x/clothing-t-shirt-online-shop-logo-idea-free-vector.jpg"
        },

        {
            src: "https://img.freepik.com/free-vector/hand-drawn-clothing-store-logo-design_23-2149577874.jpg?semt=ais_hybrid&w=740&q=80"
        },
        {
            src: "https://png.pngtree.com/template/20191219/ourmid/pngtree-abstract-colorful-shirt-logo-vector-cloth-logo-designs-template-image_341456.jpg"
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Y8XKeXZA25d737RJQ0LOe6ZpebWrXrpIwGqAMXsYfIQeXlfwVqCxLU1XomoKkAVP1eQ&usqp=CAU"
        }
        , {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNipaTHti0aZbi3dkFlcAN-o-s3GevLuEfcg&s"
        }
        , {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShBbexXmMAPPxUOrntSsKLXv5MP-Z72c6mbQ&s"
        },
        {
            src: "https://t4.ftcdn.net/jpg/01/94/15/39/360_F_194153984_2OlRQYPKUyGQCWiJpPElk7zzF08QY6aR.jpg"
        }
    ]


    return (
        <div className='Landingpage mt-28 ml-7 flex flex-col items-start gap-3 '>
            <h1 className='text-5xl'><i className='wave'>👋</i> Welcome to <span className='text-[#27E0B3]'
            >NexaMart</span></h1>
            <h2 className='text-4xl  ml-6'>Your One-Stop Online Fashion Destination</h2>
            <p className='font-mono text-xl '>
                Discover the latest trends in 🛍️ fashion, all in one place! From stylish men's and women's clothes </p>
            <Button />



            <div className='mt-12 flex '>
                <video className='w-screen h-auto  object-contain mr-4 -ml-2 ' autoPlay muted loop playsInline preload="metadata" >
                    <source src="https://www.shutterstock.com/shutterstock/videos/1092222145/preview/stock-footage--k-fps-green-screen-animation-of-products-related-to-e-commerce-falling-wearing-belt-shoes.webm" />
                </video>
            </div>

            {/* issue on mobile responsive design on faq component */}
            <FAQ />

            
                <h1 className='head text-4xl mt-16  mx-[28rem] mb-5 text-[#27E0B3]'>Our Partners</h1>

                   <div className=' cards w-full overflow-hidden mb-1'>
                <div className='  flex gap-4   w-max  py-2   animate-moveleft '>

                    { images.map((element,idx)=>{

                      return  <img key={idx} className='partner w-[14rem] h-[14rem]   rounded-full border-none  shadow-[0_0_20px_rgba(255,255,255,1)] shadow-white ' src={element.src} alt="" />
                    })

                    }

                    { images.map((element,idx)=>{

                      return  <img key={idx+"sourabh"} className=' partner w-[14rem] h-[14rem] rounded-full border-none  shadow-[0_0_20px_rgba(255,255,255,1)] shadow-white ' src={element.src} alt="" />
                    })

                    }

                    

                </div>
                </div>

          
            <Footer />
            <hr className='h-1 text-white w-full ' />
            <section className='text-center w-full mt-3 text-2xl text-[#27E0B3] pb-5'>Made with &nbsp; ❤️ </section>

        </div>

    )

}

export default Landingpage;