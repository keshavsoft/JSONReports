let express = require("express");
let Router = express.Router();
//let Repo = require("../../../../../Repository/Api/Reports/PullData/WithFilters/AsTable")
let commonController = require("../../../../../controllers/Api/Reports/PullData/WithFilters/OnPeriod")

Router.post('/', commonController.FilterOnDate);

module.exports = Router;