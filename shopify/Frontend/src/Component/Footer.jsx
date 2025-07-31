import React from 'react'

function Footer() {
  return (
     <footer className=' grid grid-cols-5 gap-16 px-6 py-4'>
                <div className='flex flex-col gap-3'>
                    <span className='text-[#27E0B3] text-3xl '
                    >Shopify</span>
                    <div>
                        <div className='font-light text-gray-500'>
                            Your All in one Destination
                        </div>

                    </div>
                    <input type="email" className='text-center -ml-5 w-[15rem] rounded  h-8  text-lg outline-none text-red-800 ' placeholder='eg124@gmail.com' />
                    <button className='-ml-5 px-4 py-2 rounded-md bg-transparent text-inherit  hover:bg-red-600 border border-white  hover:border-none 
                transition-transform '>Subscribe</button>
                </div>

                <div>
                    <h1 className='text-2xl text-[#2758e0] mb-4'>Customer Service</h1>

                    <div className='font-light text-gray-500 flex flex-col gap-2'>
                        <li className='list-none  transition-all  cursor-pointer   hover:text-gray-400 hover:underline hover:decoration-slate-500 '> Order Tracking</li>

                        <li className='list-none  transition-all  cursor-pointer   hover:text-gray-400 hover:underline hover:decoration-slate-500 '>Shipping & Delivery</li>

                        <li className='list-none  transition-all  cursor-pointer   hover:text-gray-400 hover:underline hover:decoration-slate-500 '>Returns & Refunds</li>

                        <li className='list-none  transition-all  cursor-pointer   hover:text-gray-400 hover:underline hover:decoration-slate-500 '>Payment Options</li>

                        <li className='list-none  transition-all  cursor-pointer   hover:text-gray-400 hover:underline hover:decoration-slate-500 '>Help Center</li>
                    </div>
                </div>

                <div>
                    <h1 className='text-2xl text-[#2758e0] mb-4'>Information</h1>
                    <div className='font-light text-gray-500 flex flex-col gap-2'>
                        <li className='list-none transition-all hover:text-gray-400 cursor-pointer hover:underline hover:decoration-slate-500 '> Privacy Policy </li>

                        <li className='list-none  transition-all  cursor-pointer  hover:text-gray-400 hover:underline hover:decoration-slate-500 '>Terms & conditions </li>

                        <li className='list-none  transition-all  cursor-pointer  hover:text-gray-400 hover:underline hover:decoration-slate-500 '>Cookie Policy </li>

                        <li className='list-none  transition-all  cursor-pointer   hover:text-gray-400 hover:underline hover:decoration-slate-500 '>Sitemap </li>

                        <li className='list-none  transition-all  cursor-pointer   hover:text-gray-400 hover:underline hover:decoration-slate-500 '>Help Center</li>
                    </div>
                </div>

                <div>
                    <h1 className='text-2xl text-[#2758e0] mb-4'>Company </h1>
                    <div className='font-light text-gray-500 flex flex-col gap-2'>
                        <li className='list-none  transition-all  cursor-pointer   hover:text-gray-400 hover:underline hover:decoration-slate-500 '> About </li>

                        <li className='list-none  transition-all  cursor-pointer   hover:text-gray-400 hover:underline hover:decoration-slate-500 '>Terms  </li>

                        <li className='list-none  transition-all  cursor-pointer   hover:text-gray-400 hover:underline hover:decoration-slate-500 '> Policy </li>
                    </div>

                </div>


                <div>
                    <h1 className='text-2xl text-[#2758e0] mb-4'>Social</h1>
                    <div className='font-light text-gray-500 flex flex-col gap-2'>
                        <li className='list-none  transition-all  cursor-pointer   hover:text-gray-400 hover:underline hover:decoration-slate-500  '>Instagram</li>
                        <li className='list-none  transition-all  cursor-pointer   hover:text-gray-400 hover:underline hover:decoration-slate-500 '>Twitter</li>
                        <li className='list-none  transition-all  cursor-pointer   hover:text-gray-400 hover:underline hover:decoration-slate-500 '>Github</li>
                    </div>
                </div>





            </footer>
           

  )
}

export default Footer