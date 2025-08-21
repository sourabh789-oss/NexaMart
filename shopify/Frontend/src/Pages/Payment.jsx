import { CardElement, useElements, useStripe, Elements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ProfileData } from '../context/ProfileContext';

const Payment = () => {

    //this is our data send from product page when we click on button buy Now
    const { state } = useLocation();
    const product = state?.product;


    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const { isdark } = useContext(ProfileData);//for reset the value when we toggle in white and dark mode 


    // Force re-render of CardElement when theme changes
    const [themeKey, setThemeKey] = useState(isdark ? "dark" : "light");

    useEffect(() => {
        setThemeKey(isdark ? "dark" : "light");
    }, [isdark]);




    // 🔹 Observe theme changes dynamically
    // useEffect(() => {
    //     const observer = new MutationObserver(() => {
    //         setDark(document.documentElement.classList.contains("dark"));
    //     });

    //     observer.observe(document.documentElement, {
    //         attributes: true,
    //         attributeFilter: ["class"],
    //     });

    //     return () => observer.disconnect();
    // }, []);


    //here api call for payment intent  from backend 

    const handleSubmit = async (e) => {

        e.preventDefault();
        if (!stripe || !elements) {//if any wrong then simpley return no action above 
            return;
        }

        setProcessing(true);
        setError(null);


        try {
            //call backend route to create Payment Intent 

            const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/create-payment-intent`, {

                amount: Math.round(product.price * 100),//stripe accept cents 

            }

            );
            const clientSecret = data.clientSecret;

            //confirm card Payment 
            const cardElement = elements.getElement(CardElement);

            const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement,
                },
            });

            if (error) {
                setError(error.message);
                setProcessing(false);
            }
            else if (paymentIntent && paymentIntent.status === "succeeded") {
                setSuccess(true);
                setProcessing(false);
                setError(null);
                setTimeout(() => {
                    setSuccess(false),
                        3000
                })
            }



        } catch (err) {
            setError(err.response?.data?.message || "Payment failed. Try Again");
            setProcessing(false);
        }


    };

    if (!product) {
        return <h2>Please Select Product Which One You want to Buy</h2>
    }



    return (<motion.div className=' flex   mt-[4%]  justify-center items-center   dark:bg-[#000000]px-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}

    >


        <form onSubmit={handleSubmit} className=' w-full max-w-md p-8 rounded-2xl shadow-2xl border border-white/20 bg-[#f9f9f9]  backdrop-blur-xl  dark:bg-white/5 dark:border-gray-700'>
            <h1 className='text-3xl text-center  mb-4 font-thin text-[#90e027] dark:text-red-700'>Secure Payment</h1>
            <h2 className='text-[#27E0B3]'>Pay for :{product.title}</h2>
            <p className="mb-4">Amount: <span className="text-gray-600 dark:text-[#90e027]">${product.price}</span></p>
            <div className="rounded-xl border border-white/20   backdrop-blur-md p-3 mb-4" >
                <CardElement
                    key={themeKey}
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                // issue here: apply dark mode white color when we toggle unless initially in not toggle in dark mode it stays black color due to prebuilt cardElement
                                color: isdark
                                    ? "#ffffff"   // white text in dark mode
                                    : "#000000",  // black text in light mode,
                                fontFamily: "monospace, Roboto, sans-serif",
                                "::placeholder": {
                                    color: isdark
                                        ? "#b3b3b3"
                                        : "#666666",
                                },
                                backgroundColor: "transparent",
                            },
                            invalid: { color: "#ff4d4d" },
                            complete: { color: "#90e027" },
                        },
                    }} />
            </div>
            <button disabled={!stripe || processing} className='w-full px-4 py-3 rounded-xl bg-[#27E0B3] text-black font-semibold transition-all hover:bg-[#90e027] hover:text-white disabled:opacity-50 dark:bg-[#90e027] dark:text-black dark:hover:bg-[#27E0B3]' type="submit">{processing ? "Processing..." : `$${product.price}`}</button>

            {error && <p className='text-red-500 mt-2'>{error}</p>}

            {success && <p className='text-green-500  mt-2 text-xl '>Payment Successfull ✅</p>}

        </form>





    </motion.div>


    )

}

export default Payment;