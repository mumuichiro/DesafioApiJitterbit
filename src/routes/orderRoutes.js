const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/auth');

// Todas as rotas de pedidos passarão pelo JWT
router.post('/order', orderController.create);
router.get('/order/list', authMiddleware, async (req, res) => {
    const orders = await require('../models/Order').findAll({ include: [require('../models/Item')] });
    res.json(orders);
});
router.get('/order/:id', authMiddleware, orderController.getById);

module.exports = router;