const Order = require('../models').Order;

module.exports= {
    create(req, res){
        return Order
        .create({
            title: req.body.title,
            customerId: req.params.customerId
        })
        .then(order => res.status(201).send(order))
        .catch(error => res.status(400).send(error));

    },
    list(req, res){
        return Order
        .all()
        .then( orders => res.status(200).send(orders))
        .catch( error => res.status(400).send(error));
    },

    retrieve(req, res){
        return Order
        .findById(req.params.orderId)
        .then(order => {
            if (!order){
                return res.status(404).send({
                    message: "Order Not Found"
                })
            }
            return res.status(200).send(order);
        }) 
        .catch(error => res.status(400).send(error));
    }



};