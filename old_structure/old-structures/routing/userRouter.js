const express = require("express");
const router = express.Router();
router.use(express.json())
const middleWare = require("../commonFunction/common")

const controller = require("../controller/userController");

router.post("/signup", controller.signUp);
router.put("/otpVerification", controller.otpVerification);
router.put("/reSendOtp", controller.reSendOtp);
router.get("/linkVerification/:email", controller.linkVerification);
router.post("/login", controller.login);
router.put("/reSetPassword", controller.reSetPassword);
router.put("/forgetPassword", controller.forgetPassword);
router.put("/changePassword", controller.changePassword);
router.put("/editProfile", middleWare.auth, controller.editProfile);
router.get('/getAllUser', controller.getAllUser);
router.get('/viewUser', controller.viewUser);
router.get('/ProductList', controller.ProductList);
router.get('/productListAggr', controller.productListAggr);
router.get('/geonear', controller.geonear);



















module.exports = router;