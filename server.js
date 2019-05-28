var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, './public')))
app.use(express.urlencoded({extended: true}));
app.use(express.json());


var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
app.use('/', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, function(){
    console.log("Listening on PORT:" + PORT)
})