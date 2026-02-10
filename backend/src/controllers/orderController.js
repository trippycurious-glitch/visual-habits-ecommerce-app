let orders = [];

export function listOrders(_req, res) {
  return res.json(orders);
}

export function createOrderRecord(req, res) {
  const { customerName, email, amount, items, paymentStatus = 'created' } = req.body;

  if (!customerName || !email || !items?.length) {
    return res.status(400).json({ message: 'Missing required order information' });
  }

  const newOrder = {
    id: `ord_${Date.now()}`,
    customerName,
    email,
    amount,
    items,
    paymentStatus,
    createdAt: new Date().toISOString()
  };

  orders = [newOrder, ...orders];
  return res.status(201).json(newOrder);
}
