import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { initiateRazorpayOrder, verifyRazorpayPayment } from '../services/paymentService';

function CheckoutPage() {
  const { cart, cartTotal } = useCart();
  const [status, setStatus] = useState('');

  const handleCheckout = async () => {
    if (!cart.length) {
      setStatus('Cart empty — add products first.');
      return;
    }

    try {
      const order = await initiateRazorpayOrder({ amount: cartTotal, currency: 'INR' });
      setStatus(`Razorpay order created: ${order.id}`);

      if (order.mock) {
        const verification = await verifyRazorpayPayment({
          razorpay_order_id: order.id,
          razorpay_payment_id: 'pay_mock_success',
          razorpay_signature: 'mock_signature'
        });
        setStatus(verification.message);
      }
    } catch (error) {
      setStatus(error.response?.data?.message || 'Checkout failed.');
    }
  };

  return (
    <section>
      <h2>Checkout</h2>
      <p>Secure checkout with Razorpay.</p>
      <p>Order total: ₹{cartTotal}</p>
      <button onClick={handleCheckout}>Pay with Razorpay</button>
      {status && <p className="status">{status}</p>}
    </section>
  );
}

export default CheckoutPage;
