import React from 'react'

function Footer() {


    const arr = [

        {
            heading: "Customer Service",

            Info: {
                info1: "Order Tracking",
                info2: "Shipping & Delivery",
                info3: "Returns & Refunds",
                info4: "Payment Options",
                info5: " Help Center"


            }


        },
        {
            heading: "Information",

            Info: {
                info1: "Privacy Policy",
                info2: "Terms & conditions",
                info3: "Cookie Policy",
                info4: " Sitemap",
                info5: " Help Center"

            }
        },
        {
            heading: "Company",

            Info: {
                info1: "About",
                info2: "Terms",
                info3: "Policy"
            }

        },
        {
            heading: "Social",
            Info: {
                info1: "Instagram",
                info2: "Twitter",
                info3: "Github"
            }
        },




    ]




    return (
        <footer className=' grid grid-cols-5 gap-16 px-6 py-4 my-7 ml-2'>
            <div className='flex flex-col gap-3 mr-8 '>
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

            {
                arr.map((Element, index) => {
                    return <div className='relative left-4'>
                        <h1 className='text-2xl text-[#2758e0] mb-4'>{Element.heading}</h1>

                        <div className='font-light text-gray-500 flex flex-col gap-2'>
                            <li className='list-none  transition-all  cursor-pointer   hover:text-gray-400 hover:underline hover:decoration-slate-500 '> {Element.Info.info1}</li>

                            <li className='list-none  transition-all  cursor-pointer   hover:text-gray-400 hover:underline hover:decoration-slate-500 '>{Element.Info.info2}</li>

                            <li className='list-none  transition-all  cursor-pointer   hover:text-gray-400 hover:underline hover:decoration-slate-500 '>{Element.Info.info3}</li>

                            <li className='list-none  transition-all  cursor-pointer   hover:text-gray-400 hover:underline hover:decoration-slate-500 '>{Element.Info.info4}</li>

                            <li className='list-none  transition-all  cursor-pointer   hover:text-gray-400 hover:underline hover:decoration-slate-500 '>{Element.Info.info5}</li>
                        </div>

                    </div>

                })

            }


            {/* <div>
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

 */

            }



        </footer>


    )
}

export default Footer