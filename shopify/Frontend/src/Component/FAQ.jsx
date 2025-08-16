import React ,{useState}from 'react'
import { motion } from 'motion/react'

const FAQ = () => {

const [show,setshow]=useState(false);
   
    const [openIndex, setOpenIndex] = useState(null); // track which item is open

  const toggleAnswer = (index) => {
    setOpenIndex(prev => (prev === index ? null : index)); // close if same index clicked
  };

    const data=[
        {

 question:"What is Shopify",
 answer:"Shopify is an Ecommerce Website where users buy product via online"


  },
        {

 question:"What is Shopify",
 answer:"Shopify is an Ecommerce Website where users buy product via online"


  },
        {

 question:"What is Shopify",
 answer:"Shopify is an Ecommerce Website where users buy product via online"


  },
        {

 question:"What is Shopify",
 answer:"Shopify is an Ecommerce Website where users buy product via online"


  },
        {

 question:"What is Shopify",
 answer:"Shopify is an Ecommerce Website where users buy product via online"


  },
        {

 question:"What is Shopify",
 answer:"Shopify is an Ecommerce Website where users buy product via online"


  }


]

    const variants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    closed: {
      opacity: 0,
      height:"0",
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };


  



    return (
        <div className='userqueries mt-5 text-center w-full box-border'>
            <h1 className='text-4xl pb-2 text-[#27E0B3]'>Frequently Asked Questions</h1>
{
            data.map((element,idx)=>{
 return <div key={idx} className='mx-52 mt-1 flex flex-col gap-1 w-2/3'>
                <div    onClick={() => toggleAnswer(idx)} className=' cursor-pointer flex items-center dark:bg-gray-800  dark:hover:bg-[#414141]  dark:text-[#ffff] justify-between px-7 py-4 '>
                    <h1 className='text-2xl '>{element.question}</h1>
                    <i className={`text-3xl transition-all ${
                openIndex === idx ? "ri-close-large-line" : "ri-add-large-line"
              }`}></i>
                </div>

                <motion.div initial="closed"  animate={openIndex === idx ? "open" : "closed"}
                    variants={variants} className=" dark:bg-gray-800 text-start px-6  ">
                    <p className='text-[1.3rem] px-2 py-4'> {element.answer} </p>
                </motion.div>

            </div>

            })
           
            }


        </div>
    )
}

export default FAQ