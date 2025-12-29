import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from '../Component/Loader';
// import useLocoScroll from '../Scrollbehaviour/useLocoScroll';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';


const fetchProducts=async()=>{
     const res=await axios.get(`${import.meta.env.VITE_PRODUCTS_DATA}`);
     return res.data;
  }


function Product() {

  const navigate = useNavigate();
  


  

const {
  data,
  isLoading,
  isError,
  error,
}=useQuery({
queryKey:['products'],
queryFn:fetchProducts,
staleTime:1000*60*5,//5 minutes cache means no need to fetch this data until more than 5 minutes 
});





  

  //issue in this component :- scrollbar nahi show ho raha ha scroll hone par and proper scroll nahi ho raha ha 











 if(isError){
   return <p className='text-red-500'>{error.message}</p>
 }


  // task give loader effect when we fetch the api syntax{ condition?(if true):(if false) }
  return (
    <div className='min-h-screen '> {isLoading? (
      <Loader />
    ) : (<>
      <h1 className='login text-4xl text-center pb-3  font-serif text-[#27E0B3]'>Our Products</h1>
      <div className="Products  text-black   flex flex-row justify-center items-center bg-[#FFFFFD] flex-wrap gap-4 w-full py-3 data-scroll-section ">
        {
          data?.map((element, idx) => {
            return <div key={idx} className=' px-7 py-4 flex flex-col items-center gap-4 rounded-xl border border-gray-300 border-solid  font-mono  box-border '>
              <div className='bg-[#f6f6f6] rounded-md w-[15rem] ' >
                <img className=' w-[15rem] h-[15rem] object-contain transition-all cursor-pointer hover:scale-125' src={element.image} alt="" />
              </div>
              <h1 className='text-xl font-bold font-sans'>{element.category.charAt(0).toUpperCase() + element.category.slice(1)}</h1>
              <p className='w-[15rem] h-10 overflow-auto cursor-move text-purple-400' >{element.description}</p>
              <h1 className='text-[#D4A373]'>Rating: {element.rating.rate}</h1>
              <h1 className='text-lg font-semibold'>Price: ${element.price}</h1>
              <div className='flex justify-between gap-2 items-center'>
                <button onClick={() => {
                  navigate('/payment', { state: { product: element } })
                }} className='px-3 py-2 rounded-3xl  bg-white border border-gray-200 border-solid  text-[#3d27e0] transition-all  hover:bg-[#3d27e0] hover:text-white'>Buy Now</button>
                <button className='px-4 py-2 rounded-3xl  bg-white border border-gray-200 border-solid  text-[#27E0B3] transition-all  hover:bg-[#27E0B3] hover:text-white'>Add to cart</button>
              </div>





            </div>

          })

        }




      </div></>
    )}
    </div>

  );

}


export default Product