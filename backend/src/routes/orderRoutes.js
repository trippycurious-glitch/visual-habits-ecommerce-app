import { Router } from 'express';
import { createOrderRecord, listOrders } from '../controllers/orderController.js';

const router = Router();

router.get('/', listOrders);
router.post('/', createOrderRecord);

export default router;
