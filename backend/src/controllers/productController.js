let products = [
  {
    id: 'sticker-pack-rebel',
    name: 'Rebel Sticker Pack',
    category: 'stickers',
    price: 399,
    imageUrl:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80',
    variants: ['S', 'M', 'L'],
    stock: 100
  }
];

export function listProducts(_req, res) {
  return res.json(products);
}

export function addProduct(req, res) {
  const { name, category, price, imageUrl, variants, stock } = req.body;

  if (!name || !price || !imageUrl || !variants?.length) {
    return res.status(400).json({ message: 'Missing required product fields' });
  }

  const newProduct = {
    id: `${name.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`,
    name,
    category,
    price: Number(price),
    imageUrl,
    variants,
    stock: Number(stock || 0)
  };

  products = [newProduct, ...products];
  return res.status(201).json(newProduct);
}
