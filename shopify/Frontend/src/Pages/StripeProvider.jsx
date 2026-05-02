import React from 'react'
 import { Elements } from '@stripe/react-stripe-js'
 import { loadStripe } from '@stripe/stripe-js'
import { useEffect, useState } from 'react';

const StripeProvider = ({ children }) => {
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const scriptId = 'razorpay-checkout-script';
    if (document.getElementById(scriptId)) {
      setLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => setLoaded(true);
    script.onerror = () => {
      console.error('Failed to load Razorpay SDK');
      setLoadError(true);
    };

    document.body.appendChild(script);
  }, []);

  if (loadError) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50 text-center dark:bg-slate-900">
        <div className="max-w-sm rounded-3xl bg-white p-6 shadow-xl dark:bg-slate-800">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Unable to load payment gateway</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Please refresh the page or try again later.
          </p>
        </div>
      </div>
    );
  }

  if (!loaded) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-900">
        <div className="rounded-3xl bg-white p-6 shadow-xl text-center dark:bg-slate-800">
          <p className="text-lg font-semibold text-slate-900 dark:text-white">Preparing payment gateway…</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">This should only take a moment.</p>
        </div>
      </div>
    );
  }

  return children;
};

export default StripeProvider