import { useState } from 'react';
import { useCart } from '../context/CartContext';

function AdminPage() {
  const { catalog, setCatalog } = useCart();
  const [draft, setDraft] = useState({
    name: '',
    price: '',
    image: '',
    variants: 'S,M,L'
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = `${draft.name.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`;
    setCatalog((prev) => [
      {
        id,
        name: draft.name,
        price: Number(draft.price),
        image: draft.image,
        variants: draft.variants.split(',').map((item) => item.trim())
      },
      ...prev
    ]);
    setDraft({ name: '', price: '', image: '', variants: 'S,M,L' });
  };

  return (
    <section>
      <h2>Admin Dashboard</h2>
      <p>Add or edit products for fresh drops.</p>
      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          required
          placeholder="Product name"
          value={draft.name}
          onChange={(event) => setDraft((prev) => ({ ...prev, name: event.target.value }))}
        />
        <input
          required
          type="number"
          placeholder="Price"
          value={draft.price}
          onChange={(event) => setDraft((prev) => ({ ...prev, price: event.target.value }))}
        />
        <input
          required
          placeholder="Image URL"
          value={draft.image}
          onChange={(event) => setDraft((prev) => ({ ...prev, image: event.target.value }))}
        />
        <input
          required
          placeholder="Variants (comma separated)"
          value={draft.variants}
          onChange={(event) => setDraft((prev) => ({ ...prev, variants: event.target.value }))}
        />
        <button type="submit">Add Product</button>
      </form>
      <div className="stack">
        {catalog.map((item) => (
          <article key={item.id} className="line-item">
            <span>{item.name}</span>
            <span>₹{item.price}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AdminPage;
