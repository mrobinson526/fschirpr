"use strict";
exports.__esModule = true;
var express = require("express");
var router = express.Router();
router.get('/api/hello', function (req, res, next) {
    res.json('World');
});
exports["default"] = router;
