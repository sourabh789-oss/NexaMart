import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Scrollbar from '../Component/Scrollbar';
import Loader from '../Component/Loader';

function Product() {
 
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);//initially our loader state true set 
  const getdata = async () => {
    const Response = await axios.get("https://fakestoreapi.com/products");
    // console.log(Response.data);
    setData(Response.data);

     setTimeout(()=>{

       setLoader(false);//jaise hi data fetch hua api se or data ko set krdiye then loader ki value false krdo jisse ab loader show nahi hoga 
     },1500) //show the loader even data fetches from api for 1.5 second then disappear 

  }

  useEffect(() => {
    getdata();
  }, [])

  // task give loader effect when we fetch the api syntax{ condition?(if true):(if false) }
  return (<div> {loader ? (
     <Loader/>
  ):(<>
    <Scrollbar />
    <h1 className='login text-4xl text-center pb-3  font-serif text-[#27E0B3]'>Our Products</h1>
    <div className="Products  text-black   flex flex-row justify-center items-center bg-[#FFFFFD] flex-wrap gap-4 w-full py-3">
      {
        data.map((element, idx) => {
          return <div className=' px-7 py-4 flex flex-col items-center gap-4 rounded-xl border border-gray-300 border-solid  font-mono  box-border '>
            <div className='bg-[#f6f6f6] rounded-md w-[15rem] ' >
              <img key={idx} className=' w-[15rem] h-[15rem] object-contain transition-all cursor-pointer hover:scale-125' src={element.image} alt="" />
            </div>
            <h1 className='text-xl font-bold font-sans'>{element.category.charAt(0).toUpperCase() + element.category.slice(1)}</h1>
            <p className='w-[15rem] h-10 overflow-auto cursor-move text-purple-400' >{element.description}</p>
            <h1 className='text-[#D4A373]'>Rating: {element.rating.rate}</h1>
            <button className='px-4 py-2 rounded-3xl  bg-white border border-gray-200 border-solid  text-[#27E0B3] transition-all  hover:bg-[#27E0B3] hover:text-white'>Add to cart</button>
          </div>

        })

      }

    </div></>
  )}
</div>

  );

}


export default Product