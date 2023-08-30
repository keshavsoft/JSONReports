let express = require("express");
let router = express.Router();
let CommonControllers = require("../../../../controllers/Validate/Users/InUserDataJson/ForUserNameAndPassword.controller");
let Middlewares = require("../../../../Middlewares/ForRoutes/Validate/Users/InUserDataJson/ForUserNameAndPassword")

router.post('/', Middlewares.ForUserAndPasswordReturnFirmDetails, CommonControllers.ForUserAndPasswordReturnFirmDetails);

module.exports = router;