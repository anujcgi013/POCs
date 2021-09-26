var express = require('express');
var productModel = require("../model/productModel");
var path = require('path');

let router = express.Router();
var app=express();
const viewFolderPath = path.resolve('Views');

router.use(express.json());
router.use(express.urlencoded({
  extended: true
}));

router.get('/ShowProducts',function(req,res)
{     
    var data = {}; 	
    productModel.find({}, function(err, resData) 
	{
		if(err)	 {    
			console.log(err); 
			return; 
        }
		       
		var str  = viewFolderPath + "/products.ejs"; 
		data.productArray =  resData;   
        console.log("Anuj" + resData);    
		res.render(str, data);		
	});
});

router.get('/details/:id',function(req,res)
{
    var data = {}; 	
    productModel.findOne({"pId":req.params.id}, function(err, resData) 
	{
		if(err)	 {    
			console.log(err); 
			return; 
        }
		       
		var str  = viewFolderPath + "/details.ejs"; 
		data.productObj =  resData;       
		res.render(str, data);		
	});
});

router.get('/create',function(req,res)
{	 
    res.render( viewFolderPath + "/create.ejs");
});

router.post('/create',function(req,res)
{	 
   // New Object for Dept Model Object
	var productObj  = new  productModel({ 
		pId : parseInt(req.body.txtProductId),	
		pName  :  req.body.txtProductName,
        price  :  req.body.txtProductPrice,
        qty  :  req.body.txtProductQty});
	 
        productObj.save(function(err) {
		if(err)	 {  console.log(err); return; }		
		console.log("Record inserted in Database");
		res.redirect("/products/ShowProducts");	
	});
});


// router.get('/delete/:id',function(req,res)
// {
//     var data = {}; 	
//     deptModel.findOneAndRemove({"deptno":req.params.id}, function(err) 
// 	{
// 		if(err)	 {    
// 			console.log(err); 
// 			return; 
//         }

// 		res.redirect("/depts/ShowDepts");
// 	});
// });


// router.get('/edit/:id',function(req,res)
// {
//     var data = {}; 	
//     deptModel.findOne({"deptno":req.params.id}, function(err, resData) 
// 	{
// 		if(err)	 {    
// 			console.log(err); 
// 			return; 
//         }
		       
// 		var str  = viewFolderPath + "/edit.ejs"; 
// 		data.deptObj =  resData;       
// 		res.render(str, data);		
// 	});
// });


// router.post('/edit',function(req,res)
// {	 
//    // new object
// 	var deptObj  = { 
// 		deptno : parseInt(req.body.txtDeptno),	
// 		dname  :  req.body.txtDname,
// 		loc   : req.body.txtLoc  };
	 
//     deptModel.findOneAndUpdate({ deptno: deptObj.deptno }, deptObj, function(err) 
// 	{
// 		if(err)	 {  console.log(err); return; }		
// 		console.log("Record inserted in Database");
// 		res.redirect("/depts/ShowDepts");	
// 	});
// });


module.exports = router;