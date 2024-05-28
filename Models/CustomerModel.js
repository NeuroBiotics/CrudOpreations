const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sessiondb');

const customerSchema = new mongoose.Schema({
id: { type: Number,required: true},
name: {type: String, required: true },
mail:{type: String, required: true },
phoneNumber:{type: Number, required: true },
address:{type: String, required: true },
gender:{type: String, required: true },
status:{type: String, required: true },
date: { type: Date, default: Date.now }

}) 
const CustomerModel = mongoose.model('customer',  customerSchema);
module.exports = CustomerModel;  //focus on it

