var express = require('express');
var path = require("path");

var app = express();

var port=9090;

app.set("view engine","ejs");

app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"bower_components")));

app.get("/",function(req,res){
	res.render('pages/home');
});

app.get("/wp_admin",function(req,res){
	res.render('pages/index');
});


app.listen(port);
console.log(' Server is running at ' + port);