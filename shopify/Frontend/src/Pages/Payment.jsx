import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { motion } from 'motion/react';
import { ProfileData } from '../context/ProfileContext';

const Payment = () => {

    //this is our data send from product page when we click on button buy Now
    const { state } = useLocation();
    const product = state?.product;


    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const { firstname, lastname, email, MobileNo, isdark } = useContext(ProfileData);




   

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!product) {
            setError('Please select a product before continuing.');
            return;
        }

        if (!window?.Razorpay) {
            setError('Razorpay checkout is not available yet. Please refresh the page.');
            return;
        }

        setProcessing(true);
        setError(null);
        setSuccess(null);

        try {
            const usdToInrRate = 83; // Approximate USD to INR conversion rate (update as needed)
            const amountInInr = product.price * usdToInrRate;//for convert the amount of dollar into Indian rupey 
            const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/create-order`, {
                amount: Math.round(amountInInr * 100), // Convert to paise
            }, {
              withCredentials:true 
            });

            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID,
                amount: data.amount,
                currency: data.currency,
                order_id: data.orderId,
                name: 'Nexamart Store',
                description: product.title || product.category || 'Product purchase',
                image: '/favicon.ico',
                theme: {
                    color: isdark ? '#90e027' : '#27E0B3',
                },
                prefill: {
                    name: `${firstname || ''} ${lastname || ''}`.trim(),
                    email: email || '',
                    contact: MobileNo || '',
                },
                handler: function (response) {
                    if (response?.razorpay_payment_id) {
                        setSuccess('Payment successful! Thank you for your order.');
                        setError(null);
                    } else {
                        setError('Payment was not completed.');
                    }
                    setProcessing(false);
                },
                modal: {
                    ondismiss: function () {
                        setProcessing(false);
                    },
                },
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (err) {
            setError(err.response?.data?.error || err.message || 'Unable to initiate payment.');
            setProcessing(false);
        }
    };

    if (!product) {
        return <h2>Please Select Product Which One You want to Buy</h2>
    }

    return (
        <motion.div className='min-h-screen px-4 py-10 sm:px-6 lg:px-8 bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
        >
            <div className='mx-auto w-full max-w-3xl'>
                <div className='grid gap-8 lg:grid-cols-[1.2fr_0.8fr]'>
                    <section className='rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900'>
                        <h1 className='text-3xl font-semibold text-slate-900 dark:text-white'>Secure Checkout</h1>
                        <p className='mt-3 text-sm text-slate-600 dark:text-slate-400'>Confirm your purchase and complete payment using Razorpay.</p>
                        <div className='mt-8 space-y-4'>
                            <div className='rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950'>
                                <h2 className='text-lg font-semibold text-slate-900 dark:text-white'>Product</h2>
                                <p className='mt-2 text-sm text-slate-600 dark:text-slate-400'>{product.title || product.category}</p>
                            </div>
                            <div className='rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950'>
                                <h2 className='text-lg font-semibold text-slate-900 dark:text-white'>Amount</h2>
                                <p className='mt-2 text-xl font-bold text-emerald-600 dark:text-emerald-400'>₹{Math.round(product.price * 83)}</p>
                            </div>
                            <div className='rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950'>
                                <h2 className='text-lg font-semibold text-slate-900 dark:text-white'>Billing Info</h2>
                                <p className='mt-2 text-sm text-slate-600 dark:text-slate-400'>{`${firstname || 'Guest'} ${lastname || ''}`.trim()}</p>
                                <p className='text-sm text-slate-600 dark:text-slate-400'>{email || 'Email not available'}</p>
                                <p className='text-sm text-slate-600 dark:text-slate-400'>{MobileNo || 'Phone not available'}</p>
                            </div>
                        </div>
                    </section>

                    <section className='rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900'>
                        <h2 className='text-2xl font-semibold text-slate-900 dark:text-white'>Payment details</h2>
                        <p className='mt-2 relative  text-sm text-slate-600 dark:text-slate-400'>Click “Pay now” to open the Razorpay checkout modal.</p>
                        <form onSubmit={handleSubmit} className='mt-8 space-y-5'>
                            <div className='rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950'>
                                <p className='text-sm relative  text-slate-600 dark:text-slate-400'>Razorpay will securely process your payment in a popup window.</p>
                            </div>
                            <button
                                type='submit'
                                disabled={processing}
                                className='w-full rounded-3xl bg-emerald-400 px-5 py-4 text-base font-semibold text-slate-950 transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-60 dark:text-slate-950'
                            >
                                {processing ? 'Opening Razorpay…' : `Pay ₹${Math.round(product.price * 83)}`}
                            </button>
                            {error && <p className='text-sm font-medium text-red-600 dark:text-red-400'>{error}</p>}
                            {success && <p className='text-sm font-medium text-emerald-700 dark:text-emerald-300'>{success}</p>}
                        </form>
                    </section>
                </div>
            </div>
        </motion.div>
    );
};

export default Payment;