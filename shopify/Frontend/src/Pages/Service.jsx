import React from 'react'
import Button from '../Component/Button'
 import { CardSwipe } from '../components/ui/card-swipe'
function Service() {
 const images = [
            { src: "https://images.unsplash.com/photo-1619603364904-c0498317e145?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Card 1" },
            { src: "https://plus.unsplash.com/premium_photo-1669703777548-08503c3085a0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Card 2" },
            { src: "https://images.unsplash.com/photo-1600950207944-0d63e8edbc3f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGNsb3RoaW5nfGVufDB8fDB8fHww", alt: "Card 3" },
            { src: "https://images.unsplash.com/photo-1578681994506-b8f463449011?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Card 4" },
          ];




  return (
    <div className='service mt-4'>
 <div className="w-full">
      <CardSwipe images={images} autoplayDelay={2000} slideShadows={false}/>
    </div>

    <h1 className='serviceheading text-5xl ml-4 mt-10 text-center text-[#27E0B3]'>Our Services</h1>
      
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