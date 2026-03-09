const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Order = sequelize.define('Order', {
    orderId: { type: DataTypes.STRING, primaryKey: true },
    value: { type: DataTypes.FLOAT, allowNull: false },
    creationDate: { type: DataTypes.DATE, allowNull: false }
}, { timestamps: false });

module.exports = Order;