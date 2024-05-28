"use strict";



const CustomerModel = require('../Models/CustomerModel')
/// ya line ku lkhi h ?

// Controller functions

exports.CreateCustomer = async (req, res, next) => {
    try {
       
        const { name, mail, phoneNumber, address, gender,status } = req.body;
        const createCustomer = new CustomerModel({
            id: Math.floor(Math.random()* 10) ,
            name,
            mail,
            phoneNumber,
            address,
            gender,
            status,
            date: Date.now()
        });
        await createCustomer.save();
        res.send(createCustomer);
    } catch (error) {
        console.error("Create customer error:", error);
        res.status(500).json({ error: "Error creating customer" });
    }
};

exports.findCustomers = async (req, res, next) => {
    try {
        const findCustomers = await CustomerModel.find();
        res.json(findCustomers);
    } catch (error) {
        console.error("Find user error:", error);
        res.status(500).json({ error: "Error finding users" });
    }
};

exports. deleteAll = async (req, res) => {
    try {
        const deleteCustomer = await CustomerModel.deleteMany();
        res.json(deleteCustomer);
    } catch (error) {
        console.error("Delete all users error:", error);
        res.status(500).json({ error: "Error deleting users" });
    }
};

exports.deleteId = async (req, res, next) => {
    try {
        const deleteCustomer = await CustomerModel.findOneAndDelete({ id: req.params.id });
        res.json(deleteCustomer);
    } catch (error) {
        console.error("Delete user by ID error:", error);
        res.status(500).json({ error: "Error deleting user" });
    }
};

exports.updateCustomer = async (req, res) => {
    try {
        const updateCustomer = await CustomerModel.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        res.json(updateCustomer);
    } catch (error) {
        console.error("Update user error:", error);
        res.status(500).json({ error: "Error updating user" });
    }
};




