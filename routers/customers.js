const express = require("express");
const customersController = require("../controllers/customers");
const router = express.Router();

router.post("/customers", customersController.createCustomer);

router.get("/customers", customersController.getAllCustomers);

module.exports = router;
