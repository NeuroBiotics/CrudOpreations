const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Databse');
const ProductSchema = new mongoose.Schema({
    P_Id: Number,
    P_Name: String,
    Price: Number,
    Quantity:Number, 
    Category: String, 
    Description: String,  
});
const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;

