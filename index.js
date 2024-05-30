const express = require('express');
const mongoose = require("mongoose");
const Product = require("./Model/ProductModel");
const ProductControler = require("./Controler/ProductControler");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost:27017/Databse');

app.post("/create", ProductControler.create);

app.get("/getAllProducts", ProductControler.getAllProducts);


app.delete("/DeleteAllProducts", ProductControler.DeleteAllProducts);

app.delete("/DeleteById/:P_Id", ProductControler.DeleteById);
app.patch("/updateAllProducts/:P_Id", ProductControler.updateAllProducts);


app.listen(5000, () => console.log("Server run on 5000"));




