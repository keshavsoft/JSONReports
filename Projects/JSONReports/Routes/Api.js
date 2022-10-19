let express = require('express');
let router = express.Router();
let CommonData = require("./Api/Data");
let CommonApiReports = require("./Api/Reports");

router.use('/Data', CommonData);
router.use('/Reports', CommonApiReports);

module.exports = router;