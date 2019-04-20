var express = require('express');
var path = require("path");

var app = express();

var port = process.env.PORT || 8080

app.set("view engine","ejs");

app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"bower_components")));

app.get("/",function(req,res){
	res.render('pages/index');
});
app.get("/widgets",function(req,res){
	res.render('pages/widgets');
});

app.listen(port);
console.log(' Server is running at ' + port);
