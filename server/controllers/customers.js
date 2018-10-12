const Customer = require('../models').Customer;
const Order = require('../models').Order;

module.exports = {
    //create a new customer
    create(req, res){
        return Customer
            .create({
                name: req.body.name,
                contact_no:req.body.contact_no
            })
            .then( customer =>res.status(201).send(customer))
            .catch(error => res.status(400).send(error));

    },

    //list customers
    list(req, res){
        return Customer
            .all()
            .then(customers => res.status(201).send(customers))
            .catch(error => res.status(400).send(error));
    },

    //list customers with their relavent orders
    listCustomersWithOrders(req, res){
        return Customer
            .findAll({
                // include:[{
                //     model: Order,
                //     as: 'orders',
                // }],
                include:[{all:true}]
            })
            .then(customersWithOrders => res.status(200).send(customersWithOrders))
            .catch(error => res.status(400).send(error));
    },

    retrieve(req, res){
        return Customer
        .findById(req.params.customerId)
        .then( customer => {
            if(!customer){
                return res.status(404).send({
                    message: "Customer Not Found."
                });
            }
            
            return res.status(200).send(customer);
        })
        .catch(error => res.status(400).send(error));
    },

    update(req, res){
        return Customer
        .findById(req.params.customerId)
        .then( customer => {
            if(!customer){
                return res.status(404).send({
                    message: "Customer Not Found."
                });
            }
        
            return customer
            .update({
                name: req.body.name || customer.name,
                contact_no:req.body.contact_no || customer.contact_no
            })
            .then(() => res.status(200).send(customer)) //send the updated customer
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },

    destroy(req, res) {
        return Customer
        .findById(req.params.customerId)
        .then(customer => {
            if(!customer){
                return res.status(404).send({
                    message: "Customer Not Found"
                });
            }
            return customer
            .destroy()
            .then(() =>res.status(200).send({
                message: "Customer Deleted Successfully."
            }))
            .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    }



};