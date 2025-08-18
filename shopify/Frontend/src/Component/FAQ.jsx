import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'


const FAQ = () => {





  const data = [
    {

      question: "What is Shopify",
      answer: "Shopify is an Ecommerce Website where users buy product via online"


    },
    {
      question: "How do I create an account?",
      answer: "Click on the Sign Up button at the top right corner, fill in your details, and your account will be created instantly."
    },
   {
    question: "What payment methods do you accept?",
    answer: "We accept credit/debit cards, UPI, net banking, and popular wallets like Paytm, PhonePe, and Google Pay."
  },
    {
    question: "Are my payment details secure?",
    answer: "Yes, we use secure encryption and trusted payment gateways to keep your data safe."
  },
    {

      question: "Can I create more than 1 account",
      answer: "Yes You can created more than 1 account but with different email"


    }


  ]

  const [openStates, setopenStates] = useState(Array(data.length).fill(false));//initially all length value set to false when user click it changes its state again click toggle its state

  const toggleAnswer = (index) => {
    setopenStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))//this toggle  changes state for individual faq container when user clicks 
    );

  }








  return (
    <div className='userqueries mt-5 text-center w-full box-border'>
      <h1 className='text-4xl pb-2 text-[#27E0B3]'>Frequently Asked Questions</h1>
      <div>
        {
          data.map((element, idx) => {
            return <div key={idx} className='mx-52 mt-1 flex flex-col gap-1 w-2/3'>
              <div onClick={() => toggleAnswer(idx)} className=' cursor-pointer flex items-center dark:bg-gray-800  dark:hover:bg-[#414141] bg-[#EEEFF0] hover:bg-[#d1d2d3] dark:text-[#ffff] justify-between px-7 py-4 '>
                <h1 className='text-2xl '>{element.question}</h1>
                <i className={`text-3xl  ${openStates[idx] ? "ri-close-large-line" : "ri-add-large-line"
                  }`}></i>
              </div>

              <AnimatePresence>{openStates[idx] && (
                <motion.div key="content"
                  initial={{ opacity: 0, height: 0 }}//when add open
                  animate={{ opacity: 1, height: "auto" }}//when expand our height 
                  exit={{ opacity: 0, height: 0 }}//when again remove the height set to initial 
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className=" dark:bg-gray-800 bg-[#EEEFF0] text-start px-6  ">
                  <p className='text-[1.3rem] px-2 py-4'> {element.answer} </p>
                </motion.div>)}
              </AnimatePresence>

            </div>

          })

        }
      </div>

    </div>
  )
}

export default FAQ