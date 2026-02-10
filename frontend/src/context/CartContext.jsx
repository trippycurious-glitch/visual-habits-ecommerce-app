import { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext();

const seedItems = [
  {
    id: 'sticker-pack-rebel',
    name: 'Rebel Sticker Pack',
    price: 399,
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80',
    variants: ['S', 'M', 'L']
  },
  {
    id: 'poster-neon-district',
    name: 'Neon District Poster',
    price: 899,
    image:
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=600&q=80',
    variants: ['A4', 'A3', 'A2']
  },
  {
    id: 'wallart-glitch-city',
    name: 'Glitch City Wall Art',
    price: 2499,
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=80',
    variants: ['18x24', '24x36', '30x40']
  }
];

export function CartProvider({ children }) {
  const [catalog, setCatalog] = useState(seedItems);
  const [cart, setCart] = useState([]);

  const addToCart = (item, selectedSize) => {
    setCart((prev) => {
      const existing = prev.find((entry) => entry.id === item.id && entry.selectedSize === selectedSize);
      if (existing) {
        return prev.map((entry) =>
          entry.id === item.id && entry.selectedSize === selectedSize
            ? { ...entry, quantity: entry.quantity + 1 }
            : entry
        );
      }
      return [...prev, { ...item, selectedSize, quantity: 1 }];
    });
  };

  const updateQuantity = (id, selectedSize, quantity) => {
    if (quantity <= 0) {
      setCart((prev) => prev.filter((item) => !(item.id === id && item.selectedSize === selectedSize)));
      return;
    }

    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.selectedSize === selectedSize ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id, selectedSize) => {
    setCart((prev) => prev.filter((item) => !(item.id === id && item.selectedSize === selectedSize)));
  };

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  );
  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  );

  return (
    <CartContext.Provider
      value={{
        catalog,
        setCatalog,
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        cartCount,
        cartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
