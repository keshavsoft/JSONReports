var express = require('express');
var router = express.Router();
let CommonMasters = require("./Data/Masters");

router.use('/Masters', CommonMasters);

module.exports = router;