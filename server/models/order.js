'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    title: {
        type:DataTypes.STRING,
        allowNull: false,
    }
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsTo(models.Customer, {
      foreignKey: 'customerId',
      onDelete: 'CASCADE'
    });
  };
  return Order;
};