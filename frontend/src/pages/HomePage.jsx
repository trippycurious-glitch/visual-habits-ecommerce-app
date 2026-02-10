import { Link } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';

function HomePage() {
  return (
    <section>
      <div className="hero">
        <p className="eyebrow">Street-Aesthetic Drops</p>
        <h2>Bold visuals for walls, laptops, and rebels.</h2>
        <p>Premium sticker packs, posters, and wall art engineered for underground vibes.</p>
        <Link className="cta" to="/product">
          Shop Collection
        </Link>
      </div>
      <ProductGrid />
    </section>
  );
}

export default HomePage;
