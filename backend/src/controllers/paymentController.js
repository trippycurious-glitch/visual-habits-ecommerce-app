import { createRazorpayOrder, verifyRazorpaySignature } from '../services/razorpayService.js';

export async function createOrder(req, res) {
  try {
    const { amount, currency = 'INR' } = req.body;

    if (!amount || Number(amount) <= 0) {
      return res.status(400).json({ message: 'Amount must be greater than 0' });
    }

    const order = await createRazorpayOrder({ amount: Number(amount), currency });
    return res.status(201).json(order);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to create order', error: error.message });
  }
}

export function verifyPayment(req, res) {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const isValid = verifyRazorpaySignature(
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature
  );

  if (!isValid) {
    return res.status(400).json({ message: 'Payment verification failed' });
  }

  return res.status(200).json({ message: 'Payment verified successfully' });
}
