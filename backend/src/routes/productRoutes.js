import { Router } from 'express';
import { addProduct, listProducts } from '../controllers/productController.js';

const router = Router();

router.get('/', listProducts);
router.post('/', addProduct);

export default router;
