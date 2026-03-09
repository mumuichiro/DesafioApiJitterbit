require('dotenv').config(); // Carrega as variáveis do .env
const express = require('express');
const sequelize = require('./config/database');
const orderRoutes = require('./routes/orderRoutes');
const Order = require('./models/Order');
const Item = require('./models/Item');

const app = express();

// Middleware essencial para aceitar JSON do Postman
app.use(express.json());

// Configuração de Relacionamentos (Necessário para o Sequelize criar as tabelas SQL corretamente)
Order.hasMany(Item, { foreignKey: 'orderId', as: 'items' });
Item.belongsTo(Order, { foreignKey: 'orderId' });

// Rota de Diagnóstico (Teste rápido no navegador ou Postman)
app.get('/', (req, res) => {
    res.send('🚀 API Jitterbit Online e pronta para receber conexões!');
});

// Uso das Rotas de Pedidos
app.use(orderRoutes);

// Sincronização e Inicialização
const PORT = process.env.PORT || 3000;

// { force: false } evita que o SQLite apague seus dados ao reiniciar
sequelize.sync({ force: false }).then(() => {
    console.log('✅ Banco de Dados SQL (SQLite) conectado com sucesso!');
    app.listen(PORT, () => {
        console.log(`📡 Servidor ativo em: http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error('❌ Erro crítico ao conectar ao banco:', err);
});

