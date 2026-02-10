import { useCart } from '../context/CartContext';

function ProductGrid() {
  const { catalog, addToCart } = useCart();

  return (
    <section>
      <h3>Latest Drops</h3>
      <div className="product-grid">
        {catalog.map((item) => (
          <article key={item.id} className="product-card">
            <img src={item.image} alt={item.name} loading="lazy" />
            <div>
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>
              <p className="muted">Sizes: {item.variants.join(', ')}</p>
            </div>
            <button onClick={() => addToCart(item, item.variants[0])}>Add to Cart</button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
