'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact_no: DataTypes.STRING
  }, {});
  Customer.associate = function(models) {
    // associations can be defined here
    Customer.hasMany(models.Order,{
      foreignKey: 'customerId',
      as:'orders'
    });
    //Customer has many orders and orders have the foreign key customerId
  };
  return Customer;
};