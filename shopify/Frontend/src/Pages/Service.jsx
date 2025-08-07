import React from 'react'
import Button from '../Component/Button'

function Service() {
  return (
    <div className='service mt-4'>
    <h1 className='serviceheading text-3xl ml-4 text-[#27E0B3]'>Our Services</h1>
      
      <div className='my-4'>
        <ul className='text-blue-500  ml-9 flex flex-col gap-4 '>
          <li>🛍️ Shop top-quality products at unbeatable prices</li>
          <li>🚚 Fast & reliable delivery</li>
          <li>🔐 Safe & secure checkout</li>
          <li>❤ ️ Easy returns & customer-first support</li>
        </ul>

         <div className='my-4 ml-9 text-blue-900   dark:text-gray-300'>we've got everything you need to look and feel your best.
Start exploring now and find your perfect look!<br/>
Because fashion should be easy, fun, and affordable.

         </div>
        <div className='text-2xl ml-9 '>👉<Button className='text-white '/></div>
      </div>

    </div>
  )
}

export default Service