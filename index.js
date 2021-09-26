// Assignment 1 to Read and Write into File Stream

// let fileSystem = require("fs");
// let productModule = require("./module/productModule").productDetails();

// var streamWritter = fileSystem.createWriteStream('Output_data.txt');//, {flags:'a'});

// productModule.forEach(element => {
//     streamWritter.write(`ProductId : ${element.pid}, ProductName : ${element.pName}, Price : ${element.price}, Qty : ${element.qty} \n`, 'utf8');
// });

// streamWritter.end();
// streamWritter.on("finish", function(){
//      console.log("write Complete !");
// })

// streamWritter.on("error", function(err){
//     console.log(err.stack);
// })


// Assignmemnt 2 MVC Application Development

var express = require('express');
var productModel = require("./model/productModel");
var productController = require("./controller/productController");

// npm i body-parser   --save
// var bodyParser = require("body-parser");
var app=express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static('public'))

app.set("view engine", "ejs");
app.set('views', __dirname + '/Views');

app.get('/',function(req,res)
{ 
    res.render(__dirname + "/Views/home.ejs"); 
});

app.use("/products", productController);

// app.get('/ShowProducts',function(req,res)
// {     
//     var data = {}; 	
//     // Get data from Model
// 	data.productArray  = productModel.getProducts();    

//     // Send the data to view
//     res.render(__dirname + "/Views/products.ejs", data); 
// });

// app.get('/details/:id',function(req,res)
// {
//     var data = {}; 	    
// 	data.productObj  = productModel.getProductById(req.params.id);    
//     res.render(__dirname + "/Views/details.ejs", data); 
// });

var server=app.listen(3002,function() {});
console.log("Server Started. URL:http://localhost:3002");