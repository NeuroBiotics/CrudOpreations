"use strict";

const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());

const customerController = require("./Controllers/CustomerController");

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/sessiondb');
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post('/create', customerController.CreateCustomer);
app.get('/find', customerController.findCustomers);
app.delete('/deleteAll', customerController.deleteAll);
app.delete('/delete/:id', customerController.deleteId);
app.put('/update/:id', customerController.updateCustomer);

// Start the server

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});