"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var routes_1 = require("./routes");
var app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(routes_1["default"]);
app.get('*', function (req, res) { return res.sendFile(path.join(__dirname, '../public/index.html')); });
var port = process.env.PORT || 3000;
app.listen(port, function () { return console.log("Server listening on port: " + port); });
