const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

module.exports.payment = async (req, res) => {
  const { amount } = req.body;

  try {
    const options = {
      amount: amount, // amount in smallest currency unit (paise for INR)
      currency: "INR",
      receipt: "receipt#1",
    };
    const order = await razorpay.orders.create(options);
    res.send({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      key: process.env.RAZORPAY_KEY_ID
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};