import { useState } from 'react';
import { useCart } from '../context/CartContext';

function ProductPage() {
  const { catalog, addToCart } = useCart();
  const [selectedSizes, setSelectedSizes] = useState({});

  return (
    <section>
      <h2>Product Listing</h2>
      <div className="product-grid">
        {catalog.map((product) => {
          const selectedSize = selectedSizes[product.id] || product.variants[0];

          return (
            <article key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <label>
                Size Variant
                <select
                  value={selectedSize}
                  onChange={(event) =>
                    setSelectedSizes((prev) => ({ ...prev, [product.id]: event.target.value }))
                  }
                >
                  {product.variants.map((variant) => (
                    <option key={variant} value={variant}>
                      {variant}
                    </option>
                  ))}
                </select>
              </label>
              <button onClick={() => addToCart(product, selectedSize)}>Add to Cart</button>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ProductPage;
