const  orderController  = require("../controllers/ordercontrollers");

const router = require("express").Router();

router.get("/order",orderController.getorderController)

module.exports = router;