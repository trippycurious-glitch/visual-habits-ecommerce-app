import Razorpay from 'razorpay';
import crypto from 'crypto';
import { env } from '../config/env.js';

const razorpay =
  env.razorpayKeyId && env.razorpayKeySecret
    ? new Razorpay({ key_id: env.razorpayKeyId, key_secret: env.razorpayKeySecret })
    : null;

export async function createRazorpayOrder({ amount, currency }) {
  if (!razorpay) {
    return {
      id: `order_mock_${Date.now()}`,
      amount: amount * 100,
      currency,
      mock: true
    };
  }

  return razorpay.orders.create({
    amount: amount * 100,
    currency,
    receipt: `vh_${Date.now()}`,
    payment_capture: true
  });
}

export function verifyRazorpaySignature(orderId, paymentId, signature) {
  if (!razorpay) {
    return signature === 'mock_signature';
  }

  const expected = crypto
    .createHmac('sha256', env.razorpayKeySecret)
    .update(`${orderId}|${paymentId}`)
    .digest('hex');

  return expected === signature;
}
