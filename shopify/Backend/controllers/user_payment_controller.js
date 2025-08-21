const Stripe = require('stripe');

const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`)



module.exports.payment=async(req,res)=>{
  const {amount}=req.body;

  try{
     const paymentIntent=await stripe.paymentIntents.create({
       amount,
       currency:"usd",
     });
     res.send({clientSecret:paymentIntent.client_secret});
  }catch(err){
     res.status(500).send({error:err.message});
  }

}