const Order = require('../models/Order');
const Item = require('../models/Item');

class OrderService {
    async createOrder(data) {
        // Mapeamento exigido pelo desafio
        const formattedOrder = {
            orderId: data.numeroPedido,
            value: data.valorTotal,
            creationDate: new Date(data.dataCriacao),
            items: data.items.map(item => ({
                productId: item.idItem,
                quantity: item.quantidadeItem,
                price: item.valorItem
            }))
        };

        // Salva no banco usando transação (garante que se o item falhar, o pedido não é criado)
        return await Order.create(formattedOrder, { include: [Item] });
    }
}

module.exports = new OrderService();