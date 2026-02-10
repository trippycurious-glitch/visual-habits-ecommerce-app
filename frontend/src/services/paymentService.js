import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000/api'
});

export async function initiateRazorpayOrder(payload) {
  const { data } = await api.post('/payments/create-order', payload);
  return data;
}

export async function verifyRazorpayPayment(payload) {
  const { data } = await api.post('/payments/verify', payload);
  return data;
}
