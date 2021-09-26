
// Static Data check
// let productArray = [
//     {pId:1, pName: "Product1", price: 100, qty: 10 },
//     {pId:2, pName: "Product2", price: 200, qty: 20 },
//     {pId:3, pName: "Product3", price: 300, qty: 40 },
//     {pId:4, pName: "Product4", price: 400, qty: 110 },
//     {pId:5, pName: "Product5", price: 500, qty: 100 },
//     {pId:6, pName: "Product6", price: 600, qty: 101 },
// ];


// exports.getProductById = function(pId){
//     var obj = productArray.find(item=>item.pId==pId);
//     return obj;
// }

// exports.getProducts = function(){
//     return productArray
// }

// MongoDB checks

const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/testDB', {useNewUrlParser: true});

//Define Schema 
var schema = mongoose.Schema;
var productSchema = new schema({
    pId: Number,
    pName: String,
    price: Number,
    qty: Number
}, {versionKey:false});

var productModel = mongoose.model('products', productSchema);
module.exports = productModel;