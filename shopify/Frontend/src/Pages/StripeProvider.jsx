import React from 'react'
 import { Elements } from '@stripe/react-stripe-js'
 import { loadStripe } from '@stripe/stripe-js'
const StripeProvider = ({children}) => {

    const stripePromise=loadStripe(`${import.meta.env.VITE_PUBLISHABLE_KEY}`)
  return (
    <Elements stripe={stripePromise}>{children}</Elements>
  )
}

export default StripeProvider