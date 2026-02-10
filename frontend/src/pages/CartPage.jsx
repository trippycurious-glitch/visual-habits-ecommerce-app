import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function CartPage() {
  const { cart, cartTotal, updateQuantity, removeFromCart } = useCart();

  return (
    <section>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Add a visual weapon from the collection.</p>
      ) : (
        <>
          <div className="stack">
            {cart.map((item) => (
              <article key={`${item.id}-${item.selectedSize}`} className="line-item">
                <div>
                  <h3>{item.name}</h3>
                  <p className="muted">Size: {item.selectedSize}</p>
                  <p>₹{item.price}</p>
                </div>
                <div className="qty-controls">
                  <button onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}>
                    +
                  </button>
                  <button onClick={() => removeFromCart(item.id, item.selectedSize)}>Remove</button>
                </div>
              </article>
            ))}
          </div>
          <h3>Total: ₹{cartTotal}</h3>
          <Link className="cta" to="/checkout">
            Proceed to Checkout
          </Link>
        </>
      )}
    </section>
  );
}

export default CartPage;
