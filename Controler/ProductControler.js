const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ProductModel = require('../Model/ProductModel');
const Product = require('../Model/ProductModel');


exports.create = async (req, res) => {

        const { P_Name, Price, Quantity, Category, Description } = req.body;
        const product = new ProductModel({
            P_Id: Math.floor(Math.random() * 1000),
            P_Name,
            Price,
            Quantity,
            Category,
            Description,
            date: Date.now()
        });
        await product.save();
        res.send(product);

}

exports.getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.send(products);
    } catch (error) {
        next(error);
    }
}

exports.DeleteAllProducts = async (req, res, next) => {
    try {
        const product = await Product.deleteMany();
        res.send(product);
    } catch (error) {
        next(error);
    }
}

exports.DeleteById = async (req, res) => {
   
        const product = await Product.findOneAndDelete({ P_Id: req.params.P_Id });
        res.send(product);
    }  


exports.updateAllProducts = async (req, res, next) => {
    try {
        const product = await Product.findOneAndUpdate({ P_Id: req.params.P_Id }, req.body, { new: true });
        res.send(product);
    } catch (error) {
        next(error);
    }
}



