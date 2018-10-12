const customersController = require('../controllers').customers;
const ordersController = require('../controllers').orders;
console.log(customersController.listCustomersWithOrders);

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send(
        {
            message: 'Welcome to the customers API',
        }
    ));

    //Customer routes
    app.post('/api/customers',customersController.create);
    app.get('/api/customers', customersController.list);
    app.get('/api/customerswithorders', customersController.listCustomersWithOrders);
    app.get('/api/customers/:customerId', customersController.retrieve);
    app.put('/api/customers/:customerId', customersController.update);
    app.delete('/api/customers/:customerId', customersController.destroy);

    //Order routes
    app.post('/api/customers/:customerId/orders',ordersController.create);
    app.get('/api/orders', ordersController.list);
    app.get('/api/orders/:orderId', ordersController.retrieve);
};