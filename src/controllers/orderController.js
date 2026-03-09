const Order = require('../models/Order');
const Item = require('../models/Item');

exports.create = async (req, res) => {
  try {
    const { numeroPedido, valorTotal, dataCriacao, items } = req.body;

    // Realizando o Mapping conforme solicitado no PDF
 const newOrder = await Order.create({
    orderId: numeroPedido,
    value: valorTotal,
    creationDate: new Date(dataCriacao),
    // Mapeando a lista internamente
    items: items.map(item => ({
        productId: item.idItem,
        quantity: item.quantidadeItem,
        price: item.valorItem
    }))
}, {
    include: [{ model: Item, as: 'items' }] // Especifique o alias aqui também
});

    return res.status(201).json({ message: "Pedido criado com sucesso!", data: newOrder });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao criar pedido", details: error.message });
  }
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  const order = await Order.findByPk(id, { include: [Item] });
  
  if (!order) return res.status(404).json({ message: "Pedido não encontrado" });
  return res.json(order);
};

 